import "../styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "../pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "../pages/MainPage/MainPage.lazy";
import { Suspense } from "react";
import { useTheme } from "../theme/useTheme";
type Props = {};

export const App = (props: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Main page</Link>
      <Link to={"/about"}>About page</Link>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
