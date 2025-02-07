import React from 'react';
import BannerSection from './bannerSection';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div className='mt-20 w-10/12 mx-auto'>
            <BannerSection></BannerSection>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;