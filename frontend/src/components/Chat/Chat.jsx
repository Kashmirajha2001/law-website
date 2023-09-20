import React, { useState } from 'react';
import './chat.css';
import { SiAxios, SiProbot } from 'react-icons/si';
import axios from 'axios';

const Chat = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [userMessages, setUserMessages] = useState([]);
    const [botMessages, setBotMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [chatBotText, setChatBotText] = useState();
    const [flag, setFlag] = useState(null);

    
    const toggleDiv = () => {
        setShowDiv(!showDiv);
    }

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    }

    const handleSendMessage = async (e) => {
        e.preventDefault();
        setUserMessages([...userMessages, userInput]);
        setUserInput('');
        await simulateBotResponse(userInput);
    }

    const simulateBotResponse = async (userInput) => {
        setIsLoading(true);

        console.log("in simulateBotResponse function.");

        const botResponse = await axios.post("http://localhost:5000/", {
            userChatText: userInput
        })

        console.log(botResponse);
        console.log(botResponse.data[0]);
        console.log(botResponse.data[1]);

        const chatBotText2 = botResponse.data[0];
        setChatBotText(botResponse.data[0]);
        // console.log("chatBotText before the clg: " + chatBotText); // undefined
        const flag2 = botResponse.data[1];
        setFlag(botResponse.data[1]);

        console.log("chatBotText: " + chatBotText2);

        setTimeout(() => {
            const botResponse = `Bot: "${chatBotText2}"`;
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
                        flag === 0
                        ?
                        <div key={index} className={`bot-msg`}>{message}</div>
                        :
                        <>
                            <a href={chatBotText} target='_blank'>
                            <div key={index} className={`bot-msg`}>{message}</div>
                            </a>
                        </>
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
                        <button type="submit">Send</button>
                    </form>
                </div>
        )}
        <div className='chat-icon' onClick={toggleDiv}>
            <SiProbot/>
        </div>
    </div>
  )
}

export default Chat