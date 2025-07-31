import React from 'react';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
  const [message, setMessage] = React.useState('');
  const [chatHistory, setChatHistory] = React.useState([
    { type: 'bot', message: 'Hi! I\'m here to help with your vehicle wrap questions. How can I assist you today?' }
  ]);

  const quickQuestions = [
    'How much does a vehicle wrap cost?',
    'How long does installation take?',
    'Do you offer design services?',
    'What materials do you use?',
    'Can I see your portfolio?'
  ];

  const handleQuickQuestion = (question: string) => {
    setChatHistory(prev => [...prev, { type: 'user', message: question }]);
    
    // Simple response logic
    setTimeout(() => {
      let response = '';
      if (question.includes('cost')) {
        response = 'Vehicle wrap costs typically range from $2,500-$6,500 depending on vehicle size and complexity. Would you like a free instant quote?';
      } else if (question.includes('installation')) {
        response = 'Most vehicle wraps take 2-3 business days to complete. We\'ll provide a detailed timeline during your consultation.';
      } else if (question.includes('design')) {
        response = 'Yes! We offer complete design services from concept to installation. Our team will work with you to create the perfect wrap for your business.';
      } else if (question.includes('materials')) {
        response = 'We use premium 3M vinyl materials that are designed to last 5-7 years in Chicago\'s climate conditions.';
      } else if (question.includes('portfolio')) {
        response = 'Absolutely! You can view our gallery at /gallery or schedule a consultation to see more examples specific to your industry.';
      } else {
        response = 'That\'s a great question! For detailed information, I\'d recommend scheduling a free consultation with our experts. Would you like me to help you book an appointment?';
      }
      
      setChatHistory(prev => [...prev, { type: 'bot', message: response }]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory(prev => [...prev, { type: 'user', message }]);
    setMessage('');
    
    // Simple auto-response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        type: 'bot', 
        message: 'Thanks for your message! For detailed assistance, please call us at (312) 597-1286 or schedule a consultation. Our team will get back to you within 1 hour during business hours.' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed bottom-4 right-4 z-50 w-16 h-16 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-45' : ''
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <span className="text-2xl">×</span>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40 w-80 md:w-96 max-h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <div>
                <h3 className="font-semibold">Wrapping Chicago</h3>
                <p className="text-sm opacity-90">We typically reply in a few minutes</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 max-h-60 overflow-y-auto space-y-3">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  chat.type === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {chat.message}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="p-3 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
            <div className="space-y-1">
              {quickQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="block w-full text-left text-xs text-primary hover:bg-primary/10 px-2 py-1 rounded transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-50 rounded-b-lg text-center">
            <p className="text-xs text-gray-600">
              For immediate assistance: <a href="tel:(312) 597-1286" className="text-primary font-medium">(312) 597-1286</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;