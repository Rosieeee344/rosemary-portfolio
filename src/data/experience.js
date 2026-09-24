/**
 * Experience data — internships, work, volunteer and leadership roles.
 * Edit this array to add/remove entries. Each entry maps to a timeline
 * item in the Experience section (see src/components/Experience.jsx).
 *
 * Fields:
 *   organization   — company / community / group name
 *   role           — your position or title
 *   type           — e.g. Internship, Open Source, Technical, Leadership
 *   startDate      — human-readable start date (or 'Present')
 *   endDate        — human-readable end date (leave '' when unknown/ongoing)
 *   description    — one or two sentence summary (optional)
 *   technologies   — tools/skills used (rendered as tags, optional)
 *   achievements   — bullet list of impact/outcomes (optional)
 *
 * NOTE: Keep descriptions concise and don't invent details. Leave fields
 * empty ('' or []) when you have nothing to add yet.
 */
export const experienceData = [
  {
    id: 1,
    organization: 'SprinTelex',
    role: 'Technical Assistant to the CTO',
    type: 'Technical',
    startDate: 'Present',
    endDate: '',
    description:
      'Helping with the technical side of SprinTelex — including the Android and iOS versions of the app, testing, bug reporting, and product/technical improvements.',
    technologies: ['Web Development', 'Mobile Development', 'Product Design'],
    achievements: [],
  },
  {
    id: 2,
    organization: 'Codetopia Community',
    role: 'Open Source / Volunteer / Core Maintainer',
    type: 'Open Source',
    startDate: 'Present',
    endDate: '',
    description:
      'Completed my mentorship and internship in the Projects & Open Source department and now contribute as a volunteer maintainer in the open source department.',
    technologies: ['Git', 'GitHub', 'Open Source','Teamwork'],
    achievements: [],
  },
  {
    id: 3,
    organization: 'RoreDevs',
    role: 'Technical / Product Team',
    type: 'Team',
    startDate: 'Present',
    endDate: '',
    description:
      'Part of the RoreDevs team — contributing to products including Seemul, as well as product ideas and technical direction.',
    technologies: ['Web Development', 'Mobile Development', 'Product Design'],
    achievements: [],
  },
  {
    id: 4,
    organization: 'Xolace',
    role: 'Xolace Ambassador / Xolacer',
    type: 'Community',
    startDate: 'Present',
    endDate: '',
    description:
      'Representing Xolace within the student community and connecting peers to the platform.',
    technologies: ['teamwork', 'community engagement'],
    achievements: [],
  },
  {
    id: 5,
    organization: 'COMPSSA, KTU',
    role: 'Secretary to the Organizer',
    type: 'Leadership',
    startDate: 'Present',
    endDate: '',
    description: '',
    technologies: [],
    achievements: [],
  },
  {
    id: 6,
    organization: 'KTU BTech ICT',
    role: 'Course Representative',
    type: 'Leadership',
    startDate: 'Present',
    endDate: '',
    description: '',
    technologies: [],
    achievements: [],
  },
  {
    id: 7,
    organization: 'National Communications Authority (NCA)',
    role: 'Intern',
    type: 'Internship',
    startDate: '2024',
    endDate: '2024',
    description: 'My first internship, approximately two months.',
    technologies: [],
    achievements: [],
  },
]
