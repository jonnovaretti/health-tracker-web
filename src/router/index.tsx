import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <React.Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          const Component = React.lazy(() => import('../pages/' + routeItem.component));
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              element={
               <React.Suspense fallback={<>...</>}>
                 <Component />
               </React.Suspense>
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </React.Suspense>
  );
};

export default Router;
