import "./memories.css";

import "./Memories.css";

import childhoodImage from "../../assets/images/childhood.png.jpeg";
import festivalImage from "../../assets/images/festival.png";
import funImage from "../../assets/images/fun.jpeng.png";

function Memories() {
  return (
    <section className="memories">

      <h1>Beautiful Memories ❤️</h1>

      <p className="memories-subtitle">
        Every moment with you is a memory worth keeping.
      </p>

      <div className="memories-container">

        {/* Childhood Memory */}
        <div className="memory-card">
          <img
            src={childhoodImage}
            alt="Childhood memories"
          />

          <h2>Childhood Memories</h2>

          <p>
            Old childhood moments filled with fun, fights,
            laughter, and unforgettable memories.
          </p>

          <button>View Memory ❤️</button>
        </div>

        {/* Festival Memory */}
        <div className="memory-card">
          <img
            src={festivalImage}
            alt="Festival memories"
          />

          <h2>Festival Memory</h2>

          <p>
            Beautiful Raksha Bandhan celebrations and
            special moments together.
          </p>

          <button>View Memory ❤️</button>
        </div>

        {/* Fun Memory */}
        <div className="memory-card">
          <img
            src={funImage}
            alt="Fun memories"
          />

          <h2>Fun Memories</h2>

          <p>
            Special trips, jokes, games, and all the
            fun moments we shared together.
          </p>

          <button>View Memory ❤️</button>
        </div>

      </div>

    </section>
  );
}

export default Memories;