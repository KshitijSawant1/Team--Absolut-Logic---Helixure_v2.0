// src/components/BlockShowcase.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Navigation removed
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlockCard from "../block_carousal/BlockCard2";
import getBlockColor from "../../utils/getBlockColorBlockchain"; // adjust path as needed

const dummyBlocks = [
  {
    id: "1",
    sr: 1,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-15T00:00:00Z"),
    title: "Genesis Block",
    description: "First block in the chain.",
    hash: "0xgenesis1234567890abcde",
    previousHash: "0xnull",
    gas: "0.000001",
    data: "Welcome to Helixure",
    timestamp: "2025-06-15T00:00:00Z",
  },
  {
    id: "2",
    sr: 2,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-15T03:00:00Z"),
    title: "Proof of Work",
    description: "User successfully solved the PoW mini-game.",
    hash: "0xauthblock9876543210abcd1234",
    previousHash: "0xgenesis1234567890abcde",
    gas: "0.002345",
    data: "PoW: Math puzzle completed",
    timestamp: "2025-06-15T03:00:00Z", // Block 2
  },
  {
    id: "3",
    sr: 3,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-15T06:00:00Z"),
    title: "File Upload",
    description: "User uploaded a document to the chain.",
    hash: "0xfileblock4567890abcdeff1234",
    previousHash: "0xauthblock9876543210abcd1234",
    gas: "0.004120",
    data: "Document.pdf added via Drag & Drop",
    timestamp: "2025-06-15T06:00:00Z", // Block 3
  },
  {
    id: "4",
    sr: 4,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-15T11:15:00Z"),
    title: "Pattern Verified",
    description: "User drew a valid blockchain pattern.",
    hash: "0xpatternblockab98761234cdfe",
    previousHash: "0xfileblock4567890abcdeff1234",
    gas: "0.001870",
    data: "Z-pattern verified at login",
    timestamp: "2025-06-15T11:15:00Z",
  },
  {
    id: "5",
    sr: 5,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-15T09:00:00Z"),
    title: "Shared Space",
    description: "User joined a collaborative shared environment.",
    hash: "0xsharedspaceblock901234abcd",
    previousHash: "0xpatternblockab98761234cdfe",
    gas: "0.003210",
    data: "User invited via link: /join/helixure-lab",
    timestamp: "2025-06-15T09:00:00Z", // Block 4
  },
  {
    id: "6",
    sr: 6,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-15T15:00:00Z"),
    title: "Gas Meter Update",
    description: "Gas consumption meter was incremented.",
    hash: "0xgasupdateblockcd7890efab3456",
    previousHash: "0xsharedspaceblock901234abcd",
    gas: "0.002800",
    data: "Gas used for block creation recorded",
    timestamp: "2025-06-15T15:00:00Z", // Block 6
  },
  {
    id: "7",
    sr: 7,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-15T18:00:00Z"),
    title: "Comment Added",
    description: "User commented on a shared block.",
    hash: "0xcommentblock99887766ffccdd",
    previousHash: "0xgasupdateblockcd7890efab3456",
    gas: "0.001500",
    data: "“This update looks great!” – User",
    timestamp: "2025-06-15T18:00:00Z", // Block 7
  },
  {
    id: "8",
    sr: 8,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-15T21:00:00Z"),
    title: "Token Minted",
    description: "User minted a unique Helixure token.",
    hash: "0xtokenmintblockabc123xyz789",
    previousHash: "0xcommentblock99887766ffccdd",
    gas: "0.005000",
    data: "Token #HX24-MINT minted on Ethereum",
    timestamp: "2025-06-15T21:00:00Z", // Block 8
  },
  {
    id: "9",
    sr: 9,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-16T00:00:00Z"),
    title: "Profile Updated",
    description: "User updated their Helixure profile settings.",
    hash: "0xprofileblock123456abcd9999",
    previousHash: "0xtokenmintblockabc123xyz789",
    gas: "0.001200",
    data: "Updated avatar and status to 'Open'",
    timestamp: "2025-06-16T00:00:00Z",
  },
  {
    id: "10",
    sr: 10,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-16T03:00:00Z"),
    title: "New Space Created",
    description: "User created a private blockchain workspace.",
    hash: "0xnewspaceblock987abc321",
    previousHash: "0xprofileblock123456abcd9999",
    gas: "0.002500",
    data: "Space titled 'Research Notes' created",
    timestamp: "2025-06-16T03:00:00Z",
  },
  {
    id: "11",
    sr: 11,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-16T06:00:00Z"),
    title: "Invite Sent",
    description: "User invited a collaborator to their shared space.",
    hash: "0xinvitationblock2233445566",
    previousHash: "0xnewspaceblock987abc321",
    gas: "0.001000",
    data: "Invite sent to user: jessica@helixure.tech",
    timestamp: "2025-06-16T06:00:00Z",
  },
  {
    id: "12",
    sr: 12,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-16T09:00:00Z"),
    title: "Drawing Canvas Used",
    description: "User made a drawing in the whiteboard canvas.",
    hash: "0xdrawingblock9988112233",
    previousHash: "0xinvitationblock2233445566",
    gas: "0.003670",
    data: "Freehand drawing block saved",
    timestamp: "2025-06-16T09:00:00Z",
  },
  {
    id: "13",
    sr: 13,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-16T12:00:00Z"),
    title: "Pattern Authenticated",
    description: "Pattern-based login authenticated successfully.",
    hash: "0xpatternloginblock5544332211",
    previousHash: "0xdrawingblock9988112233",
    gas: "0.002100",
    data: "Z-shape pattern validated",
    timestamp: "2025-06-16T12:00:00Z",
  },
  {
    id: "14",
    sr: 14,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-16T15:00:00Z"),
    title: "PoH Visual Log",
    description: "Block logged with unique Proof-of-History color.",
    hash: "0xpohblockaabbccddeeff",
    previousHash: "0xpatternloginblock5544332211",
    gas: "0.001760",
    data: "Color of Day: Indigo | Hue: Medium",
    timestamp: "2025-06-16T15:00:00Z",
  },
  {
    id: "15",
    sr: 15,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-16T18:00:00Z"),
    title: "AI Assistant Triggered",
    description: "User asked Helixure AI to summarize notes.",
    hash: "0xaiblock998877665544",
    previousHash: "0xpohblockaabbccddeeff",
    gas: "0.004200",
    data: "Summary generated for Blockchain Lecture Notes",
    timestamp: "2025-06-16T18:00:00Z",
  },
  {
    id: "16",
    sr: 16,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-16T21:00:00Z"),
    title: "Replay Accessed",
    description: "User replayed a previously created block flow.",
    hash: "0xreplayblockaa11bb22cc33",
    previousHash: "0xaiblock998877665544",
    gas: "0.002100",
    data: "Replay started for Block Flow ID: 123456",
    timestamp: "2025-06-16T21:00:00Z",
  },
  {
    id: "17",
    sr: 17,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-17T00:00:00Z"),
    title: "New Member Joined",
    description: "New collaborator joined the shared Helixure board.",
    hash: "0xmemberjoinblock44556677",
    previousHash: "0xreplayblockaa11bb22cc33",
    gas: "0.001300",
    data: "Member: ankit@helixure.tech added",
    timestamp: "2025-06-17T00:00:00Z",
  },
  {
    id: "18",
    sr: 18,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-17T03:00:00Z"),
    title: "PDF Exported",
    description: "Block data exported as a secure PDF.",
    hash: "0xpdfexportblock11223344",
    previousHash: "0xmemberjoinblock44556677",
    gas: "0.003000",
    data: "PDF Exported: session_summary.pdf",
    timestamp: "2025-06-17T03:00:00Z",
  },
  {
    id: "19",
    sr: 19,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-17T06:00:00Z"),
    title: "System Backup",
    description: "All block data backed up to Helixure Vault.",
    hash: "0xbackupblock66778899aa",
    previousHash: "0xpdfexportblock11223344",
    gas: "0.004800",
    data: "Backup completed with timestamp: 2025-06-17T06:00Z",
    timestamp: "2025-06-17T06:00:00Z",
  },
  {
    id: "20",
    sr: 20,
    x: 0,
    y: 0,
    hue_color: getBlockColor("2025-06-17T09:00:00Z"),
    title: "Helixure Theme Changed",
    description: "User updated UI theme to ‘Night Mode’.",
    hash: "0xthemechangeblock8899aabbcc",
    previousHash: "0xbackupblock66778899aa",
    gas: "0.001900",
    data: "Theme set to 'Dark Galaxy' with animated transitions",
    timestamp: "2025-06-17T09:00:00Z",
  },
];

const BlockShowcase = () => {
  return (
    <div className="py-10 px-4 bg-transparent">
      <Swiper
        spaceBetween={12}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-6xl mx-auto"
      >
        {dummyBlocks.map((block) => (
          <SwiperSlide key={block.id} className="!w-[280px]">
            <BlockCard {...block} isFlowMode={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlockShowcase;
