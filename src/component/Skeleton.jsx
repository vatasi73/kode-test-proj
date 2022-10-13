import React from "react";

export default function Skeleton() {
  return (
    <div>
      {Array(12)
        .fill(12)
        .map((_, i) => (
          <div key={i} className="w-45 h-18  rounded-md  mt-6">
            <div className="flex animate-pulse flex-row items-center h-full justify-start space-x-5">
              <div className="w-[4.5rem] bg-gray-300 h-[4.5rem] rounded-full "></div>
              <div className="flex flex-col space-y-3">
                <div className="w-36 bg-gray-300 h-4 rounded-md "></div>
                <div className="w-20 bg-gray-300 h-3 rounded-md "></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
