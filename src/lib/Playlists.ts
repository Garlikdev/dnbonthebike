interface PlaylistItem {
  title: string;
  time: number;
  url: string;
}

interface Playlist {
  latest: boolean;
  date: string;
  videoId: string;
  url: string;
  name: string;
  items: PlaylistItem[];
}

const playlists: Playlist[] = [
  {
    latest: true,
    date: "19.7.2024",
    videoId: "K0pdUFP84Jk",
    url: "https://www.youtube.com/watch?v=K0pdUFP84Jk",
    name: "Frankfurt",
    items: [
      {
        time: 0,
        title: "Benson Boone - Slow It Down (DRZ EDIT)",
        url: "",
      },
      { time: 192, title: "Crystal Clear - Serious Sound", url: "" },
    ],
  },
  {
    latest: false,
    date: "13.6.2024",
    videoId: "V_ERm18dBCY",
    url: "https://youtu.be/V_ERm18dBCY",
    name: "Switzerland",
    items: [{ time: 0, title: "Work in progress", url: "" }],
  },
  {
    latest: false,
    date: "27.5.2024",
    videoId: "SZGyi9km_6E",
    url: "https://youtu.be/SZGyi9km_6E",
    name: "Darwin",
    items: [{ time: 0, title: "Work in progress", url: "" }],
  },
  {
    latest: false,
    date: "4.4.2024",
    videoId: "RqimBw6uTWg",
    url: "https://www.youtube.com/watch?v=RqimBw6uTWg",
    name: "Bristol",
    items: [{ time: 0, title: "Work in progress", url: "" }],
  },
  {
    latest: false,
    date: "7.3.2024",
    videoId: "shzJxoNBF5M",
    url: "https://youtu.be/shzJxoNBF5M",
    name: "Southampton",
    items: [{ time: 0, title: "Work in progress", url: "" }],
  },
];

export default playlists;
