export type IPlaylistItem = {
  title: string;
  time: number;
  url: string;
};

export type IPlaylist = {
  id: number;
  latest: boolean;
  date: string;
  year: number;
  city: string;
  country: string;
  videoId: string;
  url: string;
  name: string;
  items: IPlaylistItem[];
};
