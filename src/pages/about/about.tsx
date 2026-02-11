import Page from "../../components/layout/page";
import headshot from "../../assets/headshot2.jpg";
import { aboutPageText } from "../../data/website-text-data";
import LinkButton from "../../components/ui/link-button";

const About = () => {
  return (
    <Page>
      <article className="max-w-3xl mx-auto py-12 px-4 md:px-0 text-white rounded-xl ">
        <div className="flex flex-col items-center mb-8">
          <img
            src={headshot}
            alt="Dimitri Hector headshot"
            className="rounded-lg shadow-lg w-40 h-60 object-cover mb-4 border-4 border-highlight"
          />
          <h1 className="text-4xl font-extrabold text-center text-highlight">
            The Man Behind The Movement
          </h1>
        </div>

        {aboutPageText.map((paragraph) => (
          <div key={paragraph.id}>
            <p>{paragraph.content}</p>
            <br />
          </div>
        ))}

        <div className="flex gap-4 mt-8 justify-center">
          <LinkButton href="/archive">To the Archive!</LinkButton>
          <LinkButton href="/work-history">To Work History!</LinkButton>
        </div>
      </article>
    </Page>
  );
};

export default About;
