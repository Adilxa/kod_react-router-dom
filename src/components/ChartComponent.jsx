import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
    { id: 1, product: "Apple", amount: 10, data: "2024-10-10" },
    { id: 2, product: "Apple", amount: 20, data: "2024-10-10" },
    { id: 3, product: "Apple", amount: 10, data: "2024-10-10" },
    { id: 4, product: "Apple", amount: 40, data: "2024-10-10" },
    { id: 5, product: "Apple", amount: 10, data: "2024-10-10" },
    { id: 5, product: "Apple", amount: 70, data: "2024-10-10" }
];

const SimpleLineChart = () => (
    <LineChart width={1000} height={500} data={data}>
        <XAxis dataKey="product" />
        <YAxis dataKey="data" />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="amount" stroke="#922d2d" />
    </LineChart>
);

export default SimpleLineChart; 