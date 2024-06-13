import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setVideos } from "../features/videoSlice";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const apiKey = 'AIzaSyAZqaOmk88wEM2UuUwV1nzLwzW-bsXa0Xg'; // Replace with your actual API key

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: searchTerm,
          maxResults: 10, // Adjust this number as needed
          key: apiKey
        }
      });
      dispatch(setVideos(response.data.items));
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full md:w-96 lg:w-[32rem] relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search videos"
        className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
