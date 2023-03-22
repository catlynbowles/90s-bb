import React, { useRef, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from "react95";
import logoIMG from "../../public/logoIMG.png";
import Image from "next/image";
import Link from "next/link";
import me from "../../public/mee.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const catMenu = useRef<any>();

  const closeOpenMenus = (e: any) => {
    if (catMenu.current && open && !catMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  if (typeof document !== "undefined") {
    document.addEventListener("mousedown", closeOpenMenus);
  }

  return (
    <div className="w-full absolute bottom-0">
      <AppBar position="sticky">
        <Toolbar className="text-blue bottom-0">
          <div>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: "bold" }}
            >
              <Image
                src={logoIMG}
                alt="react95 logo"
                style={{ height: 20, marginRight: 4, width: 30 }}
              />
              Start
            </Button>
            {open && (
              <div className="w-100">
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  bottom: "100%",
                }}
                onClick={() => setOpen(false)}
                ref={catMenu}
              >
                <Link href="/about">
                  <MenuListItem>
                    <span role="img" aria-label="👨‍💻">
                      👨‍💻
                    </span>
                    About Me
                  </MenuListItem>
                </Link>
                <Link href="/projects">
                  <MenuListItem>
                    <span role="img" aria-label="📁">
                      📁
                    </span>
                    Projects
                  </MenuListItem>
                </Link>
                <Link href="/contact">
                  <MenuListItem>
                    <span role="img" aria-label="📁">
                      📁
                    </span>
                    Contact Me
                  </MenuListItem>
                </Link>
                <Separator />
                <MenuListItem disabled>
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  Logout
                </MenuListItem>
              </MenuList>

              </div>
            )}
          </div>
          <div className="absolute bottom-1 right-1 flex gap-x-3 items-center">
            <p className="font-sans text-2xl font-bold text-white">C | B</p>
            <Avatar>
              <Image
                src={me}
                alt={""}
                height={100}
                className="bg-contain h-[100%]"
              />
            </Avatar>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
