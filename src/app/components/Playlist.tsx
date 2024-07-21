"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface PlaylistItem {
  title: string;
  time: number;
  url: string;
}

interface PlaylistProps {
  items: PlaylistItem[];
  onItemClick: (time: number) => void;
  currentTime: number;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const Playlist: React.FC<PlaylistProps> = ({
  items,
  onItemClick,
  currentTime,
  setPlaying,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const activeIndex = items.findIndex((item, index) => {
      const nextItem = items[index + 1];
      return (
        currentTime >= item.time &&
        (nextItem === undefined || currentTime < nextItem.time)
      );
    });
    setActiveIndex(activeIndex);
  }, [currentTime, items]);

  const handleChange = (value: string) => {
    const time = parseInt(value);
    onItemClick(time);
    setPlaying(true);
  };

  return (
    <div className="w-full">
      <Select
        onValueChange={handleChange}
        value={items[activeIndex ?? 0]?.time.toString()}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a song" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem
              key={index}
              value={item.time.toString()}
              className={`cursor-pointer py-2 ${index === activeIndex ? "font-bold" : ""}`}
              onClick={() => onItemClick(item.time)}
            >
              {formatTime(item.time)} - {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex w-full items-center gap-2">
        <p>Current song:</p>
        <div>
          {items[activeIndex ?? 0]?.url ? (
            <Link
              href={items[activeIndex ?? 0]?.url ?? "#"}
              className="inline-flex items-center gap-1 text-green-500"
            >
              Link <ExternalLinkIcon />
            </Link>
          ) : (
            <p className="text-rose-500">Not released / updated</p>
          )}
        </div>
      </div>
    </div>
  );
};

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs > 0 ? `${hrs}:` : ""}${hrs > 0 && mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
};

export default Playlist;
