import Page from "../../components/layout/page";
import headshot from "../../assets/dance_headshot.jpg";

const About = () => {
  return (
    <Page>
      <article className="max-w-3xl mx-auto py-12 px-4 md:px-0 text-white rounded-xl ">
        <div className="flex flex-col items-center mb-8">
          <img
            src={headshot}
            alt="Dimitri Hector headshot"
            className="rounded-full shadow-lg w-40 h-40 object-cover mb-4 border-4 border-highlight"
          />
          <h1 className="text-4xl font-extrabold text-center text-highlight">
            About Dimitri
          </h1>
        </div>
        <div className="prose prose-lg max-w-none mx-auto prose-headings:text-highlight prose-a:text-highlight prose-p:text-white">
          <p>
            From the moment Dimitri first stepped onto the dance floor, he knew
            movement would become his lifelong passion. Born with a natural
            sense of rhythm and a creative spark, Dimitri’s journey began in
            local studios and quickly grew to national stages.
          </p>
          <p>
            Over the years, Dimitri has honed his craft, blending classical
            technique with modern innovation. His performances are known for
            their emotional depth, storytelling, and technical precision.
            Whether captivating audiences at festivals or choreographing for
            award-winning productions, Dimitri’s dedication shines through every
            step.
          </p>
          <p>
            Beyond the spotlight, Dimitri is committed to inspiring others. He
            believes dance is more than movement—it’s a way to connect, express,
            and transform. Through teaching, mentoring, and sharing his journey
            online, Dimitri hopes to ignite the same passion in others that
            drives him every day.
          </p>
          <p>
            When he’s not dancing, Dimitri enjoys exploring music, collaborating
            with fellow artists, and traveling to discover new styles and
            cultures. His story is one of perseverance, creativity, and a
            relentless pursuit of excellence.
          </p>
        </div>
        <div className="flex gap-4 mt-8 justify-center">
          <a
            href="https://www.youtube.com/@dimitrihector256"
            target="blank"
            className="border border-highlight rounded px-5 py-2 font-semibold hover:bg-highlight hover:text-black transition text-white"
          >
            Watch Videos
          </a>
          <a
            href="https://www.instagram.com/dimkandel/"
            target="blank"
            className="border border-highlight rounded px-5 py-2 font-semibold hover:bg-highlight hover:text-black transition text-white"
          >
            Connect on Instagram
          </a>
        </div>
      </article>
    </Page>
  );
};

export default About;
