import {
    HomePage,
    LoginPage,
    RegisterPage,
    CartPage,
    DetailPage,
    ErrorPage,
} from "../components";

const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/signin", component: LoginPage },
    { path: "/signup", component: RegisterPage },
    { path: "/cart", component: CartPage },
    { path: "/product/:id", component: DetailPage },
    { path: "*", component: ErrorPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
