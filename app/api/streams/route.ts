import { prismaClient } from "@/app/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { date, z, ZodError } from "zod";

const YT_REGEX = new RegExp("^(?:https?:\\/\\/)?(?:www\\.)?(?:m\\.)?(?:youtube\\.com\\/(?:watch\\?(?!.*\\blist=)(?:.*&)?v=|embed\\/|v\\/) |youtu\\.be\\/)([a-zA-Z0-9_-]{11})(?:[?&]\\S+)?$");

const CreateStreamSchema = z.object({
  creatorId: z.string(), 
  url: z.string().refine((val) =>
    val.startsWith("https://www.youtube.com/") || val.startsWith("https://open.spotify.com/"), {
      message: "URL must be from YouTube or Spotify",
    }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    CreateStreamSchema.parse(body);

    const isYt = YT_REGEX.test(body.url); 

    if (!isYt) {
      return NextResponse.json({
        message: "Wrong URL format" 
      }, {
        status: 411
      });
    }

    const extractedId = body.url.split("?v=")[1]; 

    await prismaClient.stream.create({
      data: {
        userId: body.creatorId,
        url: body.url, 
        extractedId,
        type: "Youtube"
      }
    });

    return NextResponse.json({ message: "Stream created successfully" }, { status: 201 });

  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({
        message: error.errors[0].message,
      }, { status: 400 });
    }

    return NextResponse.json({
      message: "An error occurred",
    }, { status: 400 });
  }
}
