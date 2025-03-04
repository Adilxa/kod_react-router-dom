import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwithcer from "./components/LanguageSwitcer";
import Fuse from "fuse.js";
import SearchComponent from "./components/SearchComponent";
import StoreComponent from "./components/StoreComponent";

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
];

const books2 = [
  { title: "1984", author: { name: "George Orwell" } },
  { title: "Brave New World", author: { name: "Aldous Huxley" } },
];

const App = () => {
  const options = {
    // keys: ["title", "author.name"],
    keys: [
      {
        name: "title",
        weight: 0.7,
      },
      {
        name: "author",
        weight: 0.3,
      },
    ],
    threshould: 0.1,
  };

  const fuse = new Fuse(books, options);

  const result = fuse.search(".");

  console.log(result);

  return <StoreComponent />;
};

export default App;
