import React from 'react';
import {ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from 'recharts';

const ComposedChartComponent = () => {

    const data = [
        {name: 'January', sales: 4000, profit: 2400},
        {name: 'February', sales: 3000, profit: 1398},
        {name: 'March', sales: 5000, profit: 398},
        {name: 'January', sales: 4000, profit: 2400},
        {name: 'February', sales: 3000, profit: 1398},
        {name: 'March', sales: 5000, profit: 398},
        {name: 'January', sales: 4000, profit: 2400},
        {name: 'February', sales: 3000, profit: 1398},
        {name: 'March', sales: 5000, profit: 398},
        {name: 'January', sales: 4000, profit: 2400},
        {name: 'February', sales: 3000, profit: 1398},
        {name: 'March', sales: 5000, profit: 398},
    ];

    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <ComposedChart data={data}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <CartesianGrid strokeDasharray={"3 3"}/>
                <Bar dataKey="sales" barSize={50} fill={"#413ea0"} />
                <Line type='monotne' dataKey={'profit'} stroke={'#ff7300'}/>
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default ComposedChartComponent;