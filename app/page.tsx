"use client";
import React from "react";
import Search from "./components/topbar/Search/Search";
import GlassmorphismCard from "./components/cards/Glass";
import StatCard from "./components/cards/StatCard"; // reusable stat card component
import RequestCard from "./components/cards/RequestCard"; // reusable request card component
import banner from "../app/asset/banner.jpg";

type Props = {};

const Page: React.FC<Props> = () => {
  // Example data for cards
  const statCards = [
    { title: "Sales", value: "36K", progress: 66, color: "green" },
    { title: "Revenue", value: "$120K", progress: 80, color: "blue" },
    { title: "Users", value: "8.5K", progress: 50, color: "purple" },
  ];

  const requestCards = [
    { title: "Requests", subtitle: "Completed validations", progress: 66, imgSrc: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png" },
  ];

  return (
    <div className="flex">
      <div className="w-full">
        {/* Top search bar */}
        <Search />

        {/* Banner Image */}
        <div className="flex items-center mx-10 w-full">
          <img
            className="rounded-3xl shadow-lg my-6 w-[86%]"
            src="https://ik.imagekit.io/cwq19b8fi/Colorful%20Gradient%203D%20Artist%20Twitter%20Header.png?updatedAt=1695890722041"
            alt="Banner"
          />
        </div>

        {/* Cards Section */}
        <div className="flex gap-10 p-2 mx-10">
          {/* Stat Cards */}
          {statCards.map((card, index) => (
            <StatCard key={index} {...card} />
          ))}

          {/* Glassmorphism Cards */}
          <GlassmorphismCard />
          <GlassmorphismCard />

          {/* Requests Card */}
          {requestCards.map((card, index) => (
            <RequestCard key={index} {...card} />
          ))}
        </div>

        {/* Recent Updates Section */}
        <div className="flex gap-10 p-2 mx-10 items-center mt-8">
          <h1 className="text-black font-bold text-2xl">Recent Updates</h1>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
