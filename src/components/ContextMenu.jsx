import React from "react";

function ContextMenu({ menuPosition, setPosition, setExpense, rowId }) {
  if (!menuPosition.left) {
    return;
  }
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          console.log("editing");
          setPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          console.log("deleting");
          setExpense((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}

export default ContextMenu;
