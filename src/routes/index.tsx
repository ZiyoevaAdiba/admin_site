import { Fragment, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { urls } from "./urls";
import { MainView } from "../layouts/MainView";
import { Loader } from "../shared/components/Loader";

const routesConfig = [
  {
    path: "/",
    layout: MainView,
    routes: [
      {
        exact: true,
        path: "/",
        component: () => <Redirect to={urls.categories} />,
      },
      {
        exact: true,
        path: urls.categories,
        component: lazy(() =>
          import("../shared/components/Categories").then((module) => ({
            default: module.Categories,
          }))
        ),
      },
      {
        exact: true,
        path: urls.slider,
        component: lazy(() =>
          import("../shared/components/Slider").then((module) => ({
            default: module.Slides,
          }))
        ),
      },
      {
        exact: true,
        path: urls.news,
        component: lazy(() =>
          import("../shared/components/News").then((module) => ({
            default: module.News,
          }))
        ),
      },
    ],
  },
];

const renderRoutes = (routes: any) =>
  routes ? (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route: any, i: number) => {
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props: any) => (
                <Switch>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Switch>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

export const Routes = () => {
  return renderRoutes(routesConfig);
};
