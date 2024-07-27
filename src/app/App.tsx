import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider/";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
type Props = {};

export const App = (props: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: false, selected: true }, [theme])}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Main page</Link>
      <Link to={"/about"}>About page</Link>
      <AppRouter />
    </div>
  );
};
