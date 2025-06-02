import { useEffect, useState } from "react";
import "../style/Card.css";

export default function Card({id}) {
  const [data, setData] = useState({});
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  const fetchData = () => {
    fetch(url + id)
      .then(response => response.json())
      .then(data => setData(data));
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <div className="card">
      <img src={imgUrl + id + ".png"}></img>
      <h2>{data.name}</h2>
    </div>
  )
}