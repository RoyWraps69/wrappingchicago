import React from 'react';
import ChatWidget from './ChatWidget';

const AppWithChat: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {children}
      <ChatWidget isOpen={isChatOpen} onToggle={toggleChat} />
    </>
  );
};

export default AppWithChat;