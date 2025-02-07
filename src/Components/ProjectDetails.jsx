import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    let data = useLoaderData()
    return (
        <div  data-aos="fade-up" data-aos-duration="3000" className="container mx-auto p-6 mb-4 mt-20">
            <div className="w-full md:max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image Section */}
                <div>
                    <img
                        src={data.WebsiteImage}
                        alt={data.WebsiteName}
                        className="w-full h-72 object-cover"
                    />
                </div>
                {/* Details Section */}
                <div className="p-6 text-black">
                    <h2 className="text-2xl font-bold mb-4">Website Details :-</h2>
                    <h1 className="text-xl font-semibold">Website Name : {data.WebsiteName}</h1>

                    <div className="mb-4">
                        <strong className="text-lg">Website Description:</strong>
                        <p className="text-base break-words max-w-full">{data.WebsiteDes}</p>
                    </div>

                    <div className="mb-4 flex gap-1 items-center">
                        <h1 className="text-lg">Website Link:</h1>
                        <a
                            href={data.WebsiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Visit Website
                        </a>
                    </div>

                    <div className="mb-4 flex gap-1 items-center">
                        <h1 className="text-lg">Client Repository:</h1>
                        <a
                            href={data.WebsiteGithubClient}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 flex items-center gap-1 hover:underline"
                        >
                            View on GitHub <FaGithub />
                        </a>
                    </div>

                    <div className="mb-4 flex gap-1 items-center">
                        <h1 className="text-lg">Server Repository:</h1>
                        <a
                            href={data.WebsiteGithubserver}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            View on GitHub
                        </a>
                    </div>
                    <div className="mb-4">
                        <h1 className="text-lg">Technology:</h1>
                        <p>{data.Websitetechnology}</p>
                    </div>
                    <div className='text-end'>
                        <Link to='/' className='btn'>Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;