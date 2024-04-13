const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/lot/notfound"],
    exact: true,
    component: "LotNotFound",
  },
  {
    path: ["/lot/:vin"],
    exact: true,
    component: "Lot",
  },
  {
    path: ["/lot"],
    exact: true,
    component: "Home",
  },
];

export default routes;
