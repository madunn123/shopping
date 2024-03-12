import React from 'react';

export default function Navbar({ handleSearchNotes }) {
  return (
    <nav className="container flex-none p-6 mx-auto rounded-lg shadow-lg bg-slate-800">
      <div className="flex flex-row items-center justify-between">
        <h1 className="m-0 text-3xl capitalize font-title text-slate-400">personal notes</h1>
        <input
          type="text"
          className="px-3 py-2 text-base duration-500 bg-transparent rounded-md outline-none focus:text-slate-200 font-title focus:ring-slate-300 hover:ring-2 hover:ring-slate-300 ring-2 ring-slate-600"
          placeholder="search..."
          onChange={(e) => handleSearchNotes(e.target.value)}
        />
      </div>
    </nav>
  );
}
