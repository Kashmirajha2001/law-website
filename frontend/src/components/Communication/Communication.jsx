import { useState, useEffect, useRef } from 'react';
import './communication.css';
import AttorneysData from "../Attorneys/AttorneysData";
import predefinedMessages from './preDefined';

const Communication = () => {
    const [attorneyId, setAttorneyId] = useState(1);
    const [attorneyData, setAttorneyData] = useState(null);
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, [chatMessages]);

    useEffect(() => {
        // Retrieve the attorneyId from local storage
        const storedAttorneyId = localStorage.getItem('selectedAttorneyId');
        // console.log(storedAttorneyId);
        setAttorneyId(parseInt(storedAttorneyId));
      }, []);

      useEffect(() => {
        if (attorneyId && Array.isArray(AttorneysData)) {
          const selectedAttorney = AttorneysData.find(attorney => attorney.id === attorneyId);
          if (selectedAttorney) {
            setAttorneyData(selectedAttorney);
          }
        }
      }, [attorneyId]);

        const handleInputChange = (event) => {
            setUserInput(event.target.value);
        };

        function normalizeUserInput(input) {
            // Remove extra spaces and convert to lowercase
            return input.toLowerCase().split(" ").join("");
          }

        const handleUserMessage = () => {
            const userMessage = normalizeUserInput(userInput);
            // console.log("Normalized Input:", userMessage); 
            const response = predefinedMessages[userMessage] || "Sorry, I don't understand.";
        
            // Update the chat messages with the user's message and response
            setChatMessages([
              ...chatMessages,
              { text: userInput, sender: 'user' },
              { text: response, sender: 'bot' },
            ]);
        
            // Clear the user input field
            setUserInput('');
          };

  return (
    <div className="communication">
      {attorneyData ? (
        <div className='chatting'>
        <div className='top-bar'>
        <img src={attorneyData.img} alt={attorneyData.name}/>
        <h3>{attorneyData.name}</h3>
        </div>
          <p className='about-info'>Designation: {attorneyData.designation}</p>
          <p className='about-info'>Experience: {attorneyData.experience}</p>
          <div className='chat-container'>
            <div className='chat-messages' ref={chatContainerRef}>
                {chatMessages.map((message, index) => (
                <div
                    key={index}
                    className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
                >
                    {message.text}
                </div>
                ))}
            </div>
          </div>
          <div className='input-wrapper'>
            <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type something..."
            />
            <button onClick={handleUserMessage}>Send</button>
        </div>
        </div>
      ) : (
        <p>Loading attorney data...</p>
      )}
    </div>
  );
};

export default Communication;
