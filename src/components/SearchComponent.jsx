import React, { useState } from "react";
import Fuse from "fuse.js";

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
];

const options = {
    keys: ['title', 'author'],
    threshold: 0.3
}

const fuse = new Fuse(books, options);

const SearchComponent = () => {

    const [query, setQuery] = useState('');
    const results = query ? fuse.search(query).map((el) => el.item) : books;

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search...." />
            <ul>
                {
                    results.map((el) => <li key={el.title}>{el.title} - {el.author}</li>)
                }
            </ul>
        </div>
    )

}


export default SearchComponent;