import React, { useState } from "react";

const steps = [
  {
    title: "Welcome to Blockchain Whiteboard",
    content: (
      <div className="space-y-6 text-center">
        {/* 📌 Points Section */}
        <div className="text-sm space-y-3">
          <p>This platform offers a private environment to:</p>
          <ul className="list-disc list-inside text-left inline-block text-sm space-y-1">
            <li>Create your own blockchain blocks with custom data.</li>
            <li>Visually interact with each block in a structured format.</li>
            <li>Track block hashes, links, timestamps, and gas used.</li>
            <li>Understand how blockchain works through hands-on creation.</li>
            <li>
              Switch between card and flow views for flexible understanding.
            </li>
          </ul>
          <p className="pt-2">
            Let’s take a quick walkthrough of the key features before you begin!
          </p>
        </div>

        {/* 💠 Ripple Box */}
        <div className="flex justify-center items-center w-full">
          <div
            className="relative overflow-hidden p-4 h-32 w-80 rounded-xl bg-blue-50 hover:bg-blue-100 cursor-pointer text-blue-800 font-semibold text-center transition"
            onClick={(e) => {
              const circle = document.createElement("span");
              const diameter = Math.max(
                e.currentTarget.clientWidth,
                e.currentTarget.clientHeight
              );
              const radius = diameter / 2;
              circle.style.width = circle.style.height = `${diameter}px`;
              circle.style.left = `${
                e.clientX -
                e.currentTarget.getBoundingClientRect().left -
                radius
              }px`;
              circle.style.top = `${
                e.clientY - e.currentTarget.getBoundingClientRect().top - radius
              }px`;
              circle.classList.add("ripple");

              const ripple =
                e.currentTarget.getElementsByClassName("ripple")[0];
              if (ripple) ripple.remove();
              e.currentTarget.appendChild(circle);
            }}
          >
            <style>
              {`
              .ripple {
                position: absolute;
                border-radius: 9999px;
                background: rgba(59, 130, 246, 0.4);
                transform: scale(0);
                animation: ripple-animation 600ms linear;
                pointer-events: none;
              }

              @keyframes ripple-animation {
                to {
                  transform: scale(4);
                  opacity: 0;
                }
              }
            `}
            </style>
            Your Whiteboard
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "MetaMask Connection",
    content: (
      <div className="flex flex-col items-center space-y-6 text-sm">
        <div className="text-left max-w-md space-y-4">
          <p>
            To securely interact with the blockchain and begin creating blocks,
            you’ll need to connect a MetaMask wallet.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Install the MetaMask extension from the official site:
              <div className="mt-2 flex justify-center">
                <button
                  onClick={() =>
                    window.open("https://metamask.io/download.html", "_blank")
                  }
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Visit MetaMask.io
                  </span>
                </button>
              </div>
            </li>
            <li>Set up a new wallet by following the on-screen prompts.</li>
            <li>Create a strong password and store it securely.</li>
            <li>
              <strong>Important:</strong> Back up your 12-word Secret Recovery
              Phrase safely. It’s the only way to recover your wallet.
            </li>
            <li>Never share your Recovery Phrase – not even with us.</li>
          </ul>
          <p className="mt-2 text-center">
            Your MetaMask wallet serves as your blockchain identity. It’s
            essential for securely creating, signing, and verifying blocks.
          </p>
        </div>

        {/* Ethereum Animation GIF */}
        <img
          src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/ethanimation.gif?updatedAt=1750835198740"
          alt="Ethereum animation"
          className="w-24 h-24 "
        />
      </div>
    ),
  },
  {
    title: "Get Sepolia Test ETH",
    content: (
      <div className="flex flex-col items-center space-y-4 text-sm">
        <div className="text-left max-w-md">
          <p>
            To perform blockchain operations like block creation and gas
            consumption, you’ll need some test ETH on the Sepolia Testnet.
          </p>

          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>
              Use the faucet links below to request free test ETH for your
              MetaMask wallet.
            </li>
            <li>
              You’ll be asked to enter your Sepolia wallet address (from
              MetaMask).
            </li>
            <li>Test ETH may take a few minutes to reflect in your wallet.</li>
          </ul>

          {/* 🚰 Faucet Buttons */}
          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <button
              onClick={() =>
                window.open("https://sepoliafaucet.com/", "_blank")
              }
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Visit Sepolia Faucet
              </span>
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://cloud.google.com/application/web3/faucet/ethereum/sepolia",
                  "_blank"
                )
              }
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-400 to-orange-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Google Cloud Faucet
              </span>
            </button>
          </div>

          <p className="text-center mt-3">
            After claiming, refresh MetaMask to see your test balance.
          </p>

          {/* 🖼 Image Here */}
          <div className="flex justify-center mt-4">
            <img
              src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/wallet.png?updatedAt=1750836719211" // replace with your image URL
              alt="Faucet guide"
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Connect Your MetaMask Account to the Website",
    content: (
      <div className="flex flex-col items-center space-y-4 text-sm">
        <div className="text-left max-w-md">
          <p>
            Once you've installed and set up MetaMask, the next step is to
            connect it to this platform. This ensures that you can create, sign,
            and verify blocks as a verified blockchain user.
          </p>

          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Open MetaMask and unlock your wallet with your password.</li>
            <li>Click the "Connect Wallet" button on this website’s header.</li>
            <li>
              MetaMask will prompt you to approve the connection. Accept it.
            </li>
            <li>
              Once connected, your wallet address will appear on the screen.
            </li>
            <li>
              This connection is essential for linking your on-chain actions
              with this whiteboard.
            </li>
          </ul>

          <p className="mt-3 text-center font-semibold text-blue-700">
            Connecting MetaMask is a one-time secure authorization – no
            sensitive info is shared.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Block Creation",
    content: (
      <div className="flex flex-col items-center space-y-4 text-sm">
        <div className="text-left max-w-md">
          <p>
            Every block you create consists of a <strong>title</strong> and a{" "}
            <strong>message</strong>. Once submitted, the block is:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Hashed to ensure its contents are tamper-proof.</li>
            <li>Linked to the hash of the previous block.</li>
            <li>Chained in a sequential and verifiable structure.</li>
            <li>Timestamped and optionally tracked with gas usage.</li>
          </ul>
          <p className="mt-2">
            This structure mimics how real blockchain ledgers are built, block
            by block.
          </p>
        </div>

        {/* Dummy Button for Visual Cue */}
        <div className="flex items-center justify-center pt-3">
          <button
            onClick={() => setDrawerOpen(true)}
            data-tooltip-target="tooltip-new"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">New item</span>
          </button>
        </div>

        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
        >
          Create New Block
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    ),
  },
  {
    title: "Blockchain Transaction Time",
    content: (
      <div className="flex flex-col items-center space-y-4 text-sm">
        <div className="text-left max-w-md">
          <p>
            Blockchain transactions aren’t instant. Here’s what you need to
            know:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              Transactions typically take a few seconds to a couple of minutes
              to be confirmed.
            </li>
            <li>
              The speed depends on network congestion and the amount of gas
              you're willing to pay.
            </li>
            <li>
              Once confirmed, your transaction will reflect in the block
              history.
            </li>
            <li>
              Don't worry if it's not immediate – just give the network a moment
              to process.
            </li>
          </ul>
          <p className="mt-2">
            Your patience ensures secure and verified blockchain interaction.
          </p>
          {/* 🖼 Image Here */}
          <div className="flex justify-center mt-4">
            <img
              src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/transaction.gif?updatedAt=1750840059627" // replace with your image URL
              alt="Faucet guide"
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Gas Money Meter",
    content: (
      <div className="flex flex-col items-center space-y-4 text-sm">
        <div className="text-left max-w-md">
          <p>
            Every time you create a block, it consumes a small amount of gas.
            The gas meter helps you understand and track this usage:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              Gas represents the computational effort required to execute
              blockchain operations.
            </li>
            <li>
              The meter accumulates gas used for each block created within your
              space.
            </li>
            <li>
              This gives you visibility into your blockchain activity and helps
              measure cost efficiency.
            </li>
            <li>
              When Proof of Work is enabled, gas usage may increase based on the
              puzzle solved.
            </li>
          </ul>
          <p className="mt-2">
            Use the gas meter to stay informed about your blockchain
            interactions and their resource consumption.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <img
            src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/gas%20pump.png?updatedAt=1750840812507" // replace with your image URL
            alt="Faucet guide"
            className="w-full max-w-xs"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Card View",
    content: (
      <div className="space-y-4 text-left text-sm text-gray-700 dark:text-gray-200">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-3xl">
            <svg
              className="w-[37px] h-[37px] text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3H5Zm10 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7V5h8v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Displays each block as a card</strong> for easy reading.
          </li>
          <li>
            <strong>Shows key block details</strong> like title, hash, and gas
            used.
          </li>
          <li>
            <strong>Organized in a clean grid</strong> layout for clarity.
          </li>
          <li>
            <strong>Best for reviewing entries individually</strong> at a
            glance.
          </li>
          <li>
            <strong>Ideal for quick scanning</strong> and copying data manually.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Flow View",
    content: (
      <div className="space-y-4 text-left text-sm text-gray-700 dark:text-gray-200">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-3xl">
            <svg
              className="w-[37px] h-[37px] text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h1a5.002 5.002 0 0 0 4.927-4.146A3.001 3.001 0 0 0 16 3a3 3 0 0 0-1.105 5.79A3.001 3.001 0 0 1 12 11h-1c-.729 0-1.412.195-2 .535V8.83A3.001 3.001 0 0 0 8 3Z" />
            </svg>
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Visualizes block connections</strong> as a linked chain.
          </li>
          <li>
            <strong>Shows relationships</strong> between current and previous
            hashes.
          </li>
          <li>
            <strong>Dynamic layout</strong> that adjusts as you add blocks.
          </li>
          <li>
            <strong>Great for understanding chain flow</strong> at a glance.
          </li>
          <li>
            <strong>Interactive view</strong> supporting zoom, pan, and hover.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Disclaimer",
    content: (
      <div className="flex flex-col items-center space-y-4 text-sm">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-yellow-500 dark:text-yellow-400 text-3xl">
            <svg
              class="w-[37px] h-[37px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"
              />
            </svg>
          </div>
        </div>
        <div className="text-left max-w-md">
          <p>
            This platform is intended strictly for educational and testing
            purposes. All blockchain interactions happen on a test network and
            should not involve any real assets or sensitive information.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              Do not use real wallet credentials, private keys, or confidential
              data.
            </li>
            <li>
              All generated blocks, data, and interactions are stored in a
              decentralized test environment.
            </li>
            <li>
              We are not responsible for any misuse, data loss, or third-party
              access resulting from improper usage.
            </li>
            <li>
              Always verify sources when connecting wallets or sharing data.
            </li>
          </ul>
          <p className="mt-2">
            By continuing to use this application, you acknowledge and agree to
            the above conditions.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "You're All Set!",
    content: (
      <div className="flex flex-col items-center space-y-5 text-sm text-center">
        <p className="text-base font-medium">
          You’ve completed the walkthrough. You’re now ready to start building
          your blockchain experience.
        </p>

        <ul className="list-disc list-inside space-y-1 text-left max-w-md text-gray-600 dark:text-gray-300">
          <li>
            You can now create your first block with a custom title and message.
          </li>
          <li>
            Track each block’s unique hash, timestamp, and connection to
            previous ones.
          </li>
          <li>
            Monitor your gas usage as you build to stay informed of network
            costs.
          </li>
          <li>
            All blocks are securely linked, helping you visualize real
            blockchain behavior.
          </li>
        </ul>

        <p className="italic text-gray-700 dark:text-gray-400">
          “Every block you create writes your story to the chain.”
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click <strong>Finish</strong> below to begin your journey.
        </p>
      </div>
    ),
  },
];

const BlockchainInstructionalPrompt = ({ onClose }) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else onClose();
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };
  return (
    isOpen && (
      <div className="fixed  z-[1000] inset-0 z-40 bg-black/30 backdrop-blur-sm flex">
        <div className="w-[26rem] h-screen bg-white/90 dark:bg-gray-900/90 shadow-lg overflow-y-auto overflow-x-hidden transition-transform p-6 space-y-6 relative">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-100">
            INSTRUCTIONS
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close Instructions"
          >
            ✕
          </button>
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={isDropdownOpen}
              aria-controls="drawer-dropdown"
              className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 flex items-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Dropdown
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="relative overflow-x-auto bg-gray-100 dark:bg-gray-800 rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <thead className="text-xs text-gray-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Traverse
                      </th>
                    </tr>
                  </thead>

                  <tbody id="drawer-dropdown">
                    {steps.map((step, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-[180px] truncate"
                          title={step.title} // Optional: tooltip to show full title on hover
                        >
                          {step.title}
                        </th>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => {
                              const el = document.getElementById(
                                `step-${index}`
                              );
                              if (el) {
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                                setDropdownOpen(false);
                              }
                            }}
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
                          >
                            Go
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-md shadow-sm text-sm">
            <strong>Tip:</strong> Use this guide to explore the blockchain
            whiteboard features. Click any section to get started!
          </div>
          {steps.map((step, index) => (
            <div key={index} id={`step-${index}`} className="border-b pb-6">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {step.title}
              </h3>
              <div>{step.content}</div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default BlockchainInstructionalPrompt;
