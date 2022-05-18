import Test from "./components/Test";
import { MAIN_ROUTE, TEST_ROUTE } from "./const";
import Main from "./pages/Main";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: TEST_ROUTE,
        Component: Test,
    },
];
