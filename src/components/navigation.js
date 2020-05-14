import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
  <nav className="navigation">
    <Link to="/contact">Contact</Link>
    <a
      href="https://www.youtube.com/channel/UC-Rak9WhKgjARd5NwyYzdlQ?view_as=subscriber"
      target="_blanck"
    >
      Videos
    </a>
    <ThemeChanger />
  </nav>
);
