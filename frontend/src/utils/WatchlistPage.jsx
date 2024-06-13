import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const WatchlistPage = () => {
  const user = useSelector((state) => state.user.user);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      if (user) {
        try {
          const docRef = doc(db, "watchlists", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setWatchlist(docSnap.data().videos);
          } else {
            console.log("No watchlist found!");
          }
        } catch (error) {
          console.error("Error fetching watchlist:", error);
        }
      }
    };
    fetchWatchlist();
  }, [user]);

  return (
    <div>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map((video, index) => (
          <li key={index}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WatchlistPage;
