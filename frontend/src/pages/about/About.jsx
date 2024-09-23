import React from 'react';
import { Mail, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4 flex items-center">
      <div className="max-w-4xl w-full mx-auto bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-600">About ChatApp</h1>
          
          <p className="mb-4 text-lg text-center">
            Welcome to ChatMaster, a modern chat app for effortless communication. Enjoy seamless messaging with friends and colleagues!
          </p>
          
          <h2 className="text-2xl font-semibold mb-2 text-purple-600">Key Features:</h2>
          <ul className="list-disc list-inside mb-4 space-y-1 text-lg">
            <li>Simple Signup/Login</li>
            <li>Real-Time Chat</li>
            <li>Online Status</li>
            <li>Instant Notifications</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-2 text-purple-600">Contact Us:</h2>
          <p className="mb-4 text-lg text-center">
            Have feedback? Reach out to us for support or suggestions!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <a href="mailto:roybithika188@gmail.com" className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-2 rounded-full font-semibold transition-all hover:bg-purple-700 text-lg">
              <Mail className="mr-2" size={20} />
              Email Us
            </a>
            <a href="#" className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-full font-semibold transition-all hover:bg-blue-600 text-lg">
              <Globe className="mr-2" size={20} />
              Visit Website
            </a>
          </div>
          
          <p className="text-lg text-center italic text-gray-600">
            Stay tuned for updates as we enhance your experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
