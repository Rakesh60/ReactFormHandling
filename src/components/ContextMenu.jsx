import React from "react";

function ContextMenu({
  menuPosition,
  setPosition,
  setExpense,
  expenses,
  rowId,
  setFormData,
  setEditingRowID,
}) {
  if (!menuPosition.left) {
    return;
  }
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          console.log("editing");
          const { title, category, amount } = expenses.find((expense) => {
            return expense.id === rowId;
          });

          console.log(title, category, amount);
          setFormData({ title, category, amount });
          setEditingRowID(rowId);
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
