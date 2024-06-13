import React from 'react';

const Sidebar = () => {
  const channels = [
    { name: "HW News Network", icon: "hw-news-hindi.svg", link: "https://www.hwnews.in/" },
    { name: "OutlookIndia", icon: "outlook-india.svg", link: "https://www.outlookindia.com/" },
    { name: "HW News English", icon: "hw-news-english.svg", link: "https://www.hwnews.in/english" },
    { name: "HW News Marathi", icon: "hw-news-marathi.svg", link: "https://www.hwnews.in/marathi" },
    { name: "Comedy Tadka", icon: "comedy-tadka.svg", link: "https://www.comedytadka.com/" },
    { name: "Tuk Tuk TV", icon: "tuk-tuk-tv.svg", link: "https://www.tuktuktv.com/" },
    { name: "Moxx Music Bhakti", icon: "moxx-music-bhakti.svg", link: "https://www.moxxmusicbhakti.com/" },
    { name: "Aaj Tak", icon: "aaj-tak.svg", link: "https://www.aajtak.in/" },
    { name: "India Today", icon: "india-today.svg", link: "https://www.indiatoday.in/" },
    { name: "NewsNation", icon: "news-nation.svg", link: "https://www.newsnationtv.com/" },
  ];

  return (
    <div className="w-full sm:w-64 bg-white shadow-lg my-5">
      <h2 className="text-xl font-bold p-4">Popular</h2>
      <ul>
        {channels.map((channel, index) => (
          <li key={index} className="flex items-center p-2 hover:bg-gray-200">
            <a href={channel.link} target="_self" rel="noopener noreferrer" className="flex items-center w-full">
              <img
                src={`/icons/${channel.icon}`}
                alt={channel.name}
                className="w-8 h-8 mr-4 rounded-full border border-gray-300 p-1"
              />
              <span className="text-sm font-medium">{channel.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
