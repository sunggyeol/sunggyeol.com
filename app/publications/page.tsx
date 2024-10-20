import PublicationLayout from "@/layouts/PublicationsLayout";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "Publications" });

export default function Page() {
  const publications = [
    {
      title:
        "Explore Public’s Perspectives on Generative AI in Computer Science (CS) Education: A Social Media Data Analysis",
      authors: "Oh, S., Cao, Y., Katz, A., & Zhao, J.",
      conference: "IEEE Frontiers in Education Conference",
      year: 2024,
      link: "https://2024.fie-conference.org/",
    },
  ];

  return (
    <PublicationLayout title="Publications">
      <ul>
        {publications.map((pub, index) => (
          <li key={index}>
            <strong>{pub.authors}</strong> ({pub.year}).{" "}
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              {pub.title}
            </a>
            . <em>{pub.conference}</em>.
          </li>
        ))}
      </ul>
    </PublicationLayout>
  );
}
