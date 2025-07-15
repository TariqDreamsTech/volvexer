import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: 'Hello! I\'m Volvexer AI Assistant. How can I help you today?',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const quickQuestions = [
        'Tell me about your services',
        'How much do you charge?',
        'Book a consultation',
        'AI Engineering services'
    ];

    const handleQuickQuestion = (question) => {
        setMessages(prev => [...prev, {
            type: 'user',
            content: question,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);

        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            let response = '';
            switch (question) {
                case 'Tell me about your services':
                    response = 'We offer comprehensive business solutions including Accounting, Bookkeeping, Taxation, and AI Engineering services. Each service is tailored to meet your specific business needs.';
                    break;
                case 'How much do you charge?':
                    response = 'Our pricing varies based on your specific requirements. We offer competitive rates and can provide a custom quote. Would you like to schedule a free consultation?';
                    break;
                case 'Book a consultation':
                    response = 'Great! I can help you book a consultation. Please contact us at +923390625000 or info@volvexer.site. You can also click the WhatsApp button for immediate assistance.';
                    break;
                case 'AI Engineering services':
                    response = 'Our AI Engineering services include Machine Learning, NLP, Computer Vision, Data Analytics, Process Automation, and AI Integration. We help businesses leverage cutting-edge AI technology.';
                    break;
                default:
                    response = 'Thank you for your question! Our team will get back to you soon. For immediate assistance, please contact us at +923390625000.';
            }

            setMessages(prev => [...prev, {
                type: 'bot',
                content: response,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
            setIsTyping(false);
        }, 1500);
    };

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        setMessages(prev => [...prev, {
            type: 'user',
            content: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);

        setInputValue('');
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                type: 'bot',
                content: 'Thank you for your message! Our team will review your inquiry and get back to you shortly. For immediate assistance, please contact us at +923390625000.',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const openWhatsApp = () => {
        window.open('https://wa.me/923390625000?text=Hi, I would like to know more about your services', '_blank');
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
            {/* Chatbot Header */}
            <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="chatbot-avatar">
                    <i className="fas fa-robot"></i>
                </div>
                <div className="chatbot-info">
                    <h4>Volvexer AI Assistant</h4>
                    <p>{isOpen ? 'Click to minimize' : 'Click to chat'}</p>
                </div>
                <div className="chatbot-controls">
                    <button
                        className="chatbot-toggle"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMinimized(!isMinimized);
                        }}
                    >
                        <i className={`fas fa-${isMinimized ? 'expand' : 'compress'}`}></i>
                    </button>
                    <button
                        className="chatbot-close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>

            {/* Chatbot Body */}
            <div className={`chatbot-body ${isOpen ? 'show' : ''}`}>
                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.type}-message`}>
                            <div className="message-avatar">
                                <i className={`fas fa-${message.type === 'bot' ? 'robot' : 'user'}`}></i>
                            </div>
                            <div className="message-content">
                                <h5>{message.type === 'bot' ? 'Volvexer AI' : 'You'}</h5>
                                <p>{message.content}</p>
                                <span className="message-time">{message.time}</span>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="message bot-message">
                            <div className="message-avatar">
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className="message-content">
                                <h5>Volvexer AI</h5>
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length === 1 && (
                    <div className="quick-questions">
                        {quickQuestions.map((question, index) => (
                            <button
                                key={index}
                                className="quick-question"
                                onClick={() => handleQuickQuestion(question)}
                            >
                                <i className="fas fa-comment"></i>
                                {question}
                            </button>
                        ))}
                    </div>
                )}

                {/* Message Actions */}
                <div className="message-actions">
                    <button className="action-btn" onClick={openWhatsApp}>
                        <i className="fab fa-whatsapp"></i>
                        WhatsApp
                    </button>
                    <button className="action-btn" onClick={() => window.open('tel:+923390625000', '_blank')}>
                        <i className="fas fa-phone"></i>
                        Call Us
                    </button>
                </div>

                {/* Input Area */}
                <div className="chatbot-input">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isTyping}
                    />
                    <button className="send-btn" onClick={handleSendMessage} disabled={isTyping || !inputValue.trim()}>
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot; 