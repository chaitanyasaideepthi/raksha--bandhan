import "./hero.css";
import heroimage from "./assets/iamge/heroimage.png";
function Hero () {
    function ExploreOurMemories() {
        console.log("explore our memories");
    }
    function Surprise() {
        console.log("surprise");
    }
    return(
        <section className="Hero">
            <div className="details">
                <h1>Happy Raksha Bandhan</h1>
                <h2>Celebrating the beautiful bond between brothers and sisters.</h2>
                <p> A bond filled with love, memories, care, laughter,and countless unforgettable moments.</p>
                <button onClick={ExploreOurMemories}>ExploreOurMemories</button>
                <button onClick={Surprise}>Surprise</button>
            </div>
            <div className="hero-image">
                <img
                src={heroimage}
                alt="Brother and sister celebrating Raksha Bandhan"
                />
            </div>
        </section>
    );
}
export default Hero;