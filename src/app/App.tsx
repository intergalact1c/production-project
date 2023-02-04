import React, { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { AboutPage } from "pages/AboutPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { MainPage } from "pages/MainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>{theme}</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
