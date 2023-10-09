"use client";

import React, { useState } from 'react';
import './horizontal_scroll.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import JobDisplay from './job_display';
import { red } from '@mui/material/colors';
import cpf from '../public/cpf_team.png';
import cpf_logo from '../public/cpf_logo.png';
import space from '../public/space_team.png';
import space_logo from '../public/space_logo.png';
import checkmate from '../public/checkmate_team.png';
import checkmate_logo from '../public/checkmate_logo.svg';
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
}

interface HorizontalScrollProps {
    jobs: Job[];
}

const HorizontalScroll = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const jobs: Job[] = [
        {
            photograph: checkmate,
            company: 'Better.sg, Checkmate',
            company_logo: checkmate_logo,
            job_title: 'Software Engineer',
            date: 'August 2023 - Present',
            write_up: 'CheckMate is a Better.sg initiative that leverages AI and crowd-sourcining to minimise disinformation. Currently developing a fullstack web application integrated with Telegram. Using Node.js and Firebase for the backend.',
            relevant_skills: ['Node.js', 'Firebase', 'Telegram Bots', 'Next.js'],
            color: "#552527"
          },
        {
          photograph: cpf,
          company: 'Central Provident Fund Board, BIA',
          company_logo: cpf_logo,
          job_title: 'Software Engineer',
          date: 'May 2023 - August 2023',
          write_up: 'Developed a question-answering system using Large Language Models (LLMs) and Langchain. Deployed API endpoints for internal usage, using Docker and Microsoft Azure. Led the development of a fullstack app to manage and test prompts using Next.js and FastAPI. Presented our solution directly to the EXCO of CPFB',
          relevant_skills: ['Python', 'Javascript', 'Langchain', 'FastAPI', 'Docker', 'Azure', 'Next.js'],
          color: "#1C2923"
        },
        {
          photograph: space,
          company: 'Space (MedTech)',
          company_logo: space_logo,
          job_title: 'Data Analyst',
          date: 'June 2022 - Dec 2022',
          write_up: 'Developed a ML model to detect crepitations in lung sounds, achieving 92% accuracy. Applied signal processing techniques, mathematics, data analysis and ML algorithms on real patient data. Proposed and implemented a novel detection method which reduced computational time by 40%.',
          relevant_skills: ['Python', 'Machine Learning', 'Librosa', 'Pandas', 'Scikit-Learn', 'Signal Processing'],
          color: "#234444"
        }
      ];

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
                        <JobDisplay job={job}/>
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