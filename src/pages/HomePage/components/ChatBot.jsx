// import { useState } from 'react';
// import './ChatBot.css';

// const ChatBot = () => {
//     const [messages, setMessages] = useState([]);
//     const [userInput, setUserInput] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (userInput.trim() === '') return;

//         const newMessages = [...messages, { sender: 'Me', text: userInput }];
//         setMessages(newMessages);
//         setUserInput('');
//         setLoading(true); // Start loading

//         try {
//             const response = await fetch('https://backend-dot-mcgi-app-450700.uc.r.appspot.com/api/gemini-chat', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ message: userInput }),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 const errorMessage = errorData?.error || `HTTP error! status: ${response.status}`;
//                 throw new Error(errorMessage);
//             }

//             const data = await response.json();
//             setMessages([...newMessages, { sender: 'Servant', text: data.response }]);

//         } catch (error) {
//           console.error('Error fetching AI response:', error);
//           setError(error.message); // Correct: Set the error message here
//           setMessages([...newMessages, { sender: 'Servant', text: 'Sorry, there was an error processing your request: ' + error.message }]);
//       } finally {
//             setLoading(false); // Stop loading, regardless of success/failure
//         }
//     };

//     return (
//         <div className="chat-container overlay">
//             <h2>MCGI AI Servant</h2>
//                    <div className="chat-box">
//                       {messages.map((msg, index) => (
//                            <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
//                               <strong>{msg.sender}:</strong> {msg.text}
//                            </div>
//                        ))}
//         </div>
//             {loading && <div>Loading...</div>}
//             {error && <div>Error: {error}</div>}
//             <form onSubmit={handleSubmit} className="input-form">
//                 <input
//                 type="text"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 placeholder="Type your message here..."
//               />
//             <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ChatBot;

import { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInput.trim() === '') return;
        const newMessages = [...messages, { sender: 'Me', text: userInput }];
        setMessages(newMessages);
        setUserInput('');
        setLoading(true); // Start loading
        try {
            const response = await fetch('https://backend-dot-mcgi-app-450700.uc.r.appspot.com/api/gemini-chat', {
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

    const handleClose = () => {
        setIsOpen(false);
        // Clear messages when closing the chat
        setMessages([]);
        // Also clear any errors
        setError(null);
    };

    const handleOpen = () => {
        setIsOpen(true);
        // Chat history is already cleared when closing
    };

    return (
        <>
            {isOpen ? (
                <div className="chat-container overlay">
                    <div className="chat-header">
                        <h2>MCGI AI Servant</h2>
                        <button className="close-button" onClick={handleClose}>×</button>
                    </div>
                    <div className="chat-box">
                        {messages.length === 0 ? (
                            <div className="welcome-message">
                                <p>Hello! Im your MCGI AI Servant. How can I help you today?</p>
                            </div>
                        ) : (
                            messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
                                    <strong>{msg.sender}:</strong> {msg.text}
                                </div>
                            ))
                        )}
                    </div>
                    {loading && <div className="loading-indicator">Loading...</div>}
                    {error && <div className="error-message">Error: {error}</div>}
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
            ) : (
                <div className="chat-icon" onClick={handleOpen}>
                    <div className="chat-icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-6.383-2.302l-.244-.209-3.244 1.08a1 1 0 0 1-1.311-1.067l.047-.196 1.08-3.244A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-8 8c0 1.892.661 3.63 1.765 5.002l.147.193.183.286-.596 1.786 1.786-.596.286.183A8 8 0 1 0 12 4zm1 3v2h2v2H9v3H7v-5h4V7h2z"/>
                        </svg>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
