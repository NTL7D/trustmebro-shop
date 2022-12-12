import {
    HomePage,
    LoginPage,
    RegisterPage,
    CartPage,
    ErrorPage,
    NoHeaderLayout,
} from "../components";

const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/signin", component: LoginPage, layout: NoHeaderLayout },
    { path: "/signup", component: RegisterPage, layout: NoHeaderLayout },
    { path: "/cart", component: CartPage },
    { path: "*", component: ErrorPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
