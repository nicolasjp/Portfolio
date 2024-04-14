import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    estate,
    git,
    github,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
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
import rbac from "../assets/images/rbac.png";
import sql from "../assets/images/sql.png";
import babylon from "../assets/images/babylon.png";
import neo4j from "../assets/images/neo4j.png";
import management from "../assets/images/management.png";
// import ads2 from "../assets/images/ads2.jpg";

export const skills = [
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
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: oracle,
        name: "Oracle",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
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
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/nicolasjp/project1',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/nicolasjp/project2',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/nicolasjp/project3',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/nicolasjp/project4',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/nicolasjp/project5',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/nicolasjp/project6',
    }
];