import { observer } from "mobx-react";
import chartStore from "../stores/ChartStore";

const UpdateBtn = observer(() => {
    const handleUpdate = () => {
        const newData = [
            { name: 'Page A', uv: Math.random() * 5000, pv: Math.random() * 5000 },
            { name: 'Page B', uv: Math.random() * 5000, pv: Math.random() * 5000 },
            { name: 'Page C', uv: Math.random() * 5000, pv: Math.random() * 5000 },
            { name: 'Page D', uv: Math.random() * 5000, pv: Math.random() * 5000 },
            { name: 'Page E', uv: Math.random() * 5000, pv: Math.random() * 5000 },

        ];
        chartStore.updateData(newData);
    };

    return (
        <button onClick={handleUpdate}>Обновить данные</button>
    )
})

export default UpdateBtn;