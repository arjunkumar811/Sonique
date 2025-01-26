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
    <div className="flex justify-between items-center p-4 bg-gray-800">
      {isLoading ? (
        <span className="text-white">Loading...</span>
      ) : session?.user ? (
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleSignOut}
          aria-label="Log out"
        >
          Log Out
        </button>
      ) : (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSignIn}
          aria-label="Sign in"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
