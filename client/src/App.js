import DataProvider from "./globalState";
import { Routes, Route } from "react-router";
import { publicRoutes } from "./routes";
import { defaultLayout } from "./components/layouts";
function App() {
    return (
        <>
            <DataProvider>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || defaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </DataProvider>
            ;
        </>
    );
}

export default App;
