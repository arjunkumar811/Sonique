import { prismaClient } from "@/app/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";
import axios from "axios";

const YT_REGEX = new RegExp(
  "^(?:https?:\\/\\/)?(?:www\\.)?(?:m\\.)?(?:youtube\\.com\\/(?:watch\\?(?!(?:.*\\blist=))(?:.*&)?v=|embed\\/|v\\/)|youtu\\.be\\/)([a-zA-Z0-9_-]{11})(?:[?&]\\S+)?$"
);

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z
    .string()
    .refine(
      (val) =>
        val.startsWith("https://www.youtube.com/") ||
        val.startsWith("https://open.spotify.com/"),
      {
        message: "URL must be from YouTube or Spotify",
      }
    ),
});

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; 
 

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    CreateStreamSchema.parse(body);

    const isYt = YT_REGEX.test(body.url);

    if (!isYt) {
      return NextResponse.json(
        {
          message: "Wrong URL format",
        },
        {
          status: 411,
        }
      );
    }

    const videoId = body.url.split("v=")[1]?.split("&")[0];

    if (!videoId) {
      return NextResponse.json(
        {
          message: "Unable to extract video ID",
        },
        { status: 400 }
      );
    }

    
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    const ytResponse = await axios.get(apiUrl);

    if (ytResponse.data.items.length === 0) {
      return NextResponse.json(
        {
          message: "Video not found on YouTube",
        },
        { status: 404 }
      );
    }

    const videoDetails = ytResponse.data.items[0].snippet;
    const title = videoDetails.title;
    const thumbnailUrl = videoDetails.thumbnails.high.url;

    const stream = await prismaClient.stream.create({
      data: {
        userId: body.creatorId,
        url: body.url,
        extractedId: videoId,
        type: "Youtube",
        title: title,
        bigImg: thumbnailUrl,
      },
    });

    return NextResponse.json(
      {
        message: "Stream created successfully",
        id: stream.id,
        title: title,
        thumbnail: thumbnailUrl,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: error.errors[0].message,
        },
        { status: 400 }
      );
    }

    console.error(error); 
    return NextResponse.json(
      {
        message: "An error occurred",
      },
      { status: 500 }
    );
  }
}
