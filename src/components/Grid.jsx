import { useState } from "react";
import Card from "./Card";
import "../style/Grid.css";

export default function Grid() {
  const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [clicked, setClicked] = useState([]);

  const randomizeGridLayout = () => {
    let newArray = [...ids];
    let currentIndex = newArray.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[currentIndex],
      ];
    }

    setIds(newArray);
  };

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
