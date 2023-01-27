import React from 'react'

import { ArrowSmRightIcon } from '@heroicons/react/outline'

import aboutImg from '../assets/image/about-bg1.png'
import peopleImg1 from "../assets/image/Mark-Valter.jpg";
import peopleImg2 from "../assets/image/Rina-Arnlyn.jpg";
import peopleImg3 from "../assets/image/Jack-Vince.jpg";

function About() {
  return (
    <div name='about' className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={aboutImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            About
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">Who Are We</h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            aliquid ullam quasi, doloribus sequi delectus itaque odit quo
            quibusdam magni cupiditate? Ab ullam tempore consequuntur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <img
                className="w-30 p-30 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
                src={peopleImg1}
                alt="/"
              />
              <h3 className="font-bold text-2xl my-6">Mark Valter</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                aliquid ullam quasi, doloribus sequi delectus itaque odit quo
                quibusdam magni cupiditate?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <img
                className="w-30 p-30 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
                src={peopleImg2}
                alt="/"
              />
              <h3 className="font-bold text-2xl my-6">Rina Arnlyn</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                aliquid ullam quasi, doloribus sequi delectus itaque odit quo
                quibusdam magni cupiditate?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <img
                className="w-30 p-30 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
                src={peopleImg3}
                alt="/"
              />
              <h3 className="font-bold text-2xl my-6">Jack Vince</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                aliquid ullam quasi, doloribus sequi delectus itaque odit quo
                quibusdam magni cupiditate?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About