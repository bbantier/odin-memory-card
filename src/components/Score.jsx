import "../style/Score.css";

export default function Score({score, bestScore}) {
  return (
    <div className="score-board">
      <span><h2>Score: </h2><p className="score-p">{score}</p></span>
      <span><h2>Best Score: </h2><p className="score-p">{bestScore}</p></span>
    </div>
  )
}