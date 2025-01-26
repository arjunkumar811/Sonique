"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown, Plus, Music, Share2 } from "lucide-react"

interface Song {
  id: number
  title: string
  artist: string
  likes: number
  dislikes: number
}

export default function Dashboard() {
  const [songs, setSongs] = useState<Song[]>([
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen", likes: 10, dislikes: 2 },
    { id: 2, title: "Imagine", artist: "John Lennon", likes: 8, dislikes: 1 },
    { id: 3, title: "Shape of You", artist: "Ed Sheeran", likes: 7, dislikes: 3 },
  ])
  const [newSong, setNewSong] = useState({ title: "", artist: "" })

  const addSong = () => {
    if (newSong.title && newSong.artist) {
      setSongs([...songs, { ...newSong, id: Date.now(), likes: 0, dislikes: 0 }])
      setNewSong({ title: "", artist: "" })
    }
  }

  const likeSong = (id: number) => {
    setSongs(
      songs
        .map((song) => (song.id === id ? { ...song, likes: song.likes + 1 } : song))
        .sort((a, b) => b.likes - a.likes),
    )
  }

  const dislikeSong = (id: number) => {
    setSongs(songs.map((song) => (song.id === id ? { ...song, dislikes: song.dislikes + 1 } : song)))
  }

  const sharePage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this awesome song dashboard!',
          url: window.location.href,
        });
        console.log('Share was successful.');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported in this browser.');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="mb-6 bg-gray-800 border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400">Sonique Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Input
                placeholder="Song Title"
                value={newSong.title}
                onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
                className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Input
                placeholder="Artist"
                value={newSong.artist}
                onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
                className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Button onClick={addSong} className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black">
                <Plus className="mr-2 h-4 w-4" /> Add Song
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-none">
          <CardHeader>
            <CardTitle className="text-xl text-green-400">Song Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {songs.map((song) => (
                <li
                  key={song.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-700 p-4 rounded-lg"
                >
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Music className="mr-2 h-5 w-5 text-green-400" />
                    <div>
                      <h3 className="font-semibold text-white">{song.title}</h3>
                      <p className="text-sm text-gray-400">{song.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => likeSong(song.id)}
                      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                    >
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      {song.likes}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => dislikeSong(song.id)}
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      <ThumbsDown className="mr-1 h-4 w-4" />
                      {song.dislikes}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Button onClick={sharePage} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
          <Share2 className="mr-2 h-4 w-4" /> Share This Page
        </Button>
      </div>
    </div>
  )
}
