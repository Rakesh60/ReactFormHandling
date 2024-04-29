import React, { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

function ExpenseTable({ expenses, setExpense, setFormData, setEditingRowID }) {
  const [position, setPosition] = useState({});
  const [filterdData, setQuery] = useFilter(expenses, (data) => data.category);
  const [rowId, setRowID] = useState("");
  const [sortCallback, setSortCallback] = useState(() => () => {});

  const totalAmount = filterdData.reduce(
    (accumulator, current) => accumulator + Number(current.amount),
    0
  );

  return (
    <>
      <ContextMenu
        menuPosition={position}
        setPosition={setPosition}
        setExpense={setExpense}
        expenses={expenses}
        rowId={rowId}
        setFormData={setFormData}
        setEditingRowID={setEditingRowID}
      />
      <table
        className="expense-table"
        onClick={() => {
          if (position.left) {
            setPosition({});
          }
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select
                onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
              >
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    setSortCallback(() => (a, b) => a.amount - b.amount);
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setSortCallback(() => (a, b) => b.amount - a.amount);
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterdData
            .sort(sortCallback)
            .map(({ id, title, category, amount }) => (
              <tr
                onContextMenu={(e) => {
                  e.preventDefault();
                  setPosition({ left: e.clientX, top: e.clientY });
                  setRowID(id);
                }}
                key={id}
              >
                <td>{title}</td>
                <td>{category}</td>
                <td>₹ {amount}</td>
              </tr>
            ))}

          {totalAmount > 0 ? (
            <tr>
              <th>Total</th>
              <th
                className="clear-sort"
                onClick={() => setSortCallback(() => () => {})}
              >
                Clear Sorting
              </th>
              <th>₹{totalAmount}</th>
            </tr>
          ) : (
            <tr>
              <th colSpan={3} style={{ textAlign: "center" }}>
                No Item is available
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default ExpenseTable;
