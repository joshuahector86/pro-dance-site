import Page from "../../components/layout/page";
import headshot from "../../assets/dance_headshot.jpg";

const Home = () => {
  return (
    <Page>
      <section className="flex flex-col md:flex-row items-center gap-5">
        <div className="flex-1 flex justify-center">
          <img
            src={headshot}
            alt="Dance headshot"
            className="rounded-lg shadow max-w-xs w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome!
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Discover your passion for dance. Join our vibrant community, explore
            a variety of classes, and experience the joy of movement. Whether
            you’re a beginner or a seasoned dancer, there’s a place for you
            here.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.youtube.com/@dimitrihector256"
              target="blank"
              className="border rounded px-6 py-2 font-semibold hover:scale-105 transition"
            >
              View Youtube
            </a>
            <a
              href="https://www.instagram.com/dimkandel/"
              target="blank"
              className="border rounded px-6 py-2 font-semibold hover:scale-105 transition"
            >
              View Instagram
            </a>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Home;
