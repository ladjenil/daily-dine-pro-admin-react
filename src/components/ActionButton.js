import React, { useState } from 'react';

const ActionButton = ({ actionText, className }) => {
  const [text, setText] = useState(actionText);

  const handleClick = () => {
    const action = actionText.toLowerCase();
    let processingText = 'Processing...';

    switch (action) {
      case 'view':
        processingText = 'Viewing...';
        break;
      case 'approve':
        processingText = 'Approved!';
        break;
      case 'suspend':
        processingText = 'Suspended!';
        break;
      case 'delete':
        processingText = 'Deleted!';
        break;
      case 'reject':
        processingText = 'Rejected!';
        break;
      default:
        processingText = 'Processing...';
    }

    setText(processingText);

    setTimeout(() => {
      setText(actionText);
    }, 1500);
  };

  return (
    <button className={`action-btn ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ActionButton;