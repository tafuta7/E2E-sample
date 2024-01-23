import { inputValueState, messagesState } from 'atom/ChatAtom';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

function App() {
    const [messages, setMessages] = useRecoilState<string[]>(messagesState);
    const [inputValue, setInputValue] = useRecoilState<string>(inputValueState);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className="chat-screen">
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default App;
