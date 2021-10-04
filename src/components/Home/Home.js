import React from 'react';
import Course from '../Course/Course';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = ({courses, services}) => {
    return (
        <div>
            <Hero></Hero>
            <Services services={services} len={4}></Services>
            <Course courses={courses} len={4}></Course>
        </div>
    );
};

export default Home;