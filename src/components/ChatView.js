import React from 'react';
import {
  MdCheckCircle,
  MdSend
} from 'react-icons/md';
import { colors } from '../constants/theme';

const ChatView = ({ query }) => (
  <div style={styles.chatContainer}>
    {/* Chat Header */}
    <div style={styles.chatHeader}>
      <div>
        <div style={styles.chatHeaderName}>{query.name}</div>
        <div style={styles.chatHeaderEmail}>{query.email}</div>
      </div>
      <button style={styles.resolveButton}>
        <MdCheckCircle size={16} color={colors.text} />
        <span style={styles.resolveButtonText}>Mark as Resolved</span>
      </button>
    </div>

    {/* Messages Area */}
    <div style={styles.messagesArea}>
      <div style={styles.messageBubbleReceived}>
        <img
          src={query.avatar}
          alt="avatar"
          style={styles.messageAvatar}
        />
        <div style={styles.messageContent}>
          <div style={styles.messageText}>{query.message}</div>
          <div style={styles.messageTime}>{query.time}</div>
        </div>
      </div>
    </div>

    {/* Reply Area */}
    <div style={styles.replyArea}>
      <div style={styles.replyInputContainer}>
        <textarea
          placeholder="Type your response here..."
          style={styles.replyInput}
        />
        <button style={styles.sendButton}>
          <span style={styles.sendButtonText}>Send</span>
          <MdSend size={18} color={colors.white} />
        </button>
      </div>

      <div style={styles.cannedResponses}>
        <button style={styles.cannedResponseButton}>
          Refund Policy
        </button>
        <button style={styles.cannedResponseButton}>
          Order Correction
        </button>
        <button style={styles.cannedResponseButton}>
          Apology Template
        </button>
      </div>
    </div>
  </div>
);

const styles = {
  chatContainer: {
    flex: 2,
    backgroundColor: colors.backgroundLight,
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottom: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
  },
  chatHeaderName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  chatHeaderEmail: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  resolveButton: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #BDBDBD',
    padding: '0 16px',
    height: 36,
    borderRadius: 8,
    gap: 8,
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  resolveButtonText: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.text,
  },
  messagesArea: {
    flex: 1,
    padding: 24,
    overflowY: 'auto',
  },
  messageBubbleReceived: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 12,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
  },
  messageContent: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 12,
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
    color: colors.text,
  },
  messageTime: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 8,
    textAlign: 'right',
  },
  replyArea: {
    padding: 16,
    borderTop: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
  },
  replyInputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  replyInput: {
    flex: 1,
    backgroundColor: colors.textfieldFill,
    borderRadius: 8,
    padding: '10px 12px',
    fontSize: 14,
    minHeight: 50,
    border: `1px solid ${colors.border}`,
    resize: 'none',
  },
  sendButton: {
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px',
    height: 44,
    borderRadius: 8,
    gap: 8,
    border: 'none',
    cursor: 'pointer',
  },
  sendButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  cannedResponses: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  cannedResponseButton: {
    border: '1px solid #BDBDBD',
    borderRadius: 16,
    padding: '6px 12px',
    fontSize: 12,
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};

export default ChatView;
