import React from 'react';
import {observer} from "mobx-react";
import userStore from '../stores/UserStore';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const UserChart = observer(() => {


    if (userStore.loading) {
        return <p>Loading....</p>
    }

    const data = userStore.users.map((el) => ({
        name: el.name,
        email: el.email.length,
    }))

    return (
        <ResponsiveContainer width={"100%"} height={500}>
            <BarChart data={data}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <CartesianGrid strokeDasharray={"3 3"}/>
                <Bar dataKey={'email'} fill={'#ff7300'}/>
            </BarChart>
        </ResponsiveContainer>
    );
})

export default UserChart;