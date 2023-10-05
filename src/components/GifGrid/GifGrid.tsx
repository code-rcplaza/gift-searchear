import { v4 as uuid } from "uuid";
import { Card } from "..";
import { Gif, GifsByCategory } from "../../types/Types";
import "./GifGrid.styles.css";

interface GifGridProps {
  gifsByCategory: GifsByCategory;
}

const GifGrid = ({ gifsByCategory: { category, gifs = [] } }: GifGridProps) => {
  return (
    <>
      <h3>{category}</h3>
      <div className="grid">
        {gifs.map((gif: Gif) => (
          <Card key={uuid()} gif={gif} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
