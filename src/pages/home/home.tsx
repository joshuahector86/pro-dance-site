import Page from "../../components/layout/page";
import headshot from "../../assets/headshot_adjusted.png";
import T_piece from "../../assets/thibaut_piece.jpg";
import LinkButton from "../../components/ui/link-button";
import bannerImg from "../../assets/dance_banner.jpg";
import CustomHeading from "../../components/ui/custom-heading";

const Home = () => {
  return (
    <Page>
      {/* Banner Image */}
      <div className="w-full flex justify-center mb-8">
        <img
          src={bannerImg}
          alt="Dance Banner"
          className="w-full max-h-125 object-cover rounded-lg shadow-lg"
        />
      </div>
      <section className="flex flex-col items-center gap-15 text-white ">
        <div className="flex-col flex md:flex-row items-center gap-5 justify-center">
          <div>
            <img
              src={headshot}
              alt="Dance headshot"
              className="rounded-full shadow max-w-sm aspect-square object-cover mx-auto"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center">
            <CustomHeading title="Welcome!" />
            <p className="text-lg md:text-lg max-w-xl">
              My name is Dimitri Hector and I am a passionate dancer and
              choreographer. I have had the privilege of performing on stages
              around the world, sharing my love for movement and storytelling
              through dance. My journey has been filled with incredible
              opportunities, from collaborating with world champions to creating
              my own unique style that blends various dance forms. I am
              dedicated to pushing the boundaries of dance and inspiring others
              through my work.
            </p>
          </div>
        </div>

        <div className="flex-col flex md:flex-row items-center gap-5 justify-center">
          <div>
            <CustomHeading title="Current Work" />

            <p className="text-lg md:text-lg max-w-xl">
              Dimitri is currently involved with New York Dance Project for the
              2025 - 2026 season, performing as a male soloist and debuting new
              works by choreographers such as Maleek Washing, Clifford Williams,
              Davis Robertson, and others. The company’s repertoire also
              features pieces by Roger Joffrey, Robbert Battle, Gerald Arpino,
              and more. Alongside his work with NYDP, Dimitri pursues his own
              choreographic projects and regularly appears as a guest artist
              with various companies in New York City. Beyond concert dance, he
              is a world-renowned West Coast Swing professional, traveling
              internationally to teach, judge, and compete.
            </p>
          </div>
          <div className="order-first md:order-last">
            <img
              src={T_piece}
              alt="Dance Banner"
              className="rounded-full shadow max-w-sm aspect-square object-cover mx-auto"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <LinkButton
            href="https://www.youtube.com/@dimitrihector256"
            target="_blank"
          >
            Youtube
          </LinkButton>

          <LinkButton
            href="https://www.instagram.com/dimkandel/"
            target="_blank"
          >
            Instagram
          </LinkButton>
        </div>
        <blockquote className="bg-white/10 border-l-4 border-accent-cool text-lg italic text-white px-6 py-4 rounded-md shadow max-w-2xl mx-auto">
          "For me the true essence of dance is in community. We strive to tell
          our stories in a way that trancends even the limitations of speech.
          While I do dance for my own selfish reasons, I believe that dance is
          meant to be shared and experienced with others. Dance is best shown
          when unity and connection are achieved."
          <br />- Dimitri Hector
        </blockquote>
      </section>
    </Page>
  );
};

export default Home;
