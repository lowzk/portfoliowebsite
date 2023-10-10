"use client";

import React, { useState } from 'react';
import './horizontal_scroll.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import JobDisplay from './job_display';
import FlippedJobDisplay from './job_display_flipped';
import { StaticImageData } from 'next/image';

export interface Job {
    photograph: StaticImageData | string;
    company: string;
    company_logo: StaticImageData | string;
    job_title: string;
    date: string;
    write_up: string;
    relevant_skills: string[];
    color: string;
    website_link: string;
}

interface HorizontalScrollProps {
    jobs: Job[];
    flipped: boolean;
}

const HorizontalScroll = ({jobs, flipped}:HorizontalScrollProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);``

    const handleNext = () => {
        if (currentIndex < jobs.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="slider-container">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="slider-image"
                    >
                        {flipped ? <FlippedJobDisplay job={job}/> : <JobDisplay job={job}/>}
                    </div>
                ))}
            </div>

            <button className="slider-controls-left" onClick={handlePrevious} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>
                <ArrowCircleLeftIcon style={{ fontSize: '2.5rem' }}/>
            </button>
            <button className="slider-controls-right" onClick={handleNext} style={{ display: currentIndex === jobs.length - 1 ? 'none' : 'block' }}>
                <ArrowCircleRightIcon style={{ fontSize: '2.5rem' }}/>
            </button>
        </div>
    );
};

export default HorizontalScroll;