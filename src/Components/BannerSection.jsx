import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import banner from '../assets/Header_image.webp'
import banner from '../assets/My_Photo.png'
import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
const BannerSection = () => {
    let imageUrl = 'https://drive.google.com/file/d/1FX0XzQpJRridTJGLXtluS5giPHJ9aLuO/view?usp=drive_link'
    let fileName = "downloaded-resume.pdf";
    return (
        <div className='md:flex gap-4 justify-between items-center'>
            <div data-aos="fade-up" data-aos-duration="2000" className='md:w-[550px] space-y-2'>
                <h1 className='text-2xl md:text-4xl font-bold'><span className='text-white'>Hi! I am</span>
                    <span style={{ color: '#12F7FF', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[' Nirob Ahmed', ' Front End Developer']}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <h5 className="font-bold text-lg">Email:</h5>
                <a className="text-lg">nirobahmed0298@gmail.com</a>
                <h5 className="font-bold text-lg">Phone:</h5>
                <span className="text-lg">01926002688</span>
                <h4 className="font-bold text-lg">Contact Me:</h4>
                <div className="flex space-x-2 pt-2">
                    <a className='border-[#12F7FF] text-[#12F7FF] border p-2 rounded-[5px] hover:scale-125 duration-700' href="https://www.facebook.com/mdnirob.ahmed.52056223" target="_blank"><FaFacebook></FaFacebook></a>
                    <a className='border-[#12F7FF] text-[#12F7FF] border p-2 rounded-[5px] hover:scale-125 duration-700' href="https://github.com/nirobahmed0298" target="_blank"><FaGithub></FaGithub></a>
                    <a className='border-[#12F7FF] text-[#12F7FF] border p-2 rounded-[5px] hover:scale-125 duration-700' href="https://www.linkedin.com/in/nirob-ahmed-329717345/" target="_blank"><FaLinkedin></FaLinkedin></a>
                    <a className='border-[#12F7FF] text-[#12F7FF] border p-2 rounded-[5px] hover:scale-125 duration-700' href="https://www.instagram.com/nirob_ahmed_0298/" target="_blank"><FaInstagram></FaInstagram></a>
                </div>
                <div className='pt-4'>
                    <a className='btn rounded-none text-[#12F7FF] border border-[#12F7FF] bg-[#250821]' href={imageUrl}
                        download={fileName} target='_blank'>Download Resume<FaDownload></FaDownload></a>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='md:w-[450px] md:h-[450px] rounded-full bg-white border-2 border-[#12F7FF] mt-6 md:mt-0'>
                <img className='rounded-full object-cover w-full h-full' src={banner} alt="Image" />
            </div>
        </div>
    );
}
export default BannerSection;