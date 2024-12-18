import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import DescriptionIcon from "@mui/icons-material/Description";
import ConstructionIcon from "@mui/icons-material/Construction";

const NAVIGATION = [
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        kind: "divider",
    },
    {
        segment: "maintenance",
        title: "Maintenance",
        icon: <ConstructionIcon />,
        children: [
            {
                segment: "maintenance1s",
                title: "Maintenance 1",
                icon: <DescriptionIcon />,
            },
            {
                segment: "maintenance2",
                title: "Maintenance 2",
                icon: <DescriptionIcon />,
            },
        ],
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function PageContent() {
    return (
        <Box
            sx={{
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                textAlign: "left",
            }}
        >
            {/* <Typography>Dashboard content for {pathname}</Typography> */}
        </Box>
    );
}

PageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function Layout({ children }) {
    const [pathname, setPathname] = React.useState("/dashboard");
    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    const [session, setSession] = React.useState({
        user: {
            name: "Arnel Rose",
            email: "anrose@ideaserv.com.ph",
            image: "/img/profile.png",
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: "Arnel Rose",
                        email: "anrose@ideaserv.com.ph",
                        image: "/img/profile.png",
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    return (
        <AppProvider
            branding={{
                logo: (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ width: "100%", height: "100%" }}
                    >
                        <img
                            src="/img/logo.jpg"
                            alt="logo"
                            style={{ width: "40px", height: "24px" }}
                        />
                    </Box>
                ),
                title: "INTERNAL TICKETING SYSTEM",
                homeUrl: "/",
            }}
            session={session}
            authentication={authentication}
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
        >
            <DashboardLayout defaultSidebarCollapsed>
                {/* <PageContent pathname={pathname} /> */}
                <main>{children}</main>
            </DashboardLayout>
        </AppProvider>
    );
}

export default Layout;
