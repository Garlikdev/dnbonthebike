import playlistsData from "@/components/tracklist/TracklistData";
import Image from "next/image";
import Link from "next/link";

export default function Tracklists() {
  return (
    <div className="container relative flex w-full flex-col items-center gap-4 overflow-hidden bg-background py-4">
      <h1 className="bg-gradient-to-r from-neutral-500 via-yellow-500 via-30% to-indigo-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-neutral-100 dark:via-yellow-100 dark:to-indigo-100">
        Tracklists
      </h1>
      {playlistsData.map((playlist) => (
        <div
          key={playlist.id}
          className="flex w-full flex-col gap-2 md:w-2/3 lg:w-1/2"
        >
          <div className="flex flex-col items-center font-bold">
            <p>{playlist.date}</p>
            <p>{playlist.name}</p>
          </div>
          <Link
            href={`/tracklists/${playlist.year}/${playlist.city.toLowerCase()}`}
            className="flex cursor-pointer flex-row items-center gap-4 rounded-xl bg-foreground/10 px-4 py-4 shadow-lg transition-all duration-150 hover:scale-[1.02] hover:bg-primary/30"
          >
            <Image
              src={`https://i.ytimg.com/vi/${playlist.videoId}/default.jpg`}
              alt={playlist.name}
              width={120}
              height={90}
              className="h-16 rounded-2xl object-cover shadow-lg"
            />
            <div>
              <p className="text-sm">{playlist.country}</p>
              <p className="font-bold">{playlist.city}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
