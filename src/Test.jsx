import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const initialState = [
  {
    id: Date.now(),
    title: 'default state',
    category: 'default state',
  },
];

export default function Test() {
  const [state, updateState] = useState(initialState);
  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const [categorySelected, setCategorySelected] = useState('all');

  const [textInput, setTextInput] = useState({
    title: '',
    category: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 4;

  // const filteredNotes = categorySelected !== 'all' ? state.filter(({ category, title }) => category === categorySelected && title.toLowerCase().includes(keyword.toLowerCase())) : state;
  const filteredNotes = state.filter(({ category, title }) => {
    const lowerCaseKeyword = keyword.toLowerCase() || '';
    const lowerCaseTitle = title.toLowerCase() || '';

    return (categorySelected === 'all' || category === categorySelected) && lowerCaseTitle.includes(lowerCaseKeyword);
  });

  const totalPages = Math.ceil(filteredNotes.length / PAGE_SIZE);

  const paginatedData = filteredNotes.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (_keyword) => {
    setKeyword(_keyword);

    setSearchParams({ q: keyword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateState([
      ...state,
      {
        id: Date.now(),
        title: textInput.title,
        category: textInput.category,
      },
    ]);
  };

  return (
    <div className="bg-slate-900 flex flex-col gap-10 h-[100vh] w-[100vw] p-20">
      <nav className="flex flex-row justify-end">
        <input
          type="text"
          className="p-2 text-white bg-transparent border rounded-sm outline-none border-slate-400"
          placeholder="search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </nav>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 text-white bg-transparent border rounded-sm outline-none border-slate-400"
          onChange={(e) => setTextInput({
            ...textInput,
            title: e.target.value,
          })}
          placeholder="title"
        />
        <input
          type="text"
          className="p-2 text-white bg-transparent border rounded-sm outline-none border-slate-400"
          onChange={(e) => setTextInput({
            ...textInput,
            category: e.target.value,
          })}
          placeholder="category"
        />
        <button type="submit" aria-label="submit" />
      </form>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-start gap-4">
          <button
            type="button"
            className="p-3 text-green-500 border border-green-50"
            onClick={() => setCategorySelected('all')}
          >
            all
          </button>

          {
          state.map(({ category }) => (
            <button
              type="button"
              key={category}
              className="p-3 text-green-500 border border-green-50"
              onClick={() => setCategorySelected(category)}
            >
              {category}
            </button>
          ))
        }
        </div>

        <div className="flex flex-col gap-3">
          {paginatedData.map(({ id, title, category }) => (
            <div className="flex flex-col gap-2 p-3 border border-slate-400 text-slate-300" key={id}>
              <span>
                title :
                {title}
              </span>
              <span>
                category:
                {category}
              </span>
            </div>
          ))}

          <div className="flex flex-row items-center justify-start gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                className="p-2 text-red-600 border border-red-500"
                onClick={() => handleClick(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
