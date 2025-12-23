# School Canteen Web App 🍽️

A simple **School Canteen Management System** built with **React**, **Tailwind CSS**, and **localStorage**.  
This app allows you to manage snacks, students, and orders in a digital canteen environment.

---

## Features

- **Snack Management**
  - View all available snacks with prices and order counts.
  - Snack icons for easy recognition.
  - "Order Now" button to place orders.

- **Student Management**
  - Add new students with unique referral codes.
  - Track total spending of each student.
  - View detailed order history for each student.

- **Order System**
  - Place orders for students with selectable quantity.
  - Orders update snack popularity count and total student spending.
  - Orders stored in `localStorage` (no backend required).

- **Responsive UI**
  - Clean, modern, and mobile-friendly interface using Tailwind CSS.
  - Smooth transitions, hover effects, and interactive modals.

---

## Libraries / Tools Used

- **React** – Frontend library for building UI components.
- **Tailwind CSS** – Styling and responsive layout.
- **React Router DOM** – Page routing.
- **React Hook Form** – Form handling for students and orders.
- **Lucide React** – Icons for snacks, buttons, and UI elements.
- **localStorage** – Mock backend for storing students, snacks, and orders.

---

## Mock Data Approach

- Snacks and students are stored in `localStorage` to simulate a backend.
- On first load, default snack data is initialized:

```js
let snacks = [
  { id: 1, name: "Samosa", price: 10, ordersCount: 0 },
  { id: 2, name: "Sandwich", price: 30, ordersCount: 0 },
  ...
  { id: 16, name: "Cheese Toast", price: 25, ordersCount: 0 },
];