import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
let img_hosting_key = import.meta.env.VITE_IMG_HOSTING;
let img_hosting_Api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const Dashboard = () => {
    let navigate = useNavigate();
    let { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    let onSubmit = async (data) => {
        let imgFile = { image: data.file[0] }
        let res = await axios.post(img_hosting_Api, imgFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res);
        if (res.data.success) {
            let projectItem = {
                WebsiteImage: res.data.data.display_url,
                WebsiteName: data.name,
                WebsiteDes: data.des,
                WebsiteLink: data.link,
                WebsiteGithubClient: data.githubClientLink,
                WebsiteGithubserver: data.githubServerLink,
                Websitetechnology: data.technology,
            }
            console.log(projectItem);
            let project = await axios.post('https://protfolio-of-nirob-ahmed-server.vercel.app/projects', projectItem)
            if (project.data.insertedId) {
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Project Added successfully !`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')

            }

        }

    };
    return (
        <>
            <div className='md:w-9/12 mx-auto my-24 border min-h-screen p-6'>
                <h1 className='text-xl md:text-4xl my-6 text-[#12F7FF] font-bold'>Add Project</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Website Image */}
                    <div className='md:flex gap-2'>
                        <div className="mb-2 w-full">
                            <label className="block text-sm font-bold mb-2" htmlFor="file">Website Image</label>
                            <input
                                type="file"
                                id="file"
                                className="file-input text-black file-input-bordered w-full"
                                {...register('file')}
                            />
                        </div>
                        <div className="mb-2 w-full">
                            <label className="block text-sm font-bold mb-2" htmlFor="text">Website Name</label>
                            <input
                                type="text"
                                id="name"
                                className="file-input file-input-bordered px-2 text-black w-full"
                                {...register('name')}
                            />
                        </div>
                    </div>
                    <div className='md:flex gap-2'>
                        {/* Des */}
                        <div className="mb-2 w-full">
                            <label className="block text-sm font-bold mb-2" htmlFor="text">Website Des</label>
                            <input
                                type="text"
                                id="des"
                                className="file-input file-input-bordered px-2 text-black w-full"
                                {...register('des')}
                            />
                        </div>
                        {/* Live Link */}
                        <div className="mb-2 w-full">
                            <label className="block text-sm font-bold mb-2" htmlFor="text">Website Link</label>
                            <input
                                type="text"
                                id="link"
                                className="file-input file-input-bordered px-2 text-black w-full"
                                {...register('link')}
                            />
                        </div>
                    </div>
                    <div className='md:flex gap-2'>
                        {/* Github Client Link */}
                        <div className="mb-2 w-full">
                            <label className="block text-sm font-bold mb-2" htmlFor="text">Github Client Link</label>
                            <input
                                type="text"
                                id="githubClientLink"
                                className="file-input file-input-bordered px-2 text-black w-full"
                                {...register('githubClientLink')}
                            />
                        </div>
                        {/* Github Server Link */}
                        <div className="mb-2 w-full">
                            <label className="block text-sm font-bold mb-2" htmlFor="text">Github Server Link</label>
                            <input
                                type="text"
                                id="githubServerLink"
                                className="file-input file-input-bordered px-2 text-black w-full"
                                {...register('githubServerLink')}
                            />
                        </div>
                    </div>
                    {/* used Technology */}
                    <div className="mb-2 w-full">
                        <label className="block text-sm font-bold mb-2" htmlFor="text">Technology</label>
                        <input
                            type="text"
                            id="technology"
                            className="file-input file-input-bordered px-2 text-black w-full"
                            {...register('technology')}
                        />
                    </div>


                    <button type="submit" className="btn w-full bg-[#12F7FF] hover:bg-[#0fd2d9] text-black mt-4">Add Project</button>
                </form >
            </div>
        </>
    );
};

export default Dashboard;