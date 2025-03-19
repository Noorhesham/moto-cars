"use client";
import React from "react";
import ModelCustom from "@/app/components/ModelCustom";
import Image from "next/image";

interface VideoThumbnailModalProps {
  thumbnail: string; // URL of the thumbnail image
  videoUrl: string; // URL of the video (e.g., YouTube embed URL)
  altText?: string; // Alt text for the thumbnail image
}

export function VideoThumbnailModal({ thumbnail, videoUrl, altText = "Video Thumbnail" }: VideoThumbnailModalProps) {
  return (
    <ModelCustom
      btn={
        <div className="cursor-pointer w-full mt-5 relative">
          {/* Thumbnail Image */}
          <div className="bg-black/40 h-full w-full inset-0 absolute" />
          <Image
            src={thumbnail}
            alt={altText}
            width={800} // Adjust as needed
            height={450} // Adjust as needed
            className="w-full h-auto"
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-600/90 h-20 w-20 rounded-full flex items-center justify-center">
              <svg
                width={24}
                height={24}
                className="h-8 w-8 ml-1 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 5.65273C5.25 4.79705 6.1674 4.25462 6.91716 4.66698L18.4577 11.0143C19.2349 11.4417 19.2349 12.5584 18.4577 12.9858L6.91716 19.3331C6.1674 19.7455 5.25 19.203 5.25 18.3474V5.65273Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      }
      content={
        <div className="relative w-full aspect-video">
          {/* Embedded Video */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src={videoUrl}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      }
    />
  );
}
