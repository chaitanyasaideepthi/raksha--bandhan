import "./special.css";
import image from "../../assets/images/brothersistertogether.png.jpeg";

function Special() {
    function sendMyLove() {
        console.log("Send My Love");
    }

    return (
        <section className="special">

            <div className="special-section">

                <h1>A Special Bond ❤️</h1>

                <h2>
                    More than a brother and sister, we are best friends forever.
                </h2>

                <p>
                    No matter how much we fight or tease each other, our bond
                    will always remain special. You are someone I can always
                    count on, through every happy and difficult moment.
                </p>

                <ul className="special-points">
                    <li>Always there for each other</li>
                    <li>Sharing laughter and memories</li>
                    <li>Supporting each other's dreams</li>
                    <li>A bond that grows stronger every year</li>
                </ul>

                <button onClick={sendMyLove}>
                    Send My Love ❤️
                </button>

            </div>

            <div className="special-image">
                <img
                    src={image}
                    alt="Brother and sister together"
                />
            </div>

        </section>
    );
}

export default Special;