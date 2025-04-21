// ComponentReminder.jsx
import React, { useEffect, useState } from "react";

const ComponentReminder = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "H") {
      setIsVisible((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="reminder-container">
      <div className="reminder">
        <h2>🧠 Component Decision Reminder</h2>
        <ul>
          <li>Используется в нескольких местах — сделай переиспользуемым</li>
          <li>Можно переиспользовать позже — вынеси компонент</li>
          <li>Легко обобщается? — Сделай универсальным</li>
          <li>Сильно завязан на контекст? — Оставь одноразовым</li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentReminder;
