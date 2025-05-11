import PublicationLayout from "@/layouts/PublicationsLayout";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "Publications" });

export default function Page() {
  const publications = [
    {
      title:
        "Boosting Diary Study Outcomes with a Fine-Tuned Large Language Model",
      authors: "Oh, S., Zhao, J., Russo, C., & Bolmer Jr., M.",
      conference:
        "CHI EA '25: Extended Abstracts of the 2025 CHI Conference on Human Factors in Computing Systems",
      year: 2025,
      link: "https://doi.org/10.1145/3706599.3719287",
    },
    {
      title:
        "Optimizing Diary Studies Learning Outcomes with Fine-Tuned Large Language Models on the DiaryQuest Platform",
      authors:
        "Oh, S., Zhao, J., Russo, C., Bolmer Jr., M., Jeong, J., Fan, J., Cao, Y., Wang, W., & McCrickard, S.",
      conference: "IEEE Frontiers in Education Conference (Under Review)",
      year: 2025,
    },
    {
      title:
        "Explore Public's Perspectives on Generative AI in Computer Science (CS) Education: A Social Media Data Analysis",
      authors: "Oh, S., Cao, Y., Katz, A., & Zhao, J.",
      conference: "IEEE Frontiers in Education Conference",
      year: 2024,
      link: "https://doi.org/10.1109/FIE61694.2024.10893102",
    },
  ];

  return (
    <PublicationLayout title="Publications">
      <ul>
        {publications.map((pub, index) => (
          <li key={index}>
            <strong>{pub.authors}</strong> ({pub.year}).{" "}
            {pub.link ? (
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>
            ) : (
              pub.title
            )}{" "}
            <em>{pub.conference}</em>.
          </li>
        ))}
      </ul>
    </PublicationLayout>
  );
}
