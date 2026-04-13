import React, { useState } from "react";

import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const Timeline = ({ timeline }) => {
  const [filter, setFilter] = useState("all");

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case "call":
        return callImg;
      case "text":
        return textImg;
      case "video":
        return videoImg;
      default:
        return textImg;
    }
  };

  const filteredTimeline = timeline.filter((entry) => {
    if (filter === "all") return true;
    return entry.type.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-geist">
      <div className="pt-12 pb-4 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#1E293B] mb-6 tracking-tighter">
            Timeline
          </h1>

          <div className="relative w-full max-w-[280px]">
            <select
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all cursor-pointer shadow-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all" disabled hidden>
                Filter timeline
              </option>
              <option value="call">Calls</option>
              <option value="text">Texts</option>
              <option value="video">Videos</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="space-y-4">
          {filteredTimeline && filteredTimeline.length > 0 ? (
            [...filteredTimeline].reverse().map((entry) => (
              <div
                key={entry.entryId}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-5 animate-in fade-in duration-300"
              >
                <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl shrink-0 flex items-center justify-center p-3">
                  <img
                    src={getIcon(entry.type)}
                    alt={entry.type}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <h3 className="text-lg font-extrabold text-[#1E293B]">
                      {entry.type}
                    </h3>

                    <p className="text-sm font-medium text-gray-500">
                      with{" "}
                      <span className="font-bold text-gray-700">
                        {entry.friendName}
                      </span>
                    </p>
                  </div>

                  <div className="text-sm font-bold text-gray-400">
                    {entry.date}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-20 text-center">
              <p className="text-gray-400 font-bold">
                {filter === "all"
                  ? "No interactions logged yet."
                  : `No ${filter}s found.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
