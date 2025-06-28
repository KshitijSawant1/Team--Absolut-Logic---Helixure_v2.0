import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { toast } from "react-toastify";
import { registerLog } from "../../utils/logUtils";

const JoinSpaceModal = ({ isOpen, onClose }) => {
  const [inviteInput, setInviteInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [spaceInfo, setSpaceInfo] = useState(null);
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const insertMemberWithUsername = async (spaceId, userId, role = "Viewer") => {
    console.log("➡ Inserting member for space:", spaceId, "user:", userId);

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("firstname, lastname")
      .eq("id", userId)
      .single();

    if (profileError || !profile) {
      toast.error("Failed to fetch user profile");
      console.error("Profile fetch error:", profileError);
      return false;
    }

    const username = `${profile.firstname} ${profile.lastname}`.trim();

    const { data: insertResult, error: insertError } = await supabase
      .from("shared_playground_members")
      .insert([
        {
          space_id: spaceId,
          user_id: userId,
          role,
          username,
        },
      ])
      .select(); // Get inserted row back for confirmation

    if (insertError) {
      toast.error("Failed to add member");
      console.error("Insert member error:", insertError);
      return false;
    }

    await registerLog({
      space_id: spaceId,
      user_id: userId,
      username,
      action: "USER_JOINED",
      description: `${username} joined the space as ${role}`,
    });
    console.log("✅ USER_JOINED log inserted via utility");

    console.log("✅ Inserted member:", insertResult);
    return true;
  };
  const handlePreviewInvite = async () => {
    if (!inviteInput.trim()) {
      toast.error("Please enter an invite code or link.");
      return;
    }

    let code = inviteInput.trim();
    if (code.includes("/join/")) {
      code = code.split("/join/")[1]?.split(/[?#]/)[0] || code;
    }

    try {
      setLoading(true);
      const { data: invite, error } = await supabase
        .from("invites")
        .select("*")
        .eq("code", code)
        .maybeSingle();

      if (error || !invite) {
        toast.error("Invalid invite code or link.");
        return;
      }

      if (new Date(invite.expires_at) < new Date()) {
        toast.error("This invite has expired.");
        return;
      }

      // Fetch space info
      const { data: space } = await supabase
        .from("shared_playground")
        .select("id, title, description, owner,color1,color2")
        .eq("id", invite.space_id)
        .single();

      const { data: owner } = await supabase
        .from("profiles")
        .select("firstname, lastname, designation, avatarUrl")
        .eq("id", space.owner)
        .single();

      setSpaceInfo(space);
      setOwnerInfo(owner);
      setShowPreview(true);
    } catch (err) {
      toast.error("Unexpected error occurred.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleJoin = async () => {
    if (!inviteInput.trim()) {
      toast.error("Please enter an invite code or link.");
      return;
    }

    let code = inviteInput.trim();
    if (code.includes("/join/")) {
      code = code.split("/join/")[1]?.split(/[?#]/)[0] || code;
    }

    try {
      setLoading(true);

      const { data: invite, error: inviteError } = await supabase
        .from("invites")
        .select("*")
        .eq("code", code)
        .maybeSingle();

      if (inviteError || !invite) {
        toast.error("Invalid invite code or link.");
        return;
      }

      if (new Date(invite.expires_at) < new Date()) {
        toast.error("This invite has expired.");
        return;
      }

      if (invite.used) {
        toast.error("This invite has already been used.");
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        toast.error("User not authenticated");
        return;
      }

      const { data: existing } = await supabase
        .from("shared_playground_members")
        .select("*")
        .eq("space_id", invite.space_id)
        .eq("user_id", user.id)
        .maybeSingle();

      if (existing) {
        toast.info("You have already joined this space.");
        return;
      }

      const success = await insertMemberWithUsername(invite.space_id, user.id);
      if (success) {
        await supabase
          .from("invites")
          .update({ used: true })
          .eq("id", invite.id);

        toast.success("Successfully joined the space!");
        onClose();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-[26rem] shadow-xl transition-all duration-300 ease-in-out">
          {!showPreview ? (
            <>
              <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                Join Shared Space
              </h2>
              <input
                autoFocus
                aria-label="Invite code or link"
                type="text"
                placeholder="Enter Invite Code or Link"
                value={inviteInput}
                onChange={(e) => setInviteInput(e.target.value.trimStart())}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handlePreviewInvite}
                  disabled={loading}
                  className={`${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white px-4 py-1.5 rounded`}
                >
                  {loading ? "Verifying..." : "Preview Space"}
                </button>
                <button
                  onClick={() => {
                    setInviteInput("");
                    onClose();
                  }}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1.5 rounded"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                Space Preview
              </h2>

              <div className="mb-4 text-sm space-y-2 pb-2">
                <div
                  className={`w-full h-5 rounded ${spaceInfo.color1} ${spaceInfo.color2} bg-gradient-to-r`}
                ></div>

                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Title:
                  </span>{" "}
                  <span className="text-gray-700 dark:text-gray-300">
                    {spaceInfo.title}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Description:
                  </span>{" "}
                  <span className="text-gray-700 dark:text-gray-300">
                    {spaceInfo.description}
                  </span>
                </div>

                {ownerInfo && (
                  <div className="flex items-center gap-3">
                    <img
                      src={ownerInfo.avatarUrl || "/default-avatar.png"}
                      className="w-10 h-10 rounded-lg border object-cover"
                      alt="Owner Avatar"
                    />

                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {ownerInfo.firstname} {ownerInfo.lastname}
                      </p>
                      <p className="text-sm text-gray-500">
                        {ownerInfo.designation}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleJoin}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded"
                >
                  Join Space
                </button>
                <button
                  onClick={() => {
                    setInviteInput("");
                    setShowPreview(false);
                  }}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1.5 rounded"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};
export default JoinSpaceModal;
