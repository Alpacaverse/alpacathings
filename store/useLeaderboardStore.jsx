import { create } from "zustand";

export const useLeaderboardStore = create((set) => ({
  users: [
    {
      key: 0,
      rank: 1,
      name: "Alpaca",
      image: "./alpacaverse.png",
      points: 420,
    },
    {
      key: 1,
      rank: 2,
      name: "John Doe",
      image: "./profile.png",
      points: 380,
    },
    {
      key: 2,
      rank: 3,
      name: "Recycler Jane",
      image: "./recycling.png",
      points: 330,
    },
    {
      key: 3,
      rank: 4,
      name: "Sleeping Beauty",
      image: "./anime.jpeg",
      points: 250,
    },
    {
      key: 4,
      rank: 5,
      name: "Mr. Money Bags",
      image: "./dollar.png",
      points: 200,
    },
  ],
  setUsers: (users) => set({ users: users }),
}));
