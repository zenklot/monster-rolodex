import "./card.style.css";
import { Monster } from "../../App";

export type CardProps = {
  monster: Monster,
};

const Card = ({ monster }: CardProps) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
