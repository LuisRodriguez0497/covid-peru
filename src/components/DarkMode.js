/** @jsxImportSource theme-ui */
import React from "react";
import { FaSun as Sol } from "react-icons/fa";
import { GiMoon as Luna } from "react-icons/gi";
import { useColorMode } from "theme-ui";

export default function DarkMode(props) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      <span
        role="link"
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
        sx={{
          color: "socialLink",
          fontSize: "1.25rem",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}
      >
        {colorMode === "default" ? <Luna /> : <Sol />}
      </span>
    </>
  );
}
