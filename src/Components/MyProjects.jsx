import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://protfolio-of-nirob-ahmed-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                console.log(data);
            })
    }, []);
    return (
        <div id='projects'  data-aos="fade-up" data-aos-duration="3000" className="pb-10">
            <h1 className="font-bold text-xl lg:text-3xl py-4 text-[#12F7FF]">My Projects</h1>
            <div className="grid gap-4 grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-2">
                {
                    projects.map(project =>
                        <div data-aos="fade-up" data-aos-duration="2000" className="w-full max-w-sm p-4 md:max-w-md lg:max-w-lg bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                            <div className='w-full h-64'>
                                <img src={project.WebsiteImage} alt='' className="w-full h-full object-cover" />

                            </div>
                            <div className="p-5">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{project.WebsiteName}</h2>
                                <p className="text-gray-600 mb-4">{project.WebsiteDes.slice(0,50)}...</p>
                                <div className="flex justify-between items-center">
                                    <Link to={`/details/${project._id}`}
                                        className="flex w-full justify-center items-center gap-2 border rounded-none text-black border-black  px-4 py-2 font-semibold bg-[#1F7FF] hover:scale-95 transition">
                                        View Details <FaExternalLinkAlt />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyProjects;