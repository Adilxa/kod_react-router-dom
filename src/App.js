import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import SortbleList from "./components/SortableList";

const DraggableItem = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable-item",
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "none",
    padding: "10px",
    backgroundColor: "lightblue",
    cursor: "grab",
    width: "100px",
    textAlign: "center",
    borderRadius: "5px",
    userSelect: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      Drag me
    </div>
  );
};

const DropZone = () => {
  const { setNodeRef, isOver } = useDroppable({ id: "dropzone" });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: isOver ? "lightgreen" : "lightgray",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        marginTop: "20px",
      }}
    >
      Drop here
    </div>
  );
};

const App = () => {
  const handleDragEnd = event => {
    if (event.over && event.over.id === "dropzone") {
      alert("Item dropped successfully!");
    }
  };

  return (
    // <DndContext onDragEnd={handleDragEnd}>
    //   <DraggableItem />
    //   <DropZone />
    // </DndContext>
    <SortbleList />
  );
};

export default App;
