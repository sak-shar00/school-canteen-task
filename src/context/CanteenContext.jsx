import { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/api";

const CanteenContext = createContext();

export const CanteenProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const snackList = await api.getSnacks();
    const studentList = await api.getStudents();
    setSnacks(snackList);
    setStudents(studentList);
  }

  async function addStudent(name) {
    const newStudent = await api.createStudent(name);
    setStudents([...students, newStudent]);
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