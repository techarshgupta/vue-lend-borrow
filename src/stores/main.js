import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    counter: 0,
    transactions: [
      {
        id: "gvrg1",
        user: "Harsh Gupta",
        type: {
          label: "Borrows",
          value: "debit",
        },
        date: "2022-06-22",
        reason: "test",
        amount: "12343",
        status: "unpaid",
      },
      {
        id: "e7tln",
        user: "Harsh Gupta",
        type: {
          label: "Borrows",
          value: "debit",
        },
        date: "2022-06-22",
        reason: "test",
        amount: "12343",
        status: "unpaid",
      },
      {
        id: "wzppw",
        user: "Harsh Gupta",
        type: {
          label: "Borrows",
          value: "debit",
        },
        date: "2022-06-22",
        reason: "test",
        amount: "12343",
        status: "unpaid",
      },
      {
        id: "1pny8",
        user: "Harsh Gupta",
        type: {
          label: "Borrows",
          value: "debit",
        },
        date: "2022-06-22",
        reason: "test",
        amount: "12343",
        status: "unpaid",
      },
      {
        id: "iwq4w",
        user: "Harsh Gupta",
        type: {
          label: "Borrows",
          value: "debit",
        },
        date: "2022-06-22",
        reason: "test",
        amount: "12343",
        status: "unpaid",
      },
      {
        id: "3hrzy",
        user: "Harsh Gupta",
        type: {
          label: "Borrows",
          value: "debit",
        },
        date: "2022-06-22",
        reason: "test",
        amount: "12343",
        status: "unpaid",
      },
      {
        id: "4mwxb",
        user: "Test Gupta",
        type: {
          label: "Lendes",
          value: "credit",
        },
        date: "2022-06-22",
        reason: "test",
        amount: "12343",
        status: "paid",
      },
    ],
    currenncy: {
      label: "usd",
      icon: "$",
    },
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getTransactions: (state) => state.transactions,
    getCurrency: (state) => state.currenncy,
  },
  actions: {
    increment() {
      this.counter++;
    },
    addTransaction(data) {
      this.transactions.push(data);
    },
    settlePay(id) {
      const idx = this.transactions.findIndex((tr) => tr.id === id);
      this.transactions[idx].status = "paid";
      this.transactions[idx].type = {
        label: "Lendes",
        value: "credit",
      };
    },
    setCurrency(val) {
      this.currenncy = val;
    },
  },
  persist: true,
});
