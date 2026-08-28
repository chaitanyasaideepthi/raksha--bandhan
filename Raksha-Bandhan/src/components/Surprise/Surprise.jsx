import { useState } from "react";
import "./surprise.css";
import giftbox from "../../assets/images/gift.png";
import image from "../../assets/images/heart.png.jpeg";

function Surprise() {
  const [giftOpen, setGiftOpen] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);

  const handleGiftOpen = () => {
    setGiftOpen(true);
  };

  const handleLetterOpen = () => {
    setLetterOpen(true);
  };

  return (
    <section className="surprise-section">

      {!giftOpen && (
        <div className="gift-section">
          <h2>🎁 I Have a Surprise for You!</h2>

          <img
            src={giftbox}
            alt="Gift Box"
            className="gift-image"
          />

          <button onClick={handleGiftOpen}>
            Click to Open 🎁
          </button>
        </div>
      )}

      {/* 💌 Hidden Letter */}
      {giftOpen && !letterOpen && (
        <div className="letter-section">

          <div className="confetti">
            🎊 🎉 🎊 🎉 🎊
          </div>

          <h1>🎉 Happy Raksha Bandhan bunny! 🎉</h1>

          <div className="envelope">
            <div className="image">
              <img
              src={image}
              alt="image"
              />
            </div>
          </div>

          <h2>For My Dear bunny ❤️</h2>

          <button onClick={handleLetterOpen}>
            Open My Letter 💌
          </button>

        </div>
      )}

      {/* ❤️ Final Surprise */}
      {letterOpen && (
        <div className="final-surprise">

          {/* Confetti */}
          <div className="confetti">
            🎊 🎉 🎊 🎉 🎊 🎉 🎊
          </div>

          <h1>🎉 Happy Raksha Bandhan bunny! 🎉</h1>

          <div className="heart-container">
            <span>❤️</span>
            <span>💖</span>
            <span>💕</span>
            <span>❤️</span>
            <span>💗</span>
            <span>💝</span>
          </div>

          <div className="letter-message">

            <h2>💌 My Dear  bunny</h2>

            <p>
              You are not just my thammudu,
              you are my forever best friend. ❤️
            </p>

            <p>
              We may fight, tease, and annoy each other,
              but deep down, our bond will always be special. 💕
            </p>

            <p>
              Thank you for always being there,
              for making me smile, and for giving me
              so many beautiful memories. 🫂
            </p>

            <p>
              No matter where life takes us,
              I will always be there for you.
              You will always have a special place
              in my heart. ❤️
            </p>

            <p>
              I’m truly lucky to have you as my brother. 💝
            </p>

            <h2>
              Happy Raksha Bandhan,
              bunny! 🎀❤️
            </h2>

            <h3>
              Forever my little brother,
              forever my favorite person. 🥰
            </h3>

          </div>

        </div>
      )}

    </section>
  );
}

export default Surprise;