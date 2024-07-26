import { memo } from "react";
import { useRerenderCount } from "../hooks/useRerenderCount";
import cls from "./Button.module.scss";
type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = memo(({ children, onClick }: Props) => {
  const rerenderCount = useRerenderCount();
  return (
    <button onClick={onClick} className={`${cls["btn"]} ${cls["green"]}`}>
      {children} rerenderCount: {rerenderCount}
    </button>
  );
});
