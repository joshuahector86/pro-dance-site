import Page from "../../components/layout/page";
import headshot from "../../assets/dance_headshot.jpg";

const Home = () => {
  return (
    <Page>
      <section className="flex flex-col md:flex-row items-center gap-5  text-white">
        <div className="flex-1 flex justify-center">
          <img
            src={headshot}
            alt="Dance headshot"
            className="rounded-lg shadow max-w-lg w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-highlight">
            Welcome!
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            My name is Dimitri Hector and I am a passionate dancer and
            choreographer. I have had the privilege of performing on stages
            around the world, sharing my love for movement and storytelling
            through dance. My journey has been filled with incredible
            opportunities, from collaborating with world champions to creating
            my own unique style that blends various dance forms. I am dedicated
            to pushing the boundaries of dance and inspiring others through my
            work.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.youtube.com/@dimitrihector256"
              target="blank"
              className="border border-highlight rounded px-6 py-2 font-semibold hover:bg-highlight hover:text-black transition text-white"
            >
              Youtube
            </a>
            <a
              href="https://www.instagram.com/dimkandel/"
              target="blank"
              className="border border-highlight rounded px-6 py-2 font-semibold hover:bg-highlight hover:text-black transition text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Home;
