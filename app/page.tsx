import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Music, Users, Radio, Headphones, Check } from "lucide-react";
import { Appbar } from "./components/Appbar";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Music className="h-6 w-6 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">
              Sonique
            </span>
          </Link>
          <nav className="ml-auto flex justify-center items-center gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#dashboard"
            >
              <Appbar />
            </Link>
          </nav>
        </header>
        <main className="flex-1 ">
          <section className="w-full  py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
            <div className="container ml-12 px-4 md:px-6">
              <div className="flex ml-12 flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl ml-12 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Sonique: Where Fans Choose the Music
                </h1>
                <p className="mx-auto ml-12 max-w-[700px] text-gray-200 md:text-xl">
                  Create interactive streams where your audience picks the
                  soundtrack.
                </p>
                <div className="space-x-4 ml-12">
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    <Link href="#cta">Get Started</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-black border-white  hover:bg-teal-400 transition-all duration-300 ease-in-out rounded-lg px-6 py-2 shadow-md hover:shadow-lg font-semibold tracking-wide"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section
            id="features"
            className="w-full  py-12 md:py-24 lg:py-32 bg-gray-100"
          >
            <div className="container px-4 md:px-6 ml-12">
              <h2 className="text-3xl ml-12 font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Why Choose Sonique?
              </h2>
              <ul className="grid grid-cols-1 ml-12 md:grid-cols-3 gap-8 list-none">
                <FeatureCard
                  icon={<Users className="h-10 w-10  text-primary" />}
                  title="Fan Engagement"
                  description="Let your audience actively participate by choosing the music."
                />
                <FeatureCard
                  icon={<Radio className="h-10 w-10 text-primary" />}
                  title="Live Interaction"
                  description="Real-time voting system for dynamic song selection."
                />
                <FeatureCard
                  icon={<Headphones className="h-10 w-10 text-primary" />}
                  title="Vast Music Library"
                  description="Access millions of tracks for your stream."
                />
              </ul>
            </div>
          </section>
          <section
            id="how-it-works"
            className="w-full ml-12 py-12 md:py-24 lg:py-32"
          >
            <div className="container px-4 ml-12 md:px-6">
              <h2 className="text-3xl font-bold  tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                How It Works
              </h2>
              <ol className="grid grid-cols-1 ml-12 md:grid-cols-3 gap-8 list-decimal">
                <li className="flex flex-col items-center text-center">
                  <span className="text-lg font-semibold mb-2">
                    Start Your Stream
                  </span>
                  <p className="text-gray-600">
                    Easily integrate Sonique with your favorite streaming
                    platform.
                  </p>
                </li>
                <li className="flex flex-col items-center text-center">
                  <span className="text-lg font-semibold mb-2">
                    Fans Suggest Songs
                  </span>
                  <p className="text-gray-600">
                    Your audience browses our vast library and suggests tracks.
                  </p>
                </li>
                <li className="flex flex-col items-center text-center">
                  <span className="text-lg font-semibold mb-2">
                    Viewers Vote
                  </span>
                  <p className="text-gray-600">
                    Democratic voting ensures the most popular tracks get
                    played.
                  </p>
                </li>
              </ol>
            </div>
          </section>
          <section
            id="benefits"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
          >
            <div className="container ml-12 px-4 md:px-6">
              <h2 className="text-3xl ml-12 font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Benefits for Creators
              </h2>
              <ul className="grid ml-12 grid-cols-1 md:grid-cols-2 gap-6 list-none">
                <li className="flex ml-12 items-start space-x-3">
                  <Check className="h-6 w-6 ml-12 text-green-500 flex-shrink-0" />
                  <span>Increased viewer engagement and retention</span>
                </li>
                <li className="flex ml-12 items-start space-x-3">
                  <Check className="h-6 w-6 ml-12 text-green-500 flex-shrink-0" />
                  <span>Unique, interactive streaming experience</span>
                </li>
                <li className="flex items-start ml-12 space-x-3">
                  <Check className="h-6 w-6 ml-12 text-green-500 flex-shrink-0" />
                  <span>Discover new music through your community</span>
                </li>
                <li className="flex items-start ml-12 space-x-3">
                  <Check className="h-6 w-6 ml-12 text-green-500 flex-shrink-0" />
                  <span>Build stronger connections with your audience</span>
                </li>
              </ul>
            </div>
          </section>
          <section
            id="cta"
            className="w-full py-12 md:py-24 lg:py-32 bg-primary"
          >
            <div className="container px-4 ml-12 md:px-6">
              <div className="flex flex-col ml-12 items-center space-y-4 text-center text-white">
                <h2 className="text-3xl font-bold ml-12 tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Revolutionize Your Streams?
                </h2>
                <p className="mx-auto  max-w-[600px]  text-gray-200 md:text-xl/relaxed">
                  Join Sonique today and give your audience the power to create
                  the perfect soundtrack for your content.
                </p>
                <div className="w-full  max-w-sm space-y-2">
                  <form className="flex  space-x-2">
                    <Input
                      className="flex-1 bg-white text-gray-900"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button
                      className="bg-white text-primary hover:bg-gray-100"
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">
            © 2023 Sonique. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <li className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </li>
  );
}
