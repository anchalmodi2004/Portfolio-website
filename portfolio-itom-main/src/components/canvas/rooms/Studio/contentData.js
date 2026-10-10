/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
    x: {
        color: '#000000',
        accentColor: '#14171A',
        icon: '𝕏',
        label: 'X (Twitter)',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Codrops',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ---- SKILLS ----
    {
        id: 'skill-001',
        platform: 'blog',
        title: 'Core Java & OOP',
        description: 'Strong foundation in object-oriented programming, multithreading, exception handling, collections framework, and design patterns in Java.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2025',
        readTime: 'Core Skill',
    },
    {
        id: 'skill-002',
        platform: 'blog',
        title: 'Spring Boot & Hibernate',
        description: 'Building backend services and RESTful APIs using Spring Boot framework, Hibernate ORM for object-relational mapping, and JDBC for direct database connectivity.',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2025',
        readTime: 'Backend',
    },
    {
        id: 'skill-003',
        platform: 'tiktok',
        title: 'MySQL & JDBC',
        description: 'Proficient in relational database design, SQL query optimization, joins, transactions, stored procedures, and JDBC connectivity for high-integrity Java applications.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2025',
        views: 'Database',
        likes: 'SQL',
    },
    {
        id: 'skill-004',
        platform: 'youtube',
        title: 'Data Structures & Algorithms',
        description: 'Solid understanding of DSA — arrays, linked lists, trees, graphs, sorting and searching algorithms, and problem-solving techniques implemented in Java.',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2025',
        views: 'DSA',
        duration: 'Java',
    },
    {
        id: 'skill-005',
        platform: 'blog',
        title: 'Git & GitHub',
        description: 'Version control with Git, collaborative development on GitHub, branching strategies, pull requests, and maintaining clean commit histories for team projects.',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2025',
        readTime: 'DevTools',
    },
    {
        id: 'skill-006',
        platform: 'tiktok',
        title: 'Web Development & UI/UX',
        description: 'Building clean, responsive user interfaces with HTML, CSS, and JavaScript. Exploring modern web frameworks, AI-assisted tooling, and UX design principles.',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2025',
        views: 'Frontend',
        likes: 'Design',
    },
    // ---- CERTIFICATIONS & POSITION ----
    {
        id: 'cert-001',
        platform: 'youtube',
        title: 'NPTEL Java Certification',
        description: 'Completed the NPTEL "Programming in Java" online course (Jan–Apr 2025) with a score of 66%, covering core Java, OOP, data structures, and programming best practices.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: 'Jan-Apr 2025',
        views: '66%',
        duration: 'NPTEL',
    },
    {
        id: 'position-001',
        platform: 'blog',
        title: 'B.Tech IT @ AITR, Indore',
        description: 'Pursuing B.Tech in Information Technology from Acropolis Institute of Technology & Research (AITR), Indore, affiliated to RGPV Bhopal. Current CGPA: 82.6%. Batch 2023–27.',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2023-2027',
        readTime: 'Education',
    },
    {
        id: 'position-002',
        platform: 'youtube',
        title: 'Backend Developer — Minor Projects',
        description: 'Served as Backend Developer in two college minor projects: Smart Student Hub (centralized student data hub with Java/Spring Boot) and ISL Translation System (AI-based sign language app).',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2024-2025',
        views: 'Role',
        duration: 'Backend Dev',
    },
    // ---- AWARDS & ACTIVITIES ----
    {
        id: 'award-001',
        platform: 'tiktok',
        title: 'IEEE AI For Impact Hackathon',
        description: 'Participated in the IEEE AI For Impact Hackathon (May 2025), working on AI-driven solutions with a team. Demonstrated skills in rapid prototyping and real-world problem solving.',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: 'May 2025',
        views: 'IEEE',
        likes: 'Hackathon',
    },
    {
        id: 'award-002',
        platform: 'blog',
        title: 'Tech-o-tsav 2025 Participant',
        description: 'Participated in Tech-o-tsav 2025, a national-level technical fest organized by AITR college. Competed in technical events showcasing programming and problem-solving skills.',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2025',
        readTime: 'National Fest',
    },
    {
        id: 'award-003',
        platform: 'youtube',
        title: 'College Competition Winner',
        description: 'Won prizes in college hobby club competitions — 1st in Rangoli Competition and 1st in Chess Competition, organized by the college extracurricular activities department.',
        thumbnail: null,
        url: 'https://github.com/anchalmodi2004',
        date: '2024-2025',
        views: 'Winner',
        duration: 'Accolades',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
