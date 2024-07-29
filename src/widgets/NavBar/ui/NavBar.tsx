import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitch } from "shared/ui/ThemeSwitch";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitch />
      <div className={cls.links}>
        <AppLink to={"/"} className={cls.mainLink}>
          Main page
        </AppLink>

        <AppLink to={"/about"}>About page</AppLink>
      </div>
    </div>
  );
};
