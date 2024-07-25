"use client";

import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import ReactPlayer from "react-player/lazy";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Playlist from "./Playlist";
import type { IPlaylist } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";

export default function Tracklist({
  selectedPlaylist,
  playlists,
}: {
  selectedPlaylist: IPlaylist;
  playlists: IPlaylist[];
}) {
  const router = useRouter();

  const groupedPlaylists: Record<number, IPlaylist[]> = playlists.reduce(
    (acc: Record<number, IPlaylist[]>, playlist) => {
      if (!acc[playlist.year]) {
        acc[playlist.year] = [];
      }
      acc[playlist.year]?.push(playlist);
      return acc;
    },
    {}, // Initialize the accumulator as an empty object
  );

  // State to keep track of current times for each playlist
  const [currentTimes, setCurrentTimes] = useState<Record<number, number>>(
    playlists.reduce((acc, playlist) => ({ ...acc, [playlist.id]: 0 }), {}),
  );

  // State to control if the player is playing
  const [playing, setPlaying] = useState(false);

  // Refs to keep track of player instances
  const playerRefs = useRef<Record<number, ReactPlayer | null>>(
    playlists.reduce((acc, playlist) => ({ ...acc, [playlist.id]: null }), {}),
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!selectedPlaylist) return; // Early return if no playlist is selected

    const playlistId = selectedPlaylist.id;
    const currentTime = currentTimes[playlistId] ?? 0; // Default to 0 if undefined

    const activeIndex = selectedPlaylist.items.findIndex((item, index) => {
      const nextItem = selectedPlaylist.items[index + 1];
      return (
        currentTime >= item.time &&
        (nextItem === undefined || currentTime < nextItem.time)
      );
    });

    setActiveIndex(activeIndex);
  }, [currentTimes, selectedPlaylist]);

  // Handler for player ready event
  const handlePlayerReady = (player: ReactPlayer, id: number) => {
    playerRefs.current[id] = player;
    setInterval(() => {
      if (player) {
        setCurrentTimes((prevTimes) => ({
          ...prevTimes,
          [id]: player.getCurrentTime() || 0,
        }));
      }
    }, 1000);
  };

  // Handler for item click event
  const handleItemClick = (time: number, id: number) => {
    playerRefs.current[id]?.seekTo(time, "seconds");
    setPlaying(true); // Set the player to play when a song is clicked
  };

  // Handler for playlist selection
  const handlePlaylistChange = (value: string) => {
    const id = parseInt(value, 10);
    const playlist = playlists.find((playlist) => playlist.id === id);
    console.log(playlist);
    if (playlist) {
      const year = playlist.year;
      const city = playlist.city.toLowerCase();
      setPlaying(false);
      router.push(`/tracklists/${year}/${city}`);
    }
  };

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 py-4">
      <h1 className="bg-gradient-to-r from-neutral-500 via-yellow-500 via-30% to-indigo-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-neutral-100 dark:via-yellow-100 dark:to-indigo-100">
        Tracklists
      </h1>
      <div className="flex justify-center">
        <Select
          value={selectedPlaylist?.id.toString() ?? "No playlist selected"}
          onValueChange={handlePlaylistChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a playlist" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(groupedPlaylists).map(([year, playlists]) => (
              <SelectGroup key={year}>
                <SelectLabel>{year}</SelectLabel>
                {playlists.map((playlist) => (
                  <SelectItem
                    key={playlist.id}
                    value={playlist.id.toString()}
                    className="cursor-pointer py-2"
                  >
                    {playlist.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full grid-cols-1 flex-col gap-4 lg:grid-cols-2 lg:flex-row">
        {/* Display the selected playlist */}
        {selectedPlaylist && (
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>
                <Link
                  href={selectedPlaylist.url}
                  className="underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedPlaylist.name}
                </Link>
              </CardTitle>
              <CardDescription>
                {moment(selectedPlaylist.date, "D.M.YYYY").format("LL")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pt-[56.25%]">
                {hasWindow && (
                  <ReactPlayer
                    className="absolute left-0 top-0"
                    url={selectedPlaylist.url}
                    ref={(player) => {
                      if (player) {
                        handlePlayerReady(player, selectedPlaylist.id);
                      }
                    }}
                    playing={playing}
                    controls
                    autoPlay={0}
                    width="100%"
                    height="100%"
                  />
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Playlist
                items={selectedPlaylist.items}
                onItemClick={(time) =>
                  handleItemClick(time, selectedPlaylist.id)
                }
                currentTime={currentTimes[selectedPlaylist.id] ?? 0}
                setPlaying={setPlaying}
              />
            </CardFooter>
          </Card>
        )}
        {selectedPlaylist && (
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle className="flex justify-between">
                {selectedPlaylist.name} <p>▶️ Now playing</p>
              </CardTitle>
              <CardDescription>
                Click on the song name to play it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-full rounded-md border lg:h-96">
                <Table>
                  <TableCaption>
                    Unknown songs are being updated daily.
                  </TableCaption>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead>Time</TableHead>
                      <TableHead>Song name</TableHead>
                      <TableHead>Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedPlaylist.items.map((item, index) => (
                      <TableRow
                        key={item.time}
                        className={`${
                          activeIndex === index ? "bg-blue-500/30" : ""
                        }`}
                      >
                        <TableCell className="font-medium">
                          {formatTime(item.time)}
                        </TableCell>
                        <TableCell
                          className="cursor-pointer transition-colors hover:!bg-blue-500/60"
                          onClick={() =>
                            handleItemClick(item.time, selectedPlaylist.id)
                          }
                        >
                          {item.title}
                        </TableCell>
                        <TableCell>
                          {item.url ? (
                            <Link
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-green-500"
                            >
                              Link <ExternalLinkIcon />
                            </Link>
                          ) : (
                            ""
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs > 0 ? `${hrs}:` : ""}${hrs > 0 && mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
};
