import React from "react";

function ContextMenu({
  menuPosition,
  setPosition,
  setExpense,
  expenses,
  rowId,
  setFormData,
}) {
  if (!menuPosition.left) {
    return;
  }
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          console.log("editing");
          const fileterdData = expenses.filter(
            (expense) => expense.id == rowId
          );
          console.log(fileterdData);
          // setFormData({title,category,amount});
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
