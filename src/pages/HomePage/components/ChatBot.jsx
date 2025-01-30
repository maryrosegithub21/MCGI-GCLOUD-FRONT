// // // import React, { useState, useEffect } from 'react';
// // // // import React, { useState } from 'react';
// // // import './ChatBot.css';


// // // const ChatBot = () => {
// // //   const [messages, setMessages] = useState([]);
// // //   const [userInput, setUserInput] = useState('');
// // //   const [options, setOptions] = useState([]);
// // //   const [optionsType, setOptionsType] = useState('');
// // //   const [googleStudioData, setGoogleStudioData] = useState(null);
// // //   const [loading, setLoading] = useState(false); // Add loading state
// // //   const [error, setError] = useState(null); // Add error state

// // //   useEffect(() => {
// // //     const fetchGoogleStudioData = async () => {
// // //         setLoading(true); // Set loading to true before fetching
// // //         try {
// // //             const response = await fetch('/api/google-studio-data');
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             const data = await response.json();
// // //             setGoogleStudioData(data);
// // //         } catch (err) {
// // //             console.error('Error fetching Google Studio ', err);
// // //             setError(err.message); // Set error message
// // //         } finally {
// // //             setLoading(false); // Set loading to false after fetching, regardless of success/failure
// // //         }
// // //     };

// // //     fetchGoogleStudioData();
// // // }, []);


// // //   const handleSubmit = async (e) => {
   
// // //     e.preventDefault();
// // //     if (userInput.trim() === '') return;
// // //     const newMessages = [...messages, { sender: 'Me', text: userInput }];
// // //     setMessages(newMessages);
// // //     setUserInput('');

// // //     // try {
// // //     //   const apiUrl = `${process.env.REACT_APP_API_URL}/api/ai-chat`;
// // //     //   console.log('Sending request to:', apiUrl);

// // //     //   const response = await fetch(apiUrl, {
// // //     //     method: 'POST',
// // //     //     headers: {
// // //     //       'Content-Type': 'application/json',
// // //     //     },
// // //     //     body: JSON.stringify({ message: userInput }),
// // //     //   });

// // //     //   if (!response.ok) {
// // //     //     throw new Error(`HTTP error! status: ${response.status}`);
// // //     //   }

// // //     //   const data = await response.json();
// // //     //   console.log('Received data:', data);
// // //     //   setMessages([...newMessages, { sender: 'Servant', text: data.response }]);
// // //     //   setOptions(data.options || []);
// // //     //   setOptionsType(data.optionsType || '');
// // //     // } catch (error) {
// // //     //   console.error('Error fetching AI response:', error);
// // //     //   setMessages([...newMessages, { sender: 'Servant', text: 'Sorry, there was an error processing your request.' }]);
// // //     // }

// // //     try {
// // //       const response = await fetch('/api/ai-chat', {
// // //           method: 'POST',
// // //           headers: {
// // //               'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify({ messages }), // Send the messages array
// // //       });

// // //       const data = await response.json();
// // //       // ... (Update your chat messages with the AI response)
      
// // //   } catch (error) {
// // //       // ... (Handle errors)
// // //       console.error('Error fetching AI response:', error);
// // //       setMessages([...newMessages, { sender: 'Servant', text: 'Sorry, there was an error processing your request.' }]);
// // //   }
// // //   };

// // //   return (
// // //     <div className="chat-container overlay">
// // //       <h2>MCGI AI Servant</h2>
// // //       <div className="chat-box">
// // //         {messages.map((msg, index) => (
// // //           <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
// // //             <strong>{msg.sender}:</strong> {msg.text}
// // //           </div>
// // //         ))}
// // //       </div>
// // //       {optionsType === 'buttons' && (
// // //         <div className="options">
// // //           {options.map((option, index) => (
// // //             <button key={index} onClick={() => (option)}>
// // //             {/* <button key={index} onClick={() => handleOptionClick(option)}> */}
// // //               {option.text}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       )}
// // //       <form onSubmit={handleSubmit} className="input-form">
// // //         <input
// // //           type="text"
// // //           value={userInput}
// // //           onChange={(e) => setUserInput(e.target.value)}
// // //           placeholder="Type your message here..."
// // //         />
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // // };
// // //    // Display Google Studio data, loading indicator, or error message
// // //    {loading && <div>Loading Google Studio data...</div>}
// // //    {error && <div>Error: {error}</div>}
// // //    {googleStudioData && !loading && !error && (
// // //        <div className="google-studio-data">
// // //            {/* Render your Google Studio data here */}
// // //            {JSON.stringify(googleStudioData, null, 2)} {/* Example: Displaying formatted data */}
// // //        </div>
// // //    )}
// // // };
// // // export default ChatBot;



// // import { useState, useEffect } from 'react';
// // import './ChatBot.css';

// // const ChatBot = () => {
// //     const [messages, setMessages] = useState([]);
// //     const [userInput, setUserInput] = useState('');
// //     const [googleStudioData, setGoogleStudioData] = useState(null);
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         const fetchGoogleStudioData = async () => {
// //             setLoading(true);
// //             try {
// //                 const response = await fetch('/api/google-studio-data');
// //                 if (!response.ok) {
// //                     throw new Error(`HTTP error! status: ${response.status}`);
// //                 }
// //                 const data = await response.json();
// //                 setGoogleStudioData(data);
// //             } catch (err) {
// //                 console.error('Error fetching Google Studio ', err);
// //                 setError(err.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchGoogleStudioData();
// //     }, []);

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         if (userInput.trim() === '') return;

// //         const newMessages = [...messages, { sender: 'Me', text: userInput }];
// //         setMessages(newMessages);
// //         setUserInput('');

// //         try {
// //             const response = await fetch('/api/gemini-chat', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ message: userInput }),
// //             });

// //             if (!response.ok) {
// //                 // throw new Error(`HTTP error! status: ${response.status}`);
// //                 const errorData = await response.json(); // Try to parse error as JSON
// //                 const errorMessage = errorData?.error || `HTTP error! status: ${response.status}`;
// //                 throw new Error(errorMessage); // Throw error with more details
// //             }

// //             const data = await response.json();
// //             setMessages([...newMessages, { sender: 'Servant', text: data.response }]);

// //         } catch (error) {
// //             console.error('Error fetching AI response:', error);
// //             setMessages([...newMessages, { sender: 'Servant', text: 'Sorry, there was an error processing your request.' }]);
// //         }
// //     };

// //     return (
// //         <div className="chat-container overlay">
// //             <h2>MCGI AI Servant</h2>
// //             <div className="chat-box">
// //                 {messages.map((msg, index) => (
// //                     <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
// //                         <strong>{msg.sender}:</strong> {msg.text}
// //                     </div>
// //                 ))}
// //             </div>
// //             {loading && <div>Loading Google Studio data...</div>} {/* Display loading message */}
// //             {error && <div>Error: {error}</div>} {/* Display error message */}
// //             {!loading && !error && googleStudioData && (
// //                 <div className="google-studio-data">
// //                     {/* Display Google Studio data */}
// //                     <pre>{JSON.stringify(googleStudioData, null, 2)}</pre>
// //                 </div>
// //             )}
// //             <form onSubmit={handleSubmit} className="input-form">
// //                 <input
// //                     type="text"
// //                     value={userInput}
// //                     onChange={(e) => setUserInput(e.target.value)}
// //                     placeholder="Type your message here..."
// //                 />
// //                 <button type="submit">Submit</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default ChatBot;

// import { useState, useEffect } from 'react';
// import './ChatBot.css';

// const ChatBot = () => {
//       const [messages, setMessages] = useState([]);
//       const [userInput, setUserInput] = useState('');
//       const [googleStudioData, setGoogleStudioData] = useState(null);
//       const [loading, setLoading] = useState(false);
//       const [error, setError] = useState(null);

//     useEffect(() => {
//       const fetchGoogleStudioData = async () => {
//                     setLoading(true);
//                     try {
//                         const response = await fetch('/api/google-studio-data');
//                         if (!response.ok) {
//                             throw new Error(`HTTP error! status: ${response.status}`);
//                         }
//                         const data = await response.json();
//                         setGoogleStudioData(data);
//                     } catch (err) {
//                         console.error('Error fetching Google Studio ', err);
//                         setError(err.message);
//                     } finally {
//                         setLoading(false);
//                     }
//                 };
        
//                 fetchGoogleStudioData();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (userInput.trim() === '') return;

//         // message handling
//         const newMessages = [...messages, { sender: 'Me', text: userInput }];
//                 setMessages(newMessages);
//                 setUserInput('');

//         try {
//             const response = await fetch('/api/gemini-chat', {  // Correct path
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ message: userInput }), // Correct body
//             });

//             if (!response.ok) {
//                 const errorData = await response.json(); // Attempt to get JSON error
//                 const errorMessage = errorData?.error || `HTTP error! status: ${response.status}`;
//                 throw new Error(errorMessage); // Throw a more informative error
//             }

//             const data = await response.json();
//             setMessages([...newMessages, { sender: 'Servant', text: data.response }]);

//         } catch (error) {
//             console.error('Error fetching AI response:', error);
//             setMessages([...newMessages, { sender: 'Servant', text: 'Sorry, there was an error processing your request: ' + error.message }]); // More informative error message
//         }
//     };

//     // component code
//     return (
//               <div className="chat-container overlay">
//                   <h2>MCGI AI Servant</h2>
//                   <div className="chat-box">
//                       {messages.map((msg, index) => (
//                           <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
//                               <strong>{msg.sender}:</strong> {msg.text}
//                           </div>
//                       ))}
//                   </div>
//                   {loading && <div>Loading Google Studio data...</div>} {/* Display loading message */}
//                   {error && <div>Error: {error}</div>} {/* Display error message */}
//                   {!loading && !error && googleStudioData && (
//                       <div className="google-studio-data">
//                           {/* Display Google Studio data */}
//                           <pre>{JSON.stringify(googleStudioData, null, 2)}</pre>
//                       </div>
//                   )}
//                   <form onSubmit={handleSubmit} className="input-form">
//                       <input
//                           type="text"
//                           value={userInput}
//                           onChange={(e) => setUserInput(e.target.value)}
//                           placeholder="Type your message here..."
//                       />
//                       <button type="submit">Submit</button>
//                   </form>
//               </div>
//           );
//       };

// export default ChatBot;


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