"use client";

import React from "react";

export default function Loading() {
  return (
    <div class="border border-gray-200 p-4 col-span-3">
      <div class="animate-pulse space-y-8">
        <div class="flex space-x-4">
          <div class="bg-gray-200 h-24 w-24 rounded-full"></div>
          <div class="space-y-2 flex-1 pt-4">
            <div class="h-6 bg-gray-200 w-1/2"></div>
            <div class="h-6 bg-gray-200 w-1/3"></div>
          </div>
        </div>
        <div class="flex-1 space-y-2">
          <div class="h-6 bg-gray-200 full"></div>
          <div class="h-6 bg-gray-200 w-3/3"></div>
        </div>
      </div>
    </div>
  );
}
