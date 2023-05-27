import { create } from "zustand";

function randomDateLocaleString() {
  let date = new Date();
  let random = Math.floor(Math.random() * 1000);
  date.setDate(date.getDate() - random);
  return date.toLocaleString();
}

export const useTransactionHistoryStore = create((set) => ({
  transactions: [
    {
      key: 0,
      name: "T-Shirt (Navy Blue)",
      category: "Clothes",
      date: new Date().toLocaleString(),
      status: "PENDING EVALUATION - CASH IN",
      colour: ["orange.600", "orange.400"],
      value: 4,
    },
    {
      key: 1,
      name: "Rice Cooker",
      category: "Electronics",
      date: randomDateLocaleString(),
      status: "ITEM PURCHASED - CASH OUT",
      colour: ["blue.600", "blue.400"],
      value: 25,
    },
    {
      key: 2,
      name: "Glass Bottles x25",
      category: "Glass",
      date: randomDateLocaleString(),
      status: "APPROVED - CASH IN",
      colour: ["green.600", "green.400"],
      value: 5.6,
    },
    {
      key: 3,
      name: "Newspapers x10",
      category: "Mix Paper",
      date: randomDateLocaleString(),
      status: "REJECTED - CASH IN",
      colour: ["red.600", "red.400"],
      value: 2.2,
    },
    {
      key: 4,
      name: "Plastic Bottles x5",
      category: "Plastic",
      date: randomDateLocaleString(),
      status: "APPROVED - CASH IN",
      colour: ["green.600", "green.400"],
      value: 1.1,
    },
    {
      key: 5,
      name: "Plastic Bottles x2",
      category: "Plastic",
      date: randomDateLocaleString(),
      status: "APPROVED - CASH IN",
      colour: ["green.600", "green.400"],
      value: 0.7,
    },
  ],
  setTransactions: (transactions) => set({ transactions: transactions }),
}));
