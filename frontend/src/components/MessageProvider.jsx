import React, { createContext, useState, useContext } from 'react';
import MessageBox from './MessageBox'; 

export const MessageContext = createContext(); 

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = (type, message) => {
    setMessages(prevMessages => [...prevMessages, { type, message }]);
    setTimeout(() => {
      setMessages(prevMessages => prevMessages.slice(1)); 
    }, 5000); 
  };

  const removeMessage = (index) => {
    setMessages(prevMessages => prevMessages.filter((_, i) => i !== index));
  };

  return (
    <MessageContext.Provider value={{ addMessage, removeMessage, messages }}>
      {children}
      <MessageBox /> 
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}
