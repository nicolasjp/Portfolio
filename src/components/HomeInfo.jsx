import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Nicolas</span> 🧑‍💻🎾🎹
            <br/>
            An apprentice Data Analyst from France.
        </h1>
    ),
    2: (
        <InfoBox
            text="Check out my educational and professional journey along with my certifications." //to think about the text
            link="/About"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Discover my personal and academic projects that have shaped my passion for computer science !" //to think about the text
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need someone in your team ? I'm just a few keystrokes away." //to think about the text
            link="/contact"
            btnText="Let's talk"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo