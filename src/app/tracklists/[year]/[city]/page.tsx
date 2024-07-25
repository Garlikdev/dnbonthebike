import Tracklist from "@/components/tracklist/Tracklist";
import playlists from "@/components/tracklist/TracklistData";

export default function TracklistRoute({
  params,
}: {
  params: { year: string; city: string };
}) {
  const { year, city } = params;

  const selectedPlaylist = playlists.find(
    (playlist) =>
      playlist.year === parseInt(year, 10) &&
      playlist.city.toLowerCase() === city.toLowerCase(),
  );
  if (!selectedPlaylist) {
    return <div>Playlist not found</div>;
  }

  return (
    <Tracklist selectedPlaylist={selectedPlaylist} playlists={playlists} />
  );
}
