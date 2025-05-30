
import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help with your vehicle wrap questions. How can I assist you today?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Auto-reply after a short delay
    setTimeout(() => {
      const autoReply = {
        id: messages.length + 2,
        text: "Thanks for your message! For immediate assistance, please call us at (312) 597-1286 or request a quote through our contact form. We'll get back to you within 1 hour during business hours.",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96">
          <Card className="shadow-2xl">
            <CardHeader className="bg-brand-red text-white rounded-t-lg">
              <CardTitle className="text-lg">
                Vehicle Wrap Support
              </CardTitle>
              <p className="text-sm opacity-90">
                We typically reply in under 5 minutes
              </p>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        msg.sender === 'user'
                          ? 'bg-brand-red text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="border-t p-3 bg-gray-50">
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-left justify-start h-auto py-2"
                    asChild
                  >
                    <a href="/contact">
                      Request Free Quote
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-left justify-start h-auto py-2"
                    asChild
                  >
                    <a href="tel:3125971286">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (312) 597-1286
                    </a>
                  </Button>
                </div>
              </div>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-brand-red hover:bg-red-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;
