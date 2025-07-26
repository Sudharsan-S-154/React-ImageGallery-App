  import React, { useEffect, useState } from "react";
  import Pic1 from "./assests/caroseul-1.jpg";
  import Pic2 from "./assests/caroseul-2.jpg";
  import Pic3 from "./assests/caroseul-3.jpg";
  import Pic4 from "./assests/caroseul-4.jpg";

  function Main() {
    const images = [Pic1, Pic2, Pic3, Pic4];
    const [currentPic, setCurrentPic] = useState(0);
    const caroseuDialogue = [
      {
        smallText: "From pictures to moments",
        bigText: "Turn your photos into art",
      },
      {
        smallText: "Capture the vibe",
        bigText: "Make every shot unforgettable",
      },
      {
        smallText: "Every click tells a story",
        bigText: "Your memories, reimagined",
      },
      {
        smallText: "Frame your favorites",
        bigText: "Art that speaks for you",
      },
    ];

    useEffect(() => {
      setInterval(() => {
        currentPic === images.length - 1
          ? setCurrentPic(0)
          : setCurrentPic(currentPic + 1);
      }, 5000);
    }, []);

    const caroseul1 = {
      backgroundImage: `url(${images[currentPic]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      heigth: "100%",
      width: "100%",
      opacity: "",
    };

    const caroseulSlide = () => {
      return images.map((_, index) => (
        <span
          key={index}
          className={`point ${currentPic === index && "currentPic"}`}
          onClick={() => {
            setCurrentPic(index);
          }}
        ></span>
      ));
    };

    return (
      <div className="main">
        <div className="caroseuls" style={caroseul1}>
          <div className="caroseulText">
            <h3 className="smallText">{caroseuDialogue[currentPic].smallText}</h3>
            <h3 className="bigText">{caroseuDialogue[currentPic].bigText}</h3>
            <div className="btnSlide">
              <button className="exploreBtn">Explore more</button>
              <div>{caroseulSlide()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Main;
