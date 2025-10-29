import React, { useState } from 'react';

const ReplyButton = () => {
  const [text, setText] = useState('Reply');
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setText('Replying...');
    setIsSent(false); // In case it was already sent and user clicks again
    setTimeout(() => {
      setText('Reply Sent!');
      setIsSent(true);
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isSent}
      className={`ml-4 px-4 py-2 text-white text-sm rounded-lg transition-colors ${
        isSent
          ? 'bg-green-600'
          : 'bg-orange-700 hover:bg-orange-800'
      }`}
    >
      {text}
    </button>
  );
};

export default ReplyButton;