import { useEffect, useState } from "react";
import Card from "./Card";
import "../style/Grid.css";

export default function Grid() {
  const [ids, setIds] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    const selection = new Set();

    while (selection.size < 12) {
      const randomNumber = Math.floor(Math.random() * 151) + 1;
      selection.add(randomNumber);
    }

    setIds([...selection]);

  }, []);

  const handleClick = (_e, id) => {
    setClicked([...clicked, id]);
  };

  return (
    <div className="grid">
      {ids.map((id) => {
        return <Card key={id} id={id} clickFunction={(e) => handleClick(e, id)} />;
      })}
    </div>
  );
}
