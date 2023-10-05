import { Gif } from "../../types/Types";
import "./Card.styles.css";

interface CardProps {
  gif: Gif;
}

const Card = ({ gif: { id, title, url } }: CardProps) => (
  <div className="outer">
    <img className="photo" src={url} alt={id} />
    <span className="title">
      <strong>{title}</strong>
    </span>
  </div>
);

export default Card;
