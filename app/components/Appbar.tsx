"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
    const { data: session, status } = useSession();

    const isLoading = status === "loading";

    return (
        <div className="flex justify-between items-center p-4 bg-gray-800">
            {isLoading ? (
                <span className="text-white">Loading...</span>
            ) : session?.user ? (
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    onClick={() => signOut()}
                    aria-label="Log out"
                >
                    Log Out
                </button>
            ) : (
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => signIn()}
                    aria-label="Sign in"
                >
                    Sign In
                </button>
            )}
        </div>
    );
}
