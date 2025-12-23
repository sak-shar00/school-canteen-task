import { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/api";

const CanteenContext = createContext();

function getLocalData(key, defaultValue) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

function setLocalData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const CanteenProvider = ({ children }) => {
  const [snacks, setSnacks] = useState(() =>
    getLocalData("snacks", [])
  );

  const [students, setStudents] = useState(() =>
    getLocalData("students", [])
  );

  useEffect(() => {
    loadData();
  }, []);

  // ✅ ONLY LOAD SNACKS FROM API
  async function loadData() {
    if (snacks.length === 0) {
      const snackList = await api.getSnacks();
      setSnacks(snackList);
    }
  }

  // save snacks to localStorage
  useEffect(() => {
    setLocalData("snacks", snacks);
  }, [snacks]);

  // save students to localStorage
  useEffect(() => {
    setLocalData("students", students);
  }, [students]);

  async function addStudent(name) {
    const newStudent = await api.createStudent(name);
    setStudents(prev => [...prev, newStudent]);
  }

  async function orderSnack(data) {
    await api.placeOrder(
      data.studentId,
      data.snack,
      data.quantity
    );
    setStudents([...students]);
    setSnacks([...snacks]);
  }

  return (
    <CanteenContext.Provider
      value={{ snacks, students, addStudent, orderSnack }}
    >
      {children}
    </CanteenContext.Provider>
  );
};

export const useCanteen = () => useContext(CanteenContext);