import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/About";
import Project from "../pages/Projects/Project";
import Skills from "../pages/Skills/Skill";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Project />
            }, {
                path: '/skills',
                element: <Skills />
            },
        ]
    },
])

export default router