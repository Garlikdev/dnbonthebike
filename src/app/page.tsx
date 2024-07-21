"use client";

import React, { useState, useRef } from "react";
import moment from "moment";
import YouTubePlayer from "./components/YoutubePlayer";
import Playlist from "./components/Playlist";
import Link from "next/link";
import playlists from "@/lib/Playlists";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  // Find the latest playlist
  const latestPlaylist = playlists.find((playlist) => playlist.latest);

  // Filter out the latest playlist from the list
  const remainingPlaylists = playlists.filter(
    (playlist) => playlist !== latestPlaylist,
  );

  // State to keep track of current times for each playlist
  const [currentTimes, setCurrentTimes] = useState<Record<string, number>>(
    playlists.reduce((acc, playlist) => ({ ...acc, [playlist.name]: 0 }), {}),
  );

  // Refs to keep track of player instances
  const playerRefs = useRef<Record<string, any>>(
    playlists.reduce(
      (acc, playlist) => ({ ...acc, [playlist.name]: null }),
      {},
    ),
  );

  // Handler for player ready event
  const handlePlayerReady = (event: any, name: string) => {
    playerRefs.current[name] = event.target;
    setInterval(() => {
      setCurrentTimes((prevTimes) => ({
        ...prevTimes,
        [name]: playerRefs.current[name]?.getCurrentTime() || 0,
      }));
    }, 1000);
  };

  // Handler for item click event
  const handleItemClick = (time: number, name: string) => {
    playerRefs.current[name]?.seekTo(time, true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="bg-gradient-to-r from-neutral-500 via-yellow-500 via-30% to-indigo-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-neutral-100 dark:via-yellow-100 dark:to-indigo-100">
          Tracklists
        </h1>

        {/* Latest Playlist Section */}
        {latestPlaylist && (
          <Card>
            <CardHeader>
              <CardTitle>
                <Link
                  className="underline hover:text-blue-300"
                  href={latestPlaylist.url}
                >
                  {latestPlaylist.name}
                </Link>
              </CardTitle>
              <CardDescription>
                {moment(latestPlaylist.date, "D.M.YYYY").format("LL")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <YouTubePlayer
                videoId={latestPlaylist.videoId}
                onReady={(event) =>
                  handlePlayerReady(event, latestPlaylist.name)
                }
                onStateChange={() => {}}
              />
            </CardContent>
            <CardFooter>
              <Playlist
                items={latestPlaylist.items}
                onItemClick={(time) =>
                  handleItemClick(time, latestPlaylist.name)
                }
                currentTime={currentTimes[latestPlaylist.name] ?? 0}
              />
            </CardFooter>
          </Card>
        )}

        {/* Other Playlists Section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {remainingPlaylists.map((playlist) => (
            <Card key={playlist.name}>
              <CardHeader>
                <CardTitle>
                  <Link
                    className="underline hover:text-blue-300"
                    href={playlist.url}
                  >
                    {playlist.name}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {moment(playlist.date, "D.M.YYYY").format("LL")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YouTubePlayer
                  videoId={playlist.videoId}
                  onReady={(event) => handlePlayerReady(event, playlist.name)}
                  onStateChange={() => {}}
                />
              </CardContent>
              <CardFooter>
                <Playlist
                  items={playlist.items}
                  onItemClick={(time) => handleItemClick(time, playlist.name)}
                  currentTime={currentTimes[playlist.name] ?? 0}
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
