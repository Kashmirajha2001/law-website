import React, { useState, useEffect, useRef } from 'react';
import './chat.css';
import ChatIcon from '../../assets/chat/chatIcon.png';
import SendIcon from '@mui/icons-material/Send';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import {MdOutlineClose} from 'react-icons/md';

const Chat = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [userMessages, setUserMessages] = useState([]);
    const [botMessages, setBotMessages] = useState([]);
    const [conversation, setConversation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const chatMsgsRef = useRef(null);

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

    const simulateBotResponse = async (userInput) => {
        setIsLoading(true);
        // console.log("in simulateBotResponse function.");
        setTimeout(() => {
            const botResponse = `Bot: You said "${userInput}"`;
            setBotMessages([...botMessages, botResponse]);
            setIsLoading(false);
        }, 1000);
    }

    useEffect(() => {
        // Combine userMessages and botMessages based on their indexes
        const newConversation = [];
        const maxLength = Math.max(userMessages.length, botMessages.length);
        
        for (let i = 0; i < maxLength; i++) {
            if (i < userMessages.length) {
                newConversation.push(userMessages[i]);
            }
            if (i < botMessages.length) {
                newConversation.push(botMessages[i]);
            }
        }

        setConversation(newConversation);
        // Scroll to the bottom of the chat window when conversation updates
        if (chatMsgsRef.current) {
            chatMsgsRef.current.scrollTop = chatMsgsRef.current.scrollHeight;
        }
        // console.log(conversation);
    }, [userMessages, botMessages]);

  return (
    <div className='chat-bot-container'>
        {showDiv && (
            <div className='chat-box'>
            <p>How can I Help you ?</p>
            <div ref={chatMsgsRef} className='chat-msgs'>
                {
                    conversation.map((message, index) => (
                        <div key={index} className={index%2===0 ? 'user-msg' : 'bot-msg'}>
                            <div className={index%2===0 ? 'message-content left' : 'message-content right'}>{message}</div>
                        </div>
                    ))
                }
                {isLoading ? <div className="message-content left"><div className="loading-indicator">Bot is typing...</div></div> : ''}
                {/* {userMessages.map((userMessage, index) => (
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
                )} */}
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
            {showDiv ? <MdOutlineClose/> : <img src={ChatIcon}></img>}
        </div>
    </div>
  )
}

export default Chat