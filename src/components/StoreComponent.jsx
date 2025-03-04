import React, { useState } from "react";
import Fuse from "fuse.js";

const books = [
    { name: 'iphone', type: 'mobile' },
    { name: 'samsung', type: 'mobile' },
    { name: 'xiaomi', type: 'mobile' },
    { name: 'vivo', type: 'mobile' },
    { name: 'mac book 10', type: 'laptop' },
    { name: 'Acer', type: 'laptop' },
    { name: 'Asus', type: 'laptop' }
];

const options = {
    keys: [{
        name: 'name',
        weight: 0.1
    }, {
        name: 'type',
        weight: 0.9
    }],
    threshold: 0.3
}

const fuse = new Fuse(books, options);

const StoreComponent = () => {

    const [query, setQuery] = useState('');
    const results = query ? fuse.search(query).map((el) => el.item) : books;

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search...." />
            <ul>
                {
                    results.map((el) => <li key={el.name}>{el.name} - {el.type}</li>)
                }
            </ul>
        </div>
    )

}


export default StoreComponent;