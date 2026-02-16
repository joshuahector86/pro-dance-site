import Page from "../../components/layout/page";
import { aboutPageText } from "../../data/website-text-data";
import LinkButton from "../../components/ui/link-button";
import CustomHeading from "../../components/ui/custom-heading";

const About = () => {
  return (
    <Page>
      <article className=" container py-6">
        <CustomHeading
          className="mx-auto max-w-4xl mb-10"
          title="The Man Behind The Movement"
          subtitle="Learn more about Dimitri's journey"
        />

        {aboutPageText.map((paragraph) => (
          <div
            className={`mx-auto max-w-4xl flex flex-col md:flex-row md:gap-20 gap-5 md:mb-15 mb-10 items-center md:items-start ${
              paragraph.id === "about-page-2" ? "md:flex-row-reverse" : ""
            }`}
            key={paragraph.id}
          >
            <img
              src={paragraph.photo}
              alt={`Photo for ${paragraph.id}`}
              className="rounded-full shadow-lg w-60 h-60 object-cover"
            />
            <p>{paragraph.content}</p>
          </div>
        ))}

        <div className="flex gap-4 justify-center">
          <LinkButton href="/archive">To the Archive!</LinkButton>
          <LinkButton href="/work-history">To Work History!</LinkButton>
        </div>
      </article>
    </Page>
  );
};

export default About;
