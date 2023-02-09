import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  classname?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    classname,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [cls[theme], classname])}
      {...rest}
    >
      {children}
    </Link>
  );
};
