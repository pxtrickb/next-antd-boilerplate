import React from 'react';
import { Button } from 'antd';
import '../styles/tailwind.css';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
      <p className="text-lg mb-8">This is the homepage using Ant Design and Tailwind CSS.</p>
      <Button type="primary">Get Started</Button>
    </div>
  );
};

export default Home;