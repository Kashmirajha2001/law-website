import React, { useState, useEffect } from 'react';
import './chat.css';
import ChatIcon from '../../assets/chat/chatIcon.png';
import SendIcon from '@mui/icons-material/Send';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';


const Chat = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [userMessages, setUserMessages] = useState([]);
    const [botMessages, setBotMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv);
    }

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    }

    const handleSendMessage = (e) => {
        e.preventDefault();
        setUserMessages([...userMessages, userInput]);
        setUserInput('');
        simulateBotResponse(userInput);
    }

    const simulateBotResponse = (userInput) => {
        setIsLoading(true);
        setTimeout(() => {
            const botResponse = `Bot: You said "${userInput}"`;
            setBotMessages([...botMessages, botResponse]);
            setIsLoading(false);
        }, 1000);
    }

  return (
    <div className='chat-bot-container'>
        {showDiv && (
            <div className='chat-box'>
            <p>How can I Help you ?</p>
            <div className='chat-msgs'>
                {userMessages.map((userMessage, index) => (
                    <div key={index} className='user-msg'>
                        <div className='message-content right'>{userMessage}</div>
                </div>
                ))}
                {isLoading ? (
                    <div className="loading-indicator">Bot is typing...</div>
                ) : (
                    botMessages.map((message, index) => (
                        <div key={index} className={`bot-msg`}>
                            <div className='message-content left'>{message}</div>
                        </div>
                    ))
                )}
                </div>
                    <form className='input-form' onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={userInput}
                            onChange={handleUserInput}
                        />
                        <button className='voice'>
                            <SettingsVoiceIcon />
                        </button>
                        <button type="submit" className='chatSend'>
                            <SendIcon />
                        </button>
                    </form>
                </div>
        )}
        <div className='chat-icon' onClick={toggleDiv}>
            <img src={ChatIcon}></img>
        </div>
    </div>
  )
}

export default Chat