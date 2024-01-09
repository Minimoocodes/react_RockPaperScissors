import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

const choices = {
  rock: {
    item: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  paper: {
    item: "paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL.jpg",
  },
  scissors: {
    item: "scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFpOjtHuzb1DWEJZ2ye2D4YFckyKYuMoA6w&usqp=CAU",
  },
};

function App() {
  const [showUserSelect, setShowUserSelect] = useState(null);
  const [showComputerSelect, setShowComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState(null);
  let computerResult = null;

  const play = (choice) => {
    let userSelect = choices[choice].item;
    let computerSelect = choices[computerPlay()].item;
    setShowUserSelect(choices[userSelect].img); // let's remember how to connect the 매개변수 to the choices variable.
    setShowComputerSelect(choices[computerSelect].img);
    console.log("user: ", userSelect, "computer: ", computerSelect);
    resultCalc(userSelect, computerSelect);
  };

  const computerPlay = () => {
    let choicesArray = Object.keys(choices);
    let randomIndex = Number(Math.floor(Math.random() * choicesArray.length));
    let computerChoice = choicesArray[randomIndex];
    return computerChoice;
  };

  const resultCalc = (user, computer) => {
    if (user === computer) {
      setUserResult("Tie");
    } else if (user === "rock") {
      if (computer === "paper") {
        setUserResult("Lost");
      } else {
        setUserResult("Won");
      }
    } else if (user === "paper") {
      if (computer === "scissors") {
        setUserResult("Lost");
      } else {
        setUserResult("Won");
      }
    } else if (user === "scissors") {
      if (computer === "rock") {
        setUserResult("Lost");
      } else {
        setUserResult("Won");
      }
    }
    computerResultCalc(userResult);
    console.log("computer: ", computerResult);
  };

  const computerResultCalc = (userResult) => {
    if (userResult === "Tie") {
      return (computerResult = "Tie");
    } else if (userResult === "Won") {
      return (computerResult = "Lost");
    } else {
      return (computerResult = "Won");
    }
  };

  return (
    <div className="main">
      <div className="game_field">
        <Box player="You" choice={showUserSelect} result={userResult} />
        <Box
          player="Computer"
          choice={showComputerSelect}
          result={computerResult}
        />
      </div>
      <h2>{userResult}</h2>
      <div className="buttons">
        <button onClick={() => play("rock")}>
          <img
            className="icons"
            src="https://banner2.cleanpng.com/20180623/cyi/kisspng-emoji-raised-fist-ethereum-iphone-rock-paper-scissors-emoji-5b2e9fecc66b01.5488948715297822528127.jpg"
            alt="rock"
          />
        </button>
        <button onClick={() => play("paper")}>
          <img
            className="icons"
            src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/raised-hand.png"
            alt="paper"
          />
        </button>
        <button onClick={() => play("scissors")}>
          <img
            className="icons"
            src="https://symbl-world.akamaized.net/i/webp/35/a3401a15f085c6ac84b0b9584a88eb.webp"
            alt="scissors"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
