import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider/";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import "./styles/index.scss";
type Props = {};

export const App = (props: Props) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: false, selected: true }, [theme])}
    >
      <NavBar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
