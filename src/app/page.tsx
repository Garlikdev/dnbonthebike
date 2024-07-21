"use client";

import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import ReactPlayer from "react-player";
import playlists from "@/lib/Playlists";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Playlist from "./components/Playlist";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function HomePage() {
  // State to keep track of the selected playlist
  const [currentPlaylist, setCurrentPlaylist] = useState(playlists[0]);

  // State to keep track of current times for each playlist
  const [currentTimes, setCurrentTimes] = useState<Record<string, number>>(
    playlists.reduce((acc, playlist) => ({ ...acc, [playlist.name]: 0 }), {}),
  );

  // Refs to keep track of player instances
  const playerRefs = useRef<Record<string, ReactPlayer | null>>(
    playlists.reduce(
      (acc, playlist) => ({ ...acc, [playlist.name]: null }),
      {},
    ),
  );

  // Handler for player ready event
  const handlePlayerReady = (player: ReactPlayer, name: string) => {
    playerRefs.current[name] = player;
    setInterval(() => {
      if (player) {
        setCurrentTimes((prevTimes) => ({
          ...prevTimes,
          [name]: player.getCurrentTime() || 0,
        }));
      }
    }, 1000);
  };

  // Handler for item click event
  const handleItemClick = (time: number, name: string) => {
    playerRefs.current[name]?.seekTo(time, "seconds");
  };

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-8">
        <h1 className="bg-gradient-to-r from-neutral-500 via-yellow-500 via-30% to-indigo-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-neutral-100 dark:via-yellow-100 dark:to-indigo-100">
          Tracklists
        </h1>
        <div className="max-w-64">
          <Select
            value={currentPlaylist?.name ?? "No playlist selected"}
            onValueChange={(value) => {
              const playlist = playlists.find(
                (playlist) => playlist.name === value,
              );
              if (playlist) {
                setCurrentPlaylist(playlist);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a playlist" />
            </SelectTrigger>
            <SelectContent>
              {playlists.map((playlist) => (
                <SelectItem
                  key={playlist.name}
                  value={playlist.name}
                  className={`cursor-pointer py-2`}
                >
                  {playlist.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Display the selected playlist */}
        {currentPlaylist && (
          <Card className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
            <CardHeader>
              <CardTitle>
                <Link
                  className="underline hover:text-blue-300"
                  href={currentPlaylist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentPlaylist.name}
                </Link>
              </CardTitle>
              <CardDescription>
                {moment(currentPlaylist.date, "D.M.YYYY").format("LL")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pt-[56.25%]">
                {hasWindow && (
                  <ReactPlayer
                    className="absolute left-0 top-0"
                    url={currentPlaylist.url}
                    ref={(player) => {
                      if (player) {
                        handlePlayerReady(player, currentPlaylist.name);
                      }
                    }}
                    config={{
                      youtube: {
                        playerVars: { autoplay: 0 },
                      },
                    }}
                    autoPlay={0}
                    controls
                    width="100%"
                    height="100%"
                  />
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Playlist
                items={currentPlaylist.items}
                onItemClick={(time) =>
                  handleItemClick(time, currentPlaylist.name)
                }
                currentTime={currentTimes[currentPlaylist.name] ?? 0}
              />
            </CardFooter>
          </Card>
        )}
        {currentPlaylist && (
          <Card className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
            <CardHeader>
              <CardTitle>{currentPlaylist.name}</CardTitle>
              <CardDescription>Tracklist text version</CardDescription>
            </CardHeader>
            <CardContent>
              {currentPlaylist.items.map((item) => (
                <div key={item.time}>
                  {formatTime(item.time)} - {item.title}
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};
