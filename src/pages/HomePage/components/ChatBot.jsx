import { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInput.trim() === '') return;

        const newMessages = [...messages, { sender: 'Me', text: userInput }];
        setMessages(newMessages);
        setUserInput('');
        setLoading(true); // Start loading

        try {
            const response = await fetch('/api/gemini-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userInput }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData?.error || `HTTP error! status: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setMessages([...newMessages, { sender: 'Servant', text: data.response }]);

        } catch (error) {
          console.error('Error fetching AI response:', error);
          setError(error.message); // Correct: Set the error message here
          setMessages([...newMessages, { sender: 'Servant', text: 'Sorry, there was an error processing your request: ' + error.message }]);
      } finally {
            setLoading(false); // Stop loading, regardless of success/failure
        }
    };

    return (
        <div className="chat-container overlay">
            <h2>MCGI AI Servant</h2>
                   <div className="chat-box">
                      {messages.map((msg, index) => (
                           <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
                              <strong>{msg.sender}:</strong> {msg.text}
                           </div>
                       ))}
        </div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <form onSubmit={handleSubmit} className="input-form">
                <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
              />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ChatBot;