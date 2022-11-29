import { HomePage, LoginPage, RegisterPage, ErrorPage } from "../pages";

const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "*", component: ErrorPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
