import React from 'react'

import serviceImg from "../assets/image/Service-bg1.jpg";
import ServiceImg1 from "../assets/image/Service1.jpg";
import ServiceImg2 from "../assets/image/Service2.jpg";
import ServiceImg3 from "../assets/image/Service3.jpg";

function Services() {
  return (
    <div name='services' className="w-full justify-between my-52">
      <div className="w-full h-full bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={serviceImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Service
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">What is our Services</h3>
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
                src={ServiceImg1}
                alt="/"
              />
              <h3 className="font-bold text-2xl my-6">We Have Best Medical Technology</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                aliquid ullam quasi, doloribus sequi delectus itaque odit quo
                quibusdam magni cupiditate?
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <img
                className="w-30 p-30 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
                src={ServiceImg2}
                alt="/"
              />
              <h3 className="font-bold text-2xl my-6">We Will Give the Best Service to our Patient</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                aliquid ullam quasi, doloribus sequi delectus itaque odit quo
                quibusdam magni cupiditate?
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <img
                className="w-30 p-30 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
                src={ServiceImg3}
                alt="/"
              />
              <h3 className="font-bold text-2xl my-6">We Have the Best Doctor</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                aliquid ullam quasi, doloribus sequi delectus itaque odit quo
                quibusdam magni cupiditate?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services