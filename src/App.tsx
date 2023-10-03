import { useState } from "react";
import { v4 as uuid } from "uuid";

import { AddCategoryForm } from "./components";

import "./App.css";

function App() {
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddCategory = (category: string) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>Gif Searcher</h1>
      <AddCategoryForm onAddCategory={handleAddCategory} />
      <div>
        {categories.map((category) => (
          <div>
            <span key={uuid()}>{category}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
