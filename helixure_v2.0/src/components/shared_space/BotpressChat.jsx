import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    const loadBotpress = async () => {
      // Inject inject.js
      const inject = document.createElement("script");
      inject.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
      inject.defer = true;
      document.body.appendChild(inject);

      // Wait until inject.js loads
      inject.onload = () => {
        // Inject config.js only after inject.js loads
        const config = document.createElement("script");
        config.src =
          "https://files.bpcontent.cloud/2025/06/23/16/20250623164514-TPFBVU7G.js";
        config.defer = true;
        document.body.appendChild(config);

        config.onload = () => {
          console.log("✅ Botpress loaded");
        };
      };
    };

    loadBotpress();
  }, []);

  return null;
};

export default BotpressChat;
