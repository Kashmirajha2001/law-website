import { useState, useEffect, useRef } from 'react';
import './community.css'

const Community = () => {

    const savedMessages = JSON.parse(localStorage.getItem('Community')) || [];
    const [messages, setMessages] = useState(savedMessages);
    const [newMessage, setNewMessage] = useState('');
    const messageContainerRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString();
      const messageArray = [newMessage, timestamp];
      setMessages([...messages, messageArray]);
      setNewMessage('');

      // Store the updated messages array in localStorage
      localStorage.setItem('Community', JSON.stringify([...messages, messageArray]));
    }
  };

  // Scroll to the bottom of the message container when messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
        <div className="community-box">
        <h2>Justice Community</h2>
        <div className="message-container" ref={messageContainerRef}>
            {messages.map((messageArray, index) => (
            <div key={index} className="message">
                <p className="notice">{messageArray[0]}</p>
                <p className="timestamp">{messageArray[1]}</p>
            </div>
            ))}
        </div>
        <div className="input-container">
            <textarea
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Add</button>
        </div>
        </div>
    </div>
  );
};

export default Community;