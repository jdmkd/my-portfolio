// components/Message.js
import React, { useEffect, useState } from "react";

const typeStyles = {
  success: {
    bg: "bg-green-100",
    border: "border-green-400",
    text: "text-green-800",
    icon: "✅",
  },
  error: {
    bg: "bg-red-100",
    border: "border-red-400",
    text: "text-red-800",
    icon: "❌",
  },
  info: {
    bg: "bg-blue-100",
    border: "border-blue-400",
    text: "text-blue-800",
    icon: "ℹ️",
  },
};

const Message = ({ type = "info", text = "", duration = 4000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (text) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), duration);
      return () => clearTimeout(timer);
    }
  }, [text, duration]);

  if (!show) return null;

  const style = typeStyles[type] || typeStyles.info;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div
        className={`flex items-center gap-3 px-4 py-3 border ${style.bg} ${style.border} ${style.text} rounded-lg shadow-lg
          animate-slideIn opacity-0 animate-fadeIn transition duration-300 ease-out`}
      >
        <span className="text-xl">{style.icon}</span>
        <p className="font-medium text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Message;
