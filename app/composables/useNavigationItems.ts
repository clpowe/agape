import { ref } from 'vue';

export const useNavigationItems = () => {
  const items = ref([
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'About',
      to: '/about/'
    },
    {
      label: 'Services',
      to: '/services',
      children: [
        {
          label: 'Law School Preparation Services',
          description: 'Courses and tutoring to build foundational law exam writing skills.',
          to: '/services/law-school-prep'
        },
        {
          label: 'Bar Prep Academy',
          description: 'Personalized bar exam prep for professionals, emphasizing writing and analysis.',
          to: '/services/bar-prep-academy'
        },
        {
          label: 'Law School Partnerships',
          description: 'Early, supplemental bar prep and workshops improving mindset, essay writing.',
          to: '/services/law-school-partnerships'
        },
        {
          label: 'First Time Takers',
          description: 'Specialized courses for first-time bar exam takers emphasizing essay mastery.',
          to: '/services/first-time-takers'
        },
        {
          label: 'MBE Only Takers',
          description: 'Focused MBE tutoring and skill-building for targeted bar exam success.',
          to: '/services/mbe-only-takers'
        },
        {
          label: 'Repeat Takers',
          description: 'Comprehensive bar prep and tutoring tailored specifically for repeat takers.',
          to: '/services/repeat-takers'
        }
      ]
    },
    {
      label: 'Contact',
      to: '/contact/'
    },
    {
      label: 'Apply',
      to: '/apply'
    },
    {
      label: 'Careers',
      to: '/careers'
    },
    {
      label: 'Current Students',
      to: '/student-portal'
    }
  ]);

  return { data: items };
};