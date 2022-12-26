import { Monster } from "../../App";
import "./card-list.style.css";
import Card from "../card/card.component";


type Monsters = {
  monsters: Monster[],
}

const CardList = ({monsters} : Monsters) => {
  return (
    <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
  )
}

export default CardList;
