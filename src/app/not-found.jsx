import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-300 dark:text-gray-700">
          404
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          We can&apos;t find that page.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
