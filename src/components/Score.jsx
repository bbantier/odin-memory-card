import "../style/Score.css";

export default function Score() {
  return (
    <div className="score-board">
      <span><h2>Score: </h2><p className="score-p">7</p></span>
      <span><h2>Best Score: </h2><p className="score-p">12</p></span>
    </div>
  )
}