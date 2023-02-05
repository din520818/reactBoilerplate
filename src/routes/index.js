import Login from "../views/Login";
import Register from "../views/Register";
import Topic from "../views/Topic";
import SubTopic from "../views/SubTopic";
import LoaderSample from "../views/LoaderSample";
import TurboView from "../views/TurboView";
import MenuView from "../views/MenuView";
import PasswordChange from "@Components/ChangePassword/index";
import ChangePasswordView from "../views/ChangePasswordView/index";

const indexRoutes = [
  // { path: "/login", name: "Login", component: TurboView },
  // { path: "/register", name: "Register", component: Register },
  // {
  //   path: "/topics",
  //   name: "Topic",
  //   component: [
  //     { path: "/topics/subtopic", name: "Sub Topic", component: SubTopic },
  //     { path: null, name: "Topic", component: Topic },
  //   ],
  // },
  // { path: "/actionloader", name: "Loaders", component: LoaderSample },
  {
    path: "/change-password",
    name: "changePassword",
    component: ChangePasswordView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/",
    name: "TurboView",
    component: TurboView,
    authenticated: false,
  },
];

export default indexRoutes;
