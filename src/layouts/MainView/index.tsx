import "./MainView.scss";
import { urls } from "../../routes/urls";
import { NavLink } from "react-router-dom";
import { FC, ReactNode } from "react";

export const MainView: FC<{ children: ReactNode }> = ({ children }) => {
  const navlinks = [
    {
      url: urls.categories,
      title: "Категории",
    },
    {
      url: urls.slider,
      title: "Слайдер",
    },
    {
      url: urls.news,
      title: "Новости",
    },
  ];

  return (
    <div className="main_layout">
      <div className="sidebar">
        <div className="top_navigation">
          {navlinks.map((item) => (
            <NavLink key={item.url} to={item.url}>
              {item.title}
            </NavLink>
          ))}
        </div>
        <NavLink to="/auth">Выход</NavLink>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
