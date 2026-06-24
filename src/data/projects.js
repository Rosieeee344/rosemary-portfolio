/**
 * Portfolio project data
 */
export const projects = [
  {
    id: 1,
    title: 'GNUTS Skills Hub',
    description: 'A platform where students can register and learn valuable skills.',
    longDescription: 'A comprehensive skills learning platform designed for students, enabling registration, course browsing, and skill development in a structured environment.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'React Query', 'Supabase'],
    category: 'Education',
    liveUrl: 'https://bit.ly/4a7ZNEN',
    githubUrl: null,
    image: '/assets/images/gnuts-skills-hub.png',
    status: 'Live',
    featured: true,
  },
  {
    id: 2,
    title: 'Acadex',
    description: 'A university academic management system.',
    longDescription: 'A full-featured academic management platform for universities, providing tools for course management, student records, and administrative workflows.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'React Query', 'Supabase'],
    category: 'Web Apps',
    liveUrl: 'https://acadex-ktu.vercel.app',
    githubUrl: null,
    image: '/assets/images/acadex.png',
    status: 'Live',
    featured: true,
  },
  {
    id: 3,
    title: 'SkillSwap',
    description: 'An online platform where students exchange skills without monetary payment.',
    longDescription: 'A peer-to-peer skill exchange marketplace that removes financial barriers by enabling students to trade their expertise with each other.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase Auth'],
    category: 'Community',
    liveUrl: null,
    githubUrl: null,
    image: null,
    status: 'In Development',
    featured: false,
  },
]

export const categories = ['All', 'Web Apps', 'Education', 'Productivity', 'Community']