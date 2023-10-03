import { useState } from "react";
import { v4 as uuid } from "uuid";

import { AddCategoryForm } from "./components";

import "./App.css";

function App() {
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddCategory = (categorie: string) => {
    setCategories([categorie, ...categories]);
  };

  return (
    <>
      <h1>Gif Searcher</h1>
      <AddCategoryForm onAddCategorie={handleAddCategory} />
      <div>
        {categories.map((categorie) => (
          <div>
            <span key={uuid()}>{categorie}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
