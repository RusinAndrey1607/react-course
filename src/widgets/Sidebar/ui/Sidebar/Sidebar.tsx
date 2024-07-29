import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { Button } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onTogle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onTogle}>Toggle</Button>
    </div>
  );
};
