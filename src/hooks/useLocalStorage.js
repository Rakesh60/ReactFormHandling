import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, seatData] = useState(initialData);
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      seatData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    //**Check wherther new data is Function or a normal argument */
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    seatData(newData);
  };
  return [data, updateLocalStorage];
}

// export default function myLocalStorage(key,initialData) {third}
