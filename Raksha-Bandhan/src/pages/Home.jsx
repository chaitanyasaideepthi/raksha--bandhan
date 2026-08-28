import Navbar from "../components/Navbar/Navbar";
import Special from "../components/Special/Special";
import Memories from "../components/Memories/Memories";
import Surprise from "../components/Surprise/Surprise";

function Home() {
  return (
    <>
      <Navbar />

      <section id="special">
        <Special />
      </section>

      <section id="memories">
        <Memories />
      </section>

      <section id="surprise">
        <Surprise />
      </section>
    </>
  );
}

export default Home;