import React from "react";
import {
  WindowHeader,
  WindowContent,
  Frame,
  Window,
  Avatar,
} from "react95";

export default function Popup() {
  return (
    <div className="w-[40%] h-[40%]">
      <Window resizable className="window">
        <WindowHeader className="flex items-stretch">
          <span>Welcome</span>
        </WindowHeader>
        <h3 className="font-serif font-extrabold text-5xl">
          Welcome to{" "}
          <span className="font-sans font-extrabold">
            Catlyn<span className="text-white font-normal">92</span>
          </span>
        </h3>
        <WindowContent>
          <p>
            Fasten your time travellin' seatbelts while we take a trip backwards
            into technological time...
          </p>
          <p>
            Welcome to my personal website! It was inspired by 90's nostalgia
            and features some of my favorite tech energies from this era. I hope
            you enjoy it! You can navigate to different pages through the icons
            you see on the left side of the screen, or the searchbar at the
            bottom. If you get lost out there, Clippy will take you home!
          </p>
        </WindowContent>
      </Window>
    </div>
  );
}
