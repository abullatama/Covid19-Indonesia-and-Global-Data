import dashboard from "../views/pages/dashboard.js";
import hotline from "../views/pages/hotline.js";

const routes = {
  "/": dashboard, //default page or initial page
  "/dashboard": dashboard,
  "/hotline": hotline,
};

export default routes;
