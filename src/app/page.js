"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => setJoke(response.data.joke))
      .catch((error) => console.error(error));
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[32px] font-bold pb-4 text-white">
          Random Joke Generator
        </h1>
        <div className="w-[700px] bg-gray-500 p-4 rounded-md text-white flex flex-col items-center justify-between ">
          <div className="flex flex-col items-center mb-8">
            <p className="text-[50px]">&#128540;</p>
            <div className="text-center">{joke}</div>
          </div>
          <button
            className="border border-white py-2 px-4 rounded-md"
            onClick={getJoke}
          >
            Generate Joke
          </button>
        </div>
      </div>
    </main>
  );
}
