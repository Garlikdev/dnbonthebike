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
    name: "Germany - Frankfurt",
    items: [
      {
        time: 0,
        title: "Benson Boone - Slow It Down (DRZ EDIT)",
        url: "",
      },
      { time: 192, title: "Crystal Clear - Serious Sound", url: "" },
      { time: 406, title: "Selecta J-Man - Cry no more", url: "" },
      { time: 619, title: "RJD X G-Class X Darko - Boom Selekky", url: "" },
      { time: 918, title: "Deep Notion - Something About You", url: "" },
      { time: 1045, title: "DRS - I Will ft Patife & Vangeliez", url: "" },
      { time: 1216, title: "Daft Punk - One More Time (??? Remix)", url: "" },
      { time: 1304, title: "SpectraSoul - Second Chance", url: "" },
      {
        time: 1400,
        title: "Serial Killaz - Lovely Woman (??? Remix)",
        url: "",
      },
      { time: 1528, title: "Unknown", url: "" },
      {
        time: 1608,
        title: "RJD X G-Class X Darko - Boom Selekky INTRO",
        url: "",
      },
      { time: 1652, title: "Unknown", url: "" },
      {
        time: 1750,
        title: "Formula & Drowzee - PA Systematic (Bennie Remix)",
        url: "",
      },
      { time: 1902, title: "Aries - Not so bad", url: "" },
      { time: 2051, title: "Crystal Clear - Madhouse", url: "" },
      {
        time: 2200,
        title: "Damian Marley - Welcome to Jamrock(London) ???",
        url: "",
      },
      {
        time: 2340,
        title: "Pola & Bryson, DJ Marky & IYAMAH - Be There",
        url: "",
      },
      { time: 2538, title: "Crystal Clear - Star Studded", url: "" },
      { time: 2649, title: "Selecta J-Man - Dance With Me", url: "" },
      { time: 2883, title: "???", url: "" },
      {
        time: 3010,
        title: "Spice - So Mi Like It (BURT COPE BOOTLEG) VIP",
        url: "",
      },
      { time: 3117, title: "Serum & Voltage - Mission Control", url: "" },
      { time: 3202, title: "Juice Wrld - Be Fine (Upgrade Bootleg)", url: "" },
      {
        time: 3395,
        title: "Route 94 - My Love (feat. Jess Glynne) [Sigma Remix]",
        url: "",
      },
      { time: 3460, title: "Sub Zero & Majistrate - Zero Tolerance", url: "" },
      {
        time: 3670,
        title: "Eliza Rose - B.O.T.A - Muted Hue Bootleg",
        url: "",
      },
      { time: 3790, title: "Aries - Herbsmoke (Visionary Remix)", url: "" },
      { time: 3864, title: "Formula & Jenks - Cash Grab", url: "" },
      {
        time: 3950,
        title: "Benny Benassi - Satisfaction (FORBIDDEN Edit)",
        url: "",
      },
      { time: 3931, title: "Selecta J-Man & Kiko Bun - Not Me", url: "" },
      { time: 4255, title: "Formula - Vowels", url: "" },
      {
        time: 4361,
        title: "Wilkinson - Take You Higher blended with unknown",
        url: "",
      },
      { time: 4519, title: "Formula, Jamezy, 4K - Puss In Boots", url: "" },
      {
        time: 4691,
        title: "Selecta J-Man & MC Spyda - No Sound Can Test",
        url: "",
      },
      { time: 4775, title: "Chase & Status - No Problem", url: "" },
      { time: 4821, title: "Prodigy - Voodoo People Delta Heavy", url: "" },
      { time: 4946, title: "Formula - So Lost (Formula Remix)", url: "" },
      {
        time: 3972,
        title: "The Drop - Looking To The Sky (Aries & Kelvin 373 Remix)",
        url: "",
      },
      { time: 4111, title: "Sikoti - Say It Right", url: "" },
      { time: 4223, title: "Deep Notion - Hands Up", url: "" },
      { time: 4330, title: "Selecta J-Man - OG Rudeboy", url: "" },
      { time: 4534, title: "Hedex - No More Fighting", url: "" },
    ],
  },
  {
    latest: false,
    date: "13.6.2024",
    videoId: "V_ERm18dBCY",
    url: "https://youtu.be/V_ERm18dBCY",
    name: "Switzerland - Zurich",
    items: [{ time: 0, title: "Work in progress", url: "" }],
  },
  {
    latest: false,
    date: "27.5.2024",
    videoId: "SZGyi9km_6E",
    url: "https://youtu.be/SZGyi9km_6E",
    name: "Australia - Darwin",
    items: [{ time: 0, title: "Work in progress", url: "" }],
  },
  {
    latest: false,
    date: "4.4.2024",
    videoId: "RqimBw6uTWg",
    url: "https://www.youtube.com/watch?v=RqimBw6uTWg",
    name: "Englang - Bristol",
    items: [{ time: 0, title: "Work in progress", url: "" }],
  },
  {
    latest: false,
    date: "7.3.2024",
    videoId: "shzJxoNBF5M",
    url: "https://youtu.be/shzJxoNBF5M",
    name: "England - Southampton",
    items: [{ time: 0, title: "Work in progress", url: "" }],
  },
];

export default playlists;
