import { useState } from "react";
import { v4 as uuid } from "uuid";

import { AddCategoryForm, GifGrid } from "./components";

import { getGifs } from "./services/giphy";
import { Gif, GifsByCategory } from "./types/Types";

import "./App.css";

function App() {
  const [categories, setCategories] = useState<string[]>([]);

  const [gifsByCategoryArr, setGifsByCategory] = useState<GifsByCategory[]>([]);

  const handleAddCategory = async (category: string) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);

    const gifsObtained: Gif[] = await fetchGif(category);
    console.log(
      "🚀 ~ file: App.tsx:22 ~ handleAddCategory ~ gifsObtained:",
      gifsObtained
    );

    setGifsByCategory([
      {
        category: category,
        gifs: gifsObtained,
      },
      ...gifsByCategoryArr,
    ]);
  };

  const fetchGif = async (category: string) => {
    return getGifs(category, 10);
  };

  return (
    <>
      <h1>Gif Searcher</h1>
      <AddCategoryForm onAddCategory={handleAddCategory} />
      <section>
        {gifsByCategoryArr.map((category) => (
          <GifGrid key={uuid()} gifsByCategory={category} />
        ))}
      </section>
    </>
  );
}

export default App;
