import React, { useEffect, useState } from "react";
import useSWR from "swr";
import SearchBar from "./Search";
import { useDebounce } from "@/hooks/useDebounce";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DebounceSearchUsers = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  const [filteredTodos, setFilteredTodos] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (data) {
      setFilteredTodos(data);
    }
  }, [data]);

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredTodos(data || []);
      return;
    }

    const filtered = data.filter(
      (todo) => todo.id === Number(debouncedSearch)
    );

    setFilteredTodos(filtered);
  }, [debouncedSearch, data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="flex flex-col items-center p-10 bg-pink-50 min-h-screen">
      <h1 className="text-2xl mb-5 font-bold">
        Debounce Search User
      </h1>

      <div className="p-6">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter todo id to search..."
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredTodos.length === 0 ? (
          <p className="text-gray-500">No results found</p>
        ) : (
          filteredTodos.map((val) => (
            <div
              key={val.id}
              className="bg-white w-[400px] rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 m-2 border border-gray-100 max-w-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  ID
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  #{val.id}
                </span>
              </div>

              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {val.title}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Status</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${val.completed
                    ? "bg-green-100 text-green-900"
                    : "bg-yellow-100 text-yellow-900"
                    }`}
                >
                  {val.completed ? "Completed" : "Pending"}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DebounceSearchUsers;
