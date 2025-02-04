"use client"
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

export default function Chatbot() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  const responses = {
    hello: "Hi there! How can I assist you today?",
    help: "Sure, I'm here to help! What do you need assistance with?",
    thanks: "You're welcome! If you have more questions, feel free to ask.",
    default: "I'm not sure how to respond to that. Can you ask something else?"
  };

  const getResponse = (input) => {
    const lowerCaseInput = input.toLowerCase();
    if (lowerCaseInput.includes('hello')) {
      return responses.hello;
    } else if (lowerCaseInput.includes('help')) {
      return responses.help;
    } else if (lowerCaseInput.includes('thanks')) {
      return responses.thanks;
    } else {
      return responses.default;
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev, 
        { sender: 'User', text: input }
      ]);
      const botResponse = getResponse(input);
      setMessages((prev) => [
        ...prev, 
        { sender: 'Bot', text: botResponse }
      ]);
      setInput('');
    }
  };

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null; // Return nothing until hydration is complete
  }

  return (
    <div className="flex justify-center items-center h-full" style={{ backgroundColor: '#222222' }}>
      <div className="bg-[#333333] shadow-lg rounded-lg p-6 max-w-sm w-full">
        <button
          onClick={() => setIsChatVisible(!isChatVisible)}
          className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 w-full mb-4 transition ease-in-out delay-150"
        >
          {isChatVisible ? t('Hide Chat') : t("Talking with Chat")}
        </button>

        {isChatVisible && (
          <div>
            <h3 className="text-lg font-bold mb-4 text-center text-yellow-700">{t("Chatbot")}</h3>
            <div className="border border-yellow-700 rounded-lg p-4 mb-4 h-64 overflow-y-auto bg-[#222222] text-white">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.sender === 'Bot' ? 'text-left' : 'text-right'}`}>
                  <span className="block text-sm font-medium">{msg.sender}:</span>
                  <span className="block">{msg.text}</span>
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border border-yellow-700 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-yellow-700 bg-[#333333] text-white placeholder-gray-400"
                placeholder={t("Type your message...")}
              />
              <button
                onClick={handleSend}
                className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 transition ease-in-out delay-150"
              >
                {t("Send")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
