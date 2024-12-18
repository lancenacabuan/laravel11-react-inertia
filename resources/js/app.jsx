import "./bootstrap";
import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "@/Layouts/Layout";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];

        // Check if the page is "Home" and skip the layout
        // if (name === "Home") {
        //     page.default.layout = page; // No layout for Home.jsx
        // } else {
        //     page.default.layout =
        //         page.default.layout || ((page) => <Layout children={page} />);
        // }
        // return page;

        page.default.layout =
            page.default.layout || ((page) => <Layout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
