const routes = [
  {
    path: "/",
    exact: true,
    component: "Home",
  },
  {
    path: "/register",
    exact: true,
    component: "Register",
  },
  {
    path: "/login",
    exact: true,
    component: "Login",
  },
  {
    path: "/dashboard",
    exact: true,
    component: "Dashboard",
    children: [
      {
        path: "/dashboard/search",
        exact: true,
        component: "Search",
      }
    ],
  }
];

export default routes;
