import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
  <nav className="navigation">
    <a href="https://www.youtube.com/channel/UC-Rak9WhKgjARd5NwyYzdlQ?view_as=subscriber">
      Youtube Videos
    </a>
    <ThemeChanger />
  </nav>
);
