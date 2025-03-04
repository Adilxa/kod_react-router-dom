import { Tooltip } from "@mantine/core";
import { observer } from "mobx-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import chartStore from "../stores/ChartStore";

const DynamicChartComponent = observer(() => {

    return (
        <LineChart width={1000} height={500} data={chartStore.data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="pv" stroke="#922d2d" />
        </LineChart>
    )
})

export default DynamicChartComponent;