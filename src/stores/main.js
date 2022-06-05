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
    users: [
      { id: "5e4xp", label: "Harsh", email: "246harsh@gmail.com" },
      { id: "4b19j", label: "harsh gupta", email: "246harsh@gmail.com" },
      { id: "znrrx", label: "Joh Doe", email: "test@gmail.com" },
      { id: "zpk3h", label: "Milesa", email: "test1@gmail.com" },
    ],
    groups: [
      {
        id: "5e4xp",
        name: "Site Workers",
        type: "Constructions",
        status: "active",
      },
      {
        id: "4b19j",
        name: "Electricians",
        type: "Technicals",
        status: "active",
      },
      { id: "znrrx", name: "Designers", type: "Engineers", status: "inactive" },
      {
        id: "zpk3h",
        name: "Site interiors",
        type: "Interiors",
        status: "inactive",
      },
    ],
    activities: [
      {
        type: "group",
        title: "You created group",
        date: "2022-06-05",
      },
      {
        type: "group",
        title: "You added people in group",
        date: "2022-06-05",
      },
      {
        type: "credit",
        title: "You settled amount",
        amount: "1234",
        date: "2022-06-05",
      },
      {
        type: "debit",
        title: "You added transaction",
        amount: "1232",
        date: "2022-06-05",
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getTransactions: (state) => state.transactions,
    getCurrency: (state) => state.currenncy,
    getUsers: (state) => state.users,
    getGroups: (state) => state.groups,
    getActivity: (state) => state.activities,
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
    addUser(data) {
      this.users.push(data);
    },
    addGroup(data) {
      this.groups.push(data);
    },
    addActivity(data) {
      this.activities.push(data);
    },
  },
  persist: true,
});
