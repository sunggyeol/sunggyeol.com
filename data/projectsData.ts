interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Fintellection',
    description: `I created the Fintellection, an AI-powered search engine that fetches and displays real-time financial data from the internet. Utilizing advanced techniques such as Retrieval-Augmented Generation (RAG), embeddings, and similarity searching, it delivers accurate and insightful financial information promptly.`,
    imgSrc: '/static/images/Fintellection.png',
    href: 'https://www.fintellection.com/',
  },
  {
    title: 'Google Datacenter Workload Characterization',
    description: `I worked on the Google Datacenter Workload Characterization project, which involved analyzing and visualizing data from Google's production systems using Matlab. The project focused on understanding task and job patterns, resource usage, and identifying correlations between CPU and memory consumption within the dataset.`,
    imgSrc: '/static/images/DatacenterCharacterization.png',
    href: 'https://drive.google.com/file/d/1xJLmw61dM8wPxNKOyRv0A5IdkXQ62hr_/view',
  },
  {
    title: 'Solar Powered Autonomous Drone',
    description: `I created a project to develop solar-powered autonomous drones, addressing sustainability concerns associated with current battery-operated drones. By integrating solar panels, these drones reduced reliance on non-renewable energy sources, promoting a more environmentally friendly and efficient solution for drone technology.`,
    imgSrc: '/static/images/Drone.png',
    href: 'https://drive.google.com/file/d/1rs3BygTYegXe2XD3JpCKoBTyJsH6-idZ/view',
  },
  {
    title: 'Smart Workout Tracking Solution for Outdoor Fitness',
    description: `I developed a user-centered smart workout tracking system for outdoor fitness.  It leverages mobile and smartwatch technologies to provide real-time data and personalized exercise plans, enhancing the outdoor workout experience.`,
    imgSrc: '/static/images/SmartWorkoutTracking.png',
    href: 'https://drive.google.com/file/d/1iuaM5lV05atPckfj78h5cdewAQM3ny7X/view',
  },
]

export default projectsData
