"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";

  const handleSignIn = () => {
    signIn(undefined, { callbackUrl: "/dashboard" }); // Redirect to /dashboard after sign-in
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // Redirect to the home page after sign-out
  };

  return (
    <div className="flex justify-between items-center p-4  rounded-lg">
      {isLoading ? (
        <span className="text-gray-300 animate-pulse">Loading...</span>
      ) : session?.user ? (
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 shadow"
          onClick={handleSignOut}
          aria-label="Log out"
        >
          Log Out
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 shadow"
          onClick={handleSignIn}
          aria-label="Sign in"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
