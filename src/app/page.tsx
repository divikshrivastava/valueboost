"use client";

import SignUpForm from './components/SignUpForm';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="min-h-screen bg-dark-purple flex items-center justify-center px-4 sm:px-6 lg:px-8">

      <div className="text-center max-w-md mx-auto">
      <Image
          src="/art.png" 
          alt="Art" 
          width={300} 
          height={300} 
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-light-blue mb-6">
          Welcome to ValueBoost!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Transforming Potential Into Opportunities. Stay Updated!
        </p>
        <SignUpForm />
      </div>
    </div>
  );
}
