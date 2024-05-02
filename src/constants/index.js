import {
    contact,
    git,
    github,
    linkedin,
    mongodb,
    nodejs,
    react,
    typescript
} from "../assets/icons";
import figma from "../assets/icons/figma.svg";
import blender from "../assets/icons/blender.svg";
import shell from "../assets/icons/shell.svg";
import hadoop from "../assets/icons/hadoop.svg";
import oracle from "../assets/icons/oracle.svg";
import keycloak from "../assets/icons/keycloak.svg";
import python from "../assets/icons/python.svg";
import java from "../assets/icons/java.svg";
import docker from "../assets/icons/docker.svg";
import portfolio from "../assets/icons/portfolio.svg";
import hoodie from "../assets/icons/hoodie.svg";
import leaf from "../assets/icons/leaf.svg";
import olympic from "../assets/icons/olympic.svg";
import permission from "../assets/icons/permissions.svg";

import rbac from "../assets/images/rbac.png";
import sql from "../assets/images/sql.png";
import babylon from "../assets/images/babylon.png";
import neo4j from "../assets/images/neo4j.png";
import management from "../assets/images/management.png";
import airbus from "../assets/images/airbus.png";
import miage from "../assets/images/miage.png";
import college from "../assets/images/college.png";
import ef from "../assets/images/ef.png";
import aws from "../assets/images/aws.png";
import c2i from "../assets/images/c2i.png";
import qlik from "../assets/images/qlikS.png";

export const skills = [
    {
        imageUrl: oracle,
        name: "Oracle",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "NoSQL",
    },
    {
        imageUrl: neo4j,
        name: "Neo4j",
        type: "NoSQL",
    },
    {
        imageUrl: hadoop,
        name: "Hadoop",
        type: "Database",
    },
    {
        imageUrl: qlik,
        name: "Qlik Sense",
        type: "Business Intelligence",
    },
    {
        imageUrl: keycloak,
        name: "Keycloak",
        type: "Cybersecurity",
    },
    {
        imageUrl: rbac,
        name: "RBAC",
        type: "Cybersecurity",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: shell,
        name: "Shell",
        type: "Command Line",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: babylon,
        name: "Babylon.js",
        type: "3D",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend",
    },
    {
        imageUrl: management,
        name: "Management",
        type: "Project Management",
    }
];

export const experiences = [
    {
        title: "Apprentice Data Analyst for MAP A320",
        company_name: "Airbus Operations",
        icon: airbus,
        iconBg: "#a2d2ff",
        date: "September 2022 - August 2024",
        points: [
           "Created a Digital Control Room for the MAP A320, enabling real-time monitoring of production data.",
           "Centralized data from various sources into a single platform using Qlik Sense and conducted ETL processes.",
           "Used Skywise for data sourcing and transformations, enabling the creation of comprehensive dashboards in Qlik Sense.",
           "Presented the project to the MAP A320 team, facilitating its adoption for production monitoring.",
           "Collaborated with teams in Hamburg to ensure quality and consistency of data.",
        ],
    },
    {
        title: "Apprentice Developer on production tool",
        company_name: "Airbus Defence and Space",
        icon: airbus,
        iconBg: "#accbe1",
        date: "August 2021 - August 2022",
        points: [
            "Developed and maintened a production tool, aimed to centralize data from several tools.",
            "Using Python coding and Visual Planning API integration to centralize data into a unified system.",
            "Presented the consolidated tool to team leaders, facilitating its adoption for their teams.",
            "Created a comprehensive user manual detailing the tool's functionalities for effective utilization.",
        ],
    }
];

export const educations = [
    {
        title: "Master MIAGE parcours Ingénierie des Données et Protection (IDP)",
        company_name: "Université Toulouse III - Paul Sabatier",
        icon: miage,
        iconBg: "#c8c2ff",
        date: "September 2022 - August 2024",
        points: [
           "Cybersecurity : Access control and identity management (RBAC, Keycloak) & Risk and security management",
           "Databases : NoSQL (MongoDB, Neo4j), Big Data (Hadoop), Analytical methods for Big Data",
           "Data Analysis : Business Intelligence (Power BI), Data Visualization (D3.js), AI",
           "Cross-cutting skills : Digital law, Audit - Quality, Communication"
        ],
    },
    {
        title: "Licence MIASHS parcours MIAGE",
        company_name: "Université Toulouse III - Paul S.",
        icon: miage,
        iconBg: "#c8c2ff",
        date: "September 2019 - August 2022",
        points: [
           "Databases : SQL, PL/SQL, Oracle SQL Developer, phpMyAdmin, mySQL",
           "Programming : Python, Shell, Java, C",
           "Web Development : HTML6, CSS, TypeScript, Angular, Node.js, Spring Boot",
           "Cross-cutting skills : Project Management, Financial analysis"
        ],
    },
    {
        title: "Brevet d'Initiation à l'Aéronautique (BIA)",
        company_name: "Collège du Bois de la Barthe",
        icon: college,
        iconBg: "#b7e4c7",
        date: "September 2015 - June 2016",
        points: [
           "Understanding basic principles of flight and aerodynamics.",
           "Knowledge of aviation regulations, safety procedures and aircraft systems.",
           "Gaining proficiency in interpreting meteorological data, navigation techniques, and aviation history",
           "Developing skills in flight planning, aircraft identification, and flight performance analysis."
        ],
    },
];

export const certifications = [
    {
        title: "Métiers de l'ingénieur (Level 2)",
        company_name: "Université Toulouse III - Paul Sabatier",
        icon: c2i,
        iconBg: "#a2d2ff",
        date: "2023 - 2024",
        points: [
            "Mastery of the cross-disciplinary skills in the use of digital technologies necessary for the exercise of a profession and the ability to develop them throughout one's professional life."
        ],
    },
    {
        title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        company_name: "Université Toulouse III - Paul S.",
        icon: aws,
        iconBg: "#ffe2c9",
        date: "October 2023 - December 2023",
        points: [
            "Became an AWS Academy Cloud Foundations graduate, equipped with fundamental knowledge in cloud computing from AWS.",
            "Obtained a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support."
        ],
    },
    {
        title: "Course Certificate & Language Assessment (Level C1-2)",
        company_name: "EF Auckland - International Language Campuses",
        icon: ef,
        iconBg: "#c2d8ff",
        date: "July 2023 - July 2023",
        points: [
            "Understanding & Listening",
            "Reading & Writing",
            "Spoken Interaction & Production",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nicolasjp',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nicolas-jacob-peres-a7ba75196/',
    }
];

export const projects = [
    {
        iconUrl: portfolio,
        theme: 'btn-back-pink',
        name: '3D Portfolio Website',
        description: 'Developed a 3D portfolio website using React with Three.js, showcasing my projects and skills in an interactive and visually appealing manner.',
        link: 'https://github.com/nicolasjp/Portfolio'
    },
    {
        iconUrl: hoodie,
        theme: 'btn-back-red',
        name: 'TCP Teamwear Studio',
        description: 'Designed and developed a 3D web application for customizing teamwear for my tennis club, enabling the committee to choose new designs and colors for the team.',
        link: 'https://nicolasjp.github.io/TCP-Teamwear-Studio/'
    },
    {
        iconUrl: leaf,
        theme: 'btn-back-green',
        name: 'Daily Green',
        description: 'Developed a video game for the Games on Web 2023 competition that educates players on the importance of ecology, promoting eco-friendly habits in a fun and engaging way. The game was developed using Babylon.js and Blender.',
        link: 'https://github.com/gamesonweb/be-green-daily-green?tab=readme-ov-file'
    },
    {
        iconUrl: olympic,
        theme: 'btn-back-blue',
        name: 'Golden Legends',
        description: 'Developed a video game for the Games on Web 2024 competition that immerses players in the 2024 Paris Olympics, enabling them to compete in various sports and win medals. The game was developed using Babylon.js, Blender and Vue.js.',
        link: 'https://github.com/Golden-Legends'
    },
    {
        iconUrl: permission,
        theme: 'btn-back-black',
        name: 'Keycloak RBAC Website',
        description: 'Developed a website prototype with the RBAC model, offering a grade management system for universities. The website was developed using Node.js, Express, Keycloak and Docker.',
        link: 'https://github.com/nicolasjp/keycloakProject'
    }
];