import React, { useRef, useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from "@emailjs/browser";
const Footer = () => {
    const form = useRef();
    const [message, setMessage] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_jkfos3j",
                "template_fyt7umr",
                form.current,
                "JN3LuyvEfpjUfMDp3"
            )
            .then(
                (result) => {
                    console.log(result);
                    setMessage("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    setMessage("Failed to send message. Try again!");
                }
            );
    };
    return (
        <footer className="bg-[#E1EBED] text-black">
            <div className="w-10/12 mx-auto py-10 lg:flex gap-4">
                <div data-aos="fade-up" data-aos-duration="3000" className=" text-cente">
                    <div className='md:w-[400px]'>
                        <DotLottieReact
                            src="https://lottie.host/01b5ede4-d108-4b52-904c-b408991f8dde/kSrFovTahB.lottie"
                            loop
                            autoplay

                        />
                    </div>
                    <h2 className="text-xl font-bold">Lets Connect</h2>
                    <p className=" my-2">Please fill out the form on this section to contact with me or call between 9:00 A.M
                        and
                        8.00 P.M ET, Monday through Friday.</p>

                    <div className="flex space-x-2 pt-2">
                        <a className='border-black text-black border p-2 rounded-[5px] hover:scale-125 duration-700' href="https://www.facebook.com/mdnirob.ahmed.52056223" target="_blank"><FaFacebook></FaFacebook></a>
                        <a className='border-black text-black border p-2 rounded-[5px] hover:scale-125 duration-700' href="https://github.com/nirobahmed0298" target="_blank"><FaGithub></FaGithub></a>
                        <a className='border-black text-black border p-2 rounded-[5px] hover:scale-125 duration-700' href="https://www.linkedin.com/in/nirob-ahmed-329717345/" target="_blank"><FaLinkedin></FaLinkedin></a>
                        <a className='border-black text-black border p-2 rounded-[5px] hover:scale-125 duration-700' href="https://www.instagram.com/nirob_ahmed_0298/" target="_blank"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="footer-form w-full">
                    <h2 className="font-bold text-xl mb-4">Let’s Message me</h2>
                  
                    <div className="p-6 flex-1 shadow-lg rounded-lg">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                            <input type="text" name="user_name" placeholder="Your Name" required className="border p-2 rounded" />
                            <input type="email" name="user_email" placeholder="Your Email" required className="border p-2 rounded" />
                            <textarea name="message" placeholder="Message" required className="border p-2 rounded"></textarea>
                            {message && <p className="my-2 text-green-500">{message}</p>}
                            <button type="submit" className="bg-blue-500 text-white py-2 rounded">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;