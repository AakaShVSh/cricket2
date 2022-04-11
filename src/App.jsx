import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   const [score,setscore] = useState(76)
   const [wicket,setwicket] = useState(2);
   const [ball,setball] = useState(50);
   const [show,setshow] = useState("");
  const scorehandler = (value) => {
      
    setscore(score+value)
  }
  const wickethandler = (value) => {
      
    setwicket(wicket+value)
  }
  const ballhandler = (value) => {
      
    setball(ball+value)
  }
  const showhandler = (value) => {
      
    setshow(value)
  }
  showhandler("India won")
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {score}
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {wicket}
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              ball
            }
          </h1>
        </div>
      </div>
       
      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => {
          scorehandler(1)
        }}>Add 1</button>
        <button className="addScore4" onClick = {() => {
          scorehandler(4);
        }}>Add 4</button>
        <button className="addScore6" onClick={() => {
          scorehandler(6)
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => {
            wickethandler(1);
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => {
          ballhandler(1);
        }}>Add 1</button>
      </div>
     
  
 <h1 id = "show">{show}</h1>
 
    
    </div>
  );
}

export default App;
