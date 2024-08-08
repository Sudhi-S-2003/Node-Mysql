import React, { useContext } from 'react';
import { MessageContext } from './MessageProvider'; 
import './MessageBox.css';
const iconMap = {
  success: '✅',         // Checkmark
  error: '❌',           // Cross mark
  warning: '⚠️',        // Warning sign
  info: 'ℹ️',           // Information sign
  loading: '⏳',        // Hourglass
  alert: '🚨',          // Police car light
  tip: '💡',            // Light bulb
  question: '❓',       // Question mark
  done: '✔️',          // Heavy check mark
  failed: '🚫',        // Prohibited sign
  notice: '📝',        // Memo
  update: '🔄',        // Anticlockwise arrows button
  success_circle: '🟢', // Green circle
  error_circle: '🔴',   // Red circle
  info_circle: '🔵',    // Blue circle
  warning_circle: '🟠', // Orange circle
  mail: '📧',          // E-mail
  phone: '📞',         // Telephone receiver
};


function MessageBox() {
  const { messages, removeMessage } = useContext(MessageContext);

  const handleClose = (index) => {
    removeMessage(index); 
  };

  return (
    <div className="message-container">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.type}`}>
          <span className="message-icon">{iconMap[msg.type]}</span>
          <p>{msg.message}</p>
          <button className="message-close-btn" onClick={() => handleClose(index)}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}

export default MessageBox;
