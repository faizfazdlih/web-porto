// lib/projects-data.ts
export interface Project {
    id: number
    slug: string
    title: string
    description: string
    fullDescription: string
    image: string
    images: string[]
    tags: string[]
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    year: string
}

export const projectsData: Project[] = [
    {
        id: 1,
        slug: "ulin",
        title: "Ulin",
        description: "A fullstack tourism information platform built using Express.js for the backend and React for the frontend.",
        fullDescription: "Ulin is a fullstack web application designed to display tourism destinations and categories. The backend is built using Express.js, providing RESTful APIs for destinations, categories, and media handling. The frontend is developed using React, offering a clean, responsive interface that consumes the backend API. This app demonstrates fullstack integration, API development, frontend rendering, and structured project architecture.",
        image: "/ulin.png",
        images: [
            "/projects/ulin.png",
            "/projects/ulin2.png",
            "/projects/ulin3.png"
        ],
        tags: ["Tourism", "Express", "React", "Web App", "Academic Project"],
        technologies: [
            "Express.js",
            "Node.js",
            "React",
            "REST API",
            "MySQL",
            "Axios"
        ],
        githubUrl: "https://github.com/faizfazdlih/wisata_frontend",
        year: "2025"
    },
    {
        id: 2,
        slug: "asklepios",
        title: "Asklepios",
        description: "A digital platform focused on health, medical information, and optimizing patient-doctor interaction.",
        fullDescription: "Asklepios is a platform built using Java Spring Boot to support healthcare-related features such as managing users, handling authentication, and organizing health records. This backend is designed to be secure, scalable, and ready to integrate with web clients.",
        image: "/projects/asklepios.png",
        images: [
            "/projects/asklepios.png",
            "/projects/asklepios2.png",
            "/projects/asklepios3.png",
        ],
        tags: ["Health", "Medical", "Academic Project"],
        technologies: [
            "Java",
            "Spring Boot",
            "MySQL",
            "Tailwind CSS"
        ],
        githubUrl: "https://github.com/faizfazdlih/asklepiosa",
        year: "2025"
    },
    {
        id: 3,
        slug: "skillify",
        title: "Skillify",
        description: "A web-based information system built with the Laravel framework for educational needs.",
        fullDescription: "This application is a dedicated web-based educational platform built using Laravel framework. Its primary purpose is to streamline administrative and learning processes. Features likely include content management for courses, student enrollment tracking, and teacher management.",
        image: "/projects/skillify.png",
        images: [
            "/projects/skillify.png",
            "/projects/skillify3.png",
            "/projects/skillify4.png"
        ],
        tags: ["Laravel", "PHP", "Tailwind CSS", "Academic Project"],
        technologies: [
            "Laravel",
            "PHP",
            "Tailwind CSS",
            "MySQL"
        ],
        githubUrl: "https://github.com/Masdika1/-web_pendidikan",
        year: "2024"
    },

    {
        id: 4,
        slug: "horologium",
        title: "Horologium",
        description: "A versatile native mobile application built with Kotlin, featuring essential utilities like a calculator, weather module, and news feed.",
        fullDescription: "Horologium is a comprehensive mobile application that integrates multiple fundamental features within a single platform. It includes a mandatory Splash Screen for app initialization, personal modules like Biodata and Contacts, and core utilities such as a functional Calculator. Furthermore, it offers Weather and News modules to present relevant information, serving as a robust demonstration of diverse mobile development skills.",
        image: "/projects/mockup.jpeg",
        images: [
            "/projects/mockup.jpeg",
        ],
        tags: ["Mobile Development", "Academic Project", "Kotlin"],
        technologies: [
            "Kotlin",
            "Andorid Studio",
            "Xml"
        ],
        githubUrl: "https://github.com/faizfazdlih/uts_mobile",
        year: "2025"
    },
]

export function getAllProjects(): Project[] {
    return [...projectsData].sort((a, b) => {
        const yearDiff = parseInt(b.year) - parseInt(a.year)
        if (yearDiff !== 0) return yearDiff
        return b.id - a.id
    })
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projectsData.find(project => project.slug === slug)
}

export function getFeaturedProjects(limit: number = 6): Project[] {
    return [...projectsData]
        .sort((a, b) => {
            const yearDiff = parseInt(b.year) - parseInt(a.year)
            if (yearDiff !== 0) return yearDiff
            return b.id - a.id
        })
        .slice(0, limit)
}