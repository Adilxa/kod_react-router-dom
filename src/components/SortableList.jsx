import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";

const SortableList = ({ id }) => {
    const { attributes, listeners, setNodeRef, transform } = useSortable({ id })


    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={{ padding: "10px", background: "lightgreen" }}>
            {id}
        </div>
    )
}


const SortbleList = () => {
    const items = ["element 1", "element 2", "element 3"];

    return (
        <SortableContext items={items}>
            {
                items.map((el) => (
                    <SortableList key={el} id={el} />
                ))
            }
        </SortableContext>
    )
}


export default SortbleList