import { useEffect, useState } from "react";
import Card from "./Card";
import Score from "./Score";
import "../style/Grid.css";

export default function Game() {
  const [ids, setIds] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const selection = new Set();

    while (selection.size < 12) {
      const randomNumber = Math.floor(Math.random() * 151) + 1;
      selection.add(randomNumber);
    }

    setIds([...selection]);
  }, []);

  const handleClick = (_e, id) => {
    if (playedBefore(id)) {
      setBestScore(score > bestScore ? score : bestScore);
      setScore(0);
      setClicked([]);
    } else {
      setClicked([...clicked, id]);
      setScore(score + 1);
    }

    setIds(randomizeGrid(ids));
  };

  const playedBefore = (id) => {
    return clicked.includes(id);
  };

  const randomizeGrid = (array) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  return (
    <div>
      <Score score={score} bestScore={bestScore} />
      <div className="grid">
        {ids.map((id) => {
          return (
            <Card key={id} id={id} clickFunction={(e) => handleClick(e, id)} />
          );
        })}
      </div>
    </div>
  );
}
