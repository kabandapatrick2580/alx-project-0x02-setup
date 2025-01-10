import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-800 to-purple-800">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">
              Welcome to My Testing Application!
            </h1>
            <p className="mt-4 text-xl text-white">
              We're glad you're here. Enjoy the Silence 😊
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
              Get Started
            </button>
        </div>
      </main>
    </div>
  )
}
export default Home;