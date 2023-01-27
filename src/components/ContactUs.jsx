import React from 'react'

function ContactUs() {
  return (
    <section name='contactus' id="contactUs">
      <div className="relative w-screen h-[820px] bg-[#DBE2EF] bg-digitalCity bg-cover">
        <div className="relative w-[100%] h-[100%] flex flex-row items-center">
          <div className="w-[50%]">
            <h1 className="font-bebasNeue text-[52px] text-white tracking-widest ml-[27%]">
              Contact Us
            </h1>
          </div>
          <div className="w-[50%]">
            <div className="w-[500px] h-[600px] bg-white float-right mr-[27%] mt-[10%] rounded-lg">
              <div className="w-[100%] h-[100%] flex flex-col">
                <div>
                  <h1 className="text-[#3F72AF] font-poppins font-bold ml-[7%] mt-[50px] mb-[30px]">
                    Message Form
                  </h1>
                  <div>
                    <form className="flex flex-col font-poppins items-center">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-[85%] border-b-[1px] border-black placeholder:text-[#3F72AF] my-[50px]"
                      />
                      <input
                        type="text"
                        placeholder="E-mail"
                        className="w-[85%] border-b-[1px] border-black placeholder:text-[#3F72AF] my-[50px]"
                      />
                      <input
                        type="text"
                        placeholder="Message"
                        className="w-[85%] border-b-[1px] border-black placeholder:text-[#3F72AF] my-[50px]"
                      />
                      <div className="w-[100%]">
                        <button
                          type="submit"
                          className="bg-[#3F72AF] rounded-l-lg p-4 px-10 text-white float-right hover:bg-[#d8d8d8] hover:text-[#1f2123]"
                        >
                          SEND MESSAGE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs
