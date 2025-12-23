let snacks = [
  { id: 1, name: "Samosa", price: 10, ordersCount: 0 },
  { id: 2, name: "Sandwich", price: 30, ordersCount: 0 },
  { id: 3, name: "Pizza Slice", price: 50, ordersCount: 0 },
  { id: 4, name: "Burger", price: 60, ordersCount: 0 },
  { id: 5, name: "French Fries", price: 25, ordersCount: 0 },
  { id: 6, name: "Cold Drink", price: 20, ordersCount: 0 },
  { id: 7, name: "Ice Cream", price: 35, ordersCount: 0 },
  { id: 8, name: "Pasta", price: 45, ordersCount: 0 },
  { id: 9, name: "Chicken Nuggets", price: 55, ordersCount: 0 },
  { id: 10, name: "Hot Dog", price: 40, ordersCount: 0 },
  { id: 11, name: "Momos", price: 35, ordersCount: 0 },
  { id: 12, name: "Spring Roll", price: 28, ordersCount: 0 },
  { id: 13, name: "Donut", price: 22, ordersCount: 0 },
  { id: 14, name: "Milkshake", price: 45, ordersCount: 0 },
  { id: 15, name: "Fruit Salad", price: 30, ordersCount: 0 },
  { id: 16, name: "Cheese Toast", price: 25, ordersCount: 0 },
];

let students = [];

export async function getSnacks() {
  return snacks;
}

export async function getStudents() {
  return students;
}

export async function createStudent(name) {
  const student = {
    id: Date.now(),
    name,
    referralCode: "REF" + Math.floor(Math.random() * 1000),
    orders: [],
    totalSpent: 0,
  };
  students.push(student);
  return student;
}

export async function placeOrder(studentId, snack, quantity) {
  const student = students.find(s => s.id === studentId);
  const amount = snack.price * quantity;

  student.orders.push({
    snackName: snack.name,
    quantity,
    amount,
  });

  student.totalSpent += amount;
  snack.ordersCount += quantity;
}