interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Google Datacenter Workload Characterization',
    description: `Description goes here.`,
    imgSrc: '/static/images/DatacenterCharacterization.png',
    href: 'https://drive.google.com/file/d/1xJLmw61dM8wPxNKOyRv0A5IdkXQ62hr_/view',
  },
  {
    title: 'Solar Powered Autonomous Drone',
    description: `Description goes here.`,
    imgSrc: '/static/images/Drone.png',
    href: 'https://drive.google.com/file/d/1rs3BygTYegXe2XD3JpCKoBTyJsH6-idZ/view',
  },
  {
    title: 'Smart Workout Tracking Solution for Outdoor Fitness',
    description: `Description goes here.`,
    imgSrc: '/static/images/SmartWorkoutTracking.png',
    href: 'https://drive.google.com/file/d/1iuaM5lV05atPckfj78h5cdewAQM3ny7X/view',
  },
  {
    title: 'Fintellection AI',
    description: `Description goes here.`,
    imgSrc: '/static/images/Fintellection.jpg',
    href: 'https://www.fintellection.com/',
  },

]

export default projectsData
