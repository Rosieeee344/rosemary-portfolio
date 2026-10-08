/**
 * Portfolio project data — enriched with challenges and richer descriptions.
 */
export const projects = [
  {
    id: 1,
    title: 'Acadex',
    description:
      'Designed and built Acadex end to end: a geolocation-based attendance and academic management platform for class attendance tracking. I own the architecture database, and deployment, and i maintain it for real users.',
    longDescription:
      'I designed and built Acadex end to end: a geolocation-based attendance and academic management platform for class attendance tracking. I own the architecture, database, and deployment, and i maintain it for real users.',
    challenge:
      'Modelling complex academic data relationships: courses, students, departments, and timetables, in a way that stays performant under real usage. Building a clean interface that lecturers and administrators both find intuitive.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'React Query', 'Supabase'],
    category: 'Web Apps',
    liveUrl: 'https://acadex-ktu.vercel.app',
    githubUrl: null,
    image: '/assets/images/acadex.png',
    status: 'Live',
    featured: true,
  },
  {
    id: 2,
    title: 'RoreDevs Website',
    description:
      'The official website for RoreDevs — a student-led developer group focused on building impactful digital products.',
    longDescription:
      'A modern website showcasing RoreDevs\' mission, team, projects, and services. Designed to attract collaborators and demonstrate the group\'s capabilities to the wider tech community.',
    challenge:
      'Balancing a professional community with the energy of a student-led group. Designing for clarity, ensuring visitors immediately understand what RoreDevs does and how to get involved.',
    tech: ['React', 'Tailwind CSS','JavaScript', 'React Router', 'Vite'],
    category: 'Web Apps',
    liveUrl: 'https://www.novutech.tech/',
    githubUrl: null,
    image: null,
    status: 'Live',
    featured: true,
  },
  {
    id: 3 ,
    title: 'GNUTS Skills Hub',
    description:
      'A platform where students can register, browse courses, and learn valuable skills, from web development to graphic design.',
    longDescription:
      'A comprehensive skills learning platform designed for students, enabling registration, course browsing, and skill development in a structured environment. Built collaboratively as part of a university initiative to make learning accessible.',
    challenge:
      'Designing a scalable course browsing experience while keeping the UI intuitive for first-time users. Integrating Supabase for authentication and real-time data was a learning milestone.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'React Query', 'Supabase'],
    category: 'Education',
    liveUrl: 'https://bit.ly/4a7ZNEN',
    githubUrl: null,
    image: '/assets/images/gnuts-skills-hub.png',
    status: 'Live',
    featured: true,
  },
  {
    id: 4,
    title: 'Seemul',
    description:
      'An online platform where students exchange skills directly, removing financial barriers to learning.',
    longDescription:
      'A peer-to-peer skill exchange platform that removes financial barriers by enabling students to trade their expertise with each other. One student teaches coding; another teaches design — no money involved.',
    challenge:
      'Building a matching system that connects skill supply with demand and designing trust mechanisms — peer reviews and ratings — that encourage quality participation.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Supabase Auth'],
    category: 'Community',
    liveUrl: null,
    githubUrl: null,
    image: null,
    status: 'In Development',
    featured: false,
  },
  
]

export const categories = ['All', 'Web Apps', 'Education', 'Productivity', 'Community']
