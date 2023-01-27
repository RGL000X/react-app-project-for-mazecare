import React from 'react'
import bgImg from '../assets/image/hero-bg1.jpg'


const Hero = () => {
  return (
    <div
      name="landing"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">
            We Here To Help Manage Your health Become Better
          </p>
          <h1 className="py-3 text-6xl font-bold">Health Management System</h1>
          <p className="text-2xl">This is our Health Management System</p>
          <button className="py-3 px-8 sm:w-[60%] my-4">
            <a href="/login">Get Started</a>
          </button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Hero