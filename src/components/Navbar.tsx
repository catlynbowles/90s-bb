import React, { useRef, useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from "react95";
import logoIMG from "../../public/logoIMG.png";
import Image from "next/image";
import Link from "next/link";

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
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  bottom: "100%",
                }}
                onClick={() => setOpen(false)}
                ref={catMenu}
              >
                <Link href='/about'>
                <MenuListItem>
                  <span role="img" aria-label="👨‍💻">
                    👨‍💻
                  </span>
                  About Me
                </MenuListItem>
                </Link>
                <MenuListItem>
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  Projects
                </MenuListItem>
                <Separator />
                <MenuListItem disabled>
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  Logout
                </MenuListItem>
              </MenuList>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
