import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const MySkills = () => {
    return (
        <div id='skill' data-aos="fade-up"  data-aos-duration="2000">
            <h1 className="font-bold text-xl lg:text-3xl py-5 text-[#12F7FF]">My Skills</h1>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-9 mb-8">
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center md:w-20 md:h-20 mb-10 md:mb-4">
                    <img className="w-full h-full hover:scale-125 transition-all duration-500 cursor-pointer"
                        src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt=""/>
                        <h1 className="font-bold text-sm">HTML</h1>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center md:w-20 md:h-20 mb-10 md:mb-4">
                    <img className=" h-full w-full hover:scale-125 transition-all duration-500 cursor-pointer"
                        src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" alt=""/>
                        <h1 className="font-bold text-sm">CSS</h1>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center md:w-20 md:h-20 mb-10 md:mb-4">
                    <img className=" h-full w-full hover:scale-125 transition-all duration-500 cursor-pointer"
                        src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt=""/>
                        <h1 className="font-bold text-sm">Tailwind</h1>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center md:w-20 md:h-20 mb-10 md:mb-4">
                    <img className=" h-full w-full hover:scale-125 transition-all duration-500 cursor-pointer"
                        src="
                    https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000                            " alt=""/>
                        <h1 className="font-bold text-sm">JavaScript</h1>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center md:w-20 md:h-20 mb-10 md:mb-4">
                    <img className="w-full h-full hover:scale-125 transition-all duration-500 cursor-pointer" src="
                    https://img.icons8.com/?size=100&id=123603&format=png&color=000000                          
                    "/>
                        <h1 className="font-bold text-sm">React.js</h1>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center w-full md:w-20  md:h-20 mb-10 md:mb-4">
                    <img className=" h-full w-full hover:scale-125 transition-all duration-500 cursor-pointer"
                        src="
                https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000                            "/>
                        <h1 className="font-bold text-sm">Node.js</h1>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center w-full md:w-20 md:h-20 mb-10 md:mb-4 bg-white rounded-lg">
                    <img className="w-full h-full hover:scale-125 transition-all duration-500 cursor-pointer" src="
                https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000" />
                    <h1 className="font-bold text-sm text-white">Express.js</h1>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center w-full md:w-20 md:h-20 mb-10 md:mb-4 ">
                    <img className="w-full h-full hover:scale-125 transition-all duration-500 cursor-pointer" src="
                https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000" />
                    <h1 className="font-bold text-sm">MongoDB</h1>
                </div>
                <div data-aos="fade-up"  data-aos-duration="2000" className="text-center w-full md:w-20 md:h-20 mb-10 md:mb-4 ">
                    <img className="w-full h-full hover:scale-125 transition-all duration-500 cursor-pointer" src="
                https://img.icons8.com/?size=100&id=62452&format=png&color=000000" />
                    <h1 className="font-bold text-sm">Firebase</h1>
                </div>
            </div>
        </div>
    );
};

export default MySkills;