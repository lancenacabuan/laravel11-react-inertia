import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Height, HideImage } from "@mui/icons-material";

const NAVIGATION = [
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
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

function DemoPageContent({ pathname }) {
    return (
        <Box
            sx={{
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutAccount(props) {
    const { window } = props;

    const [session, setSession] = React.useState({
        user: {
            name: "Arnel Rose",
            email: "anrose@ideaserv.com.ph",
            image: "/img/esor.jpg",
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: "Arnel Rose",
                        email: "anrose@ideaserv.com.ph",
                        image: "/img/esor.jpg",
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    const router = useDemoRouter("/dashboard");

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // preview-start
        <AppProvider
            branding={{
                logo: (
                    <img
                        src="/img/idsi.png"
                        alt="logo"
                        sx={{ width: 40, Height: 40 }}
                    />
                ),
                title: "INTERNAL TICKETING SYSTEM",
                homeUrl: "/",
            }}
            session={session}
            authentication={authentication}
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}

export default DashboardLayoutAccount;

// import { extendTheme, styled } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { PageContainer } from "@toolpad/core/PageContainer";
// import Grid from "@mui/material/Grid2";

// const NAVIGATION = [
//     {
//         kind: "header",
//         title: "Main items",
//     },
//     {
//         segment: "dashboard",
//         title: "Dashboard",
//         icon: <DashboardIcon />,
//     },
//     {
//         segment: "orders",
//         title: "Orders",
//         icon: <ShoppingCartIcon />,
//     },
//     {
//         kind: "divider",
//     },
//     {
//         kind: "header",
//         title: "Analytics",
//     },
//     {
//         segment: "reports",
//         title: "Reports",
//         icon: <BarChartIcon />,
//         children: [
//             {
//                 segment: "sales",
//                 title: "Sales",
//                 icon: <DescriptionIcon />,
//             },
//             {
//                 segment: "traffic",
//                 title: "Traffic",
//                 icon: <DescriptionIcon />,
//             },
//         ],
//     },
//     {
//         segment: "integrations",
//         title: "Integrations",
//         icon: <LayersIcon />,
//     },
// ];

// const demoTheme = extendTheme({
//     colorSchemes: { light: true, dark: true },
//     colorSchemeSelector: "class",
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 600,
//             lg: 1200,
//             xl: 1536,
//         },
//     },
// });

// function useDemoRouter(initialPath) {
//     const [pathname, setPathname] = React.useState(initialPath);

//     const router = React.useMemo(() => {
//         return {
//             pathname,
//             searchParams: new URLSearchParams(),
//             navigate: (path) => setPathname(String(path)),
//         };
//     }, [pathname]);

//     return router;
// }

// const Skeleton = styled("div")(({ theme, height }) => ({
//     backgroundColor: theme.palette.action.hover,
//     borderRadius: theme.shape.borderRadius,
//     height,
//     content: '" "',
// }));

// const Layout = (props) => {
//     const { window } = props;

//     const router = useDemoRouter("/dashboard");

//     // Remove this const when copying and pasting into your project.
//     const demoWindow = window ? window() : undefined;

//     return (
//         <>
//             <AppProvider
//                 navigation={NAVIGATION}
//                 router={router}
//                 theme={demoTheme}
//                 window={demoWindow}
//             >
//                 <DashboardLayout>
//                     <PageContainer>
//                         <Grid container spacing={1}>
//                             <Grid size={5} />
//                             <Grid size={12}>
//                                 <Skeleton height={14} />
//                             </Grid>
//                             <Grid size={12}>
//                                 <Skeleton height={14} />
//                             </Grid>
//                             <Grid size={4}>
//                                 <Skeleton height={100} />
//                             </Grid>
//                             <Grid size={8}>
//                                 <Skeleton height={100} />
//                             </Grid>

//                             <Grid size={12}>
//                                 <Skeleton height={150} />
//                             </Grid>
//                             <Grid size={12}>
//                                 <Skeleton height={14} />
//                             </Grid>

//                             <Grid size={3}>
//                                 <Skeleton height={100} />
//                             </Grid>
//                             <Grid size={3}>
//                                 <Skeleton height={100} />
//                             </Grid>
//                             <Grid size={3}>
//                                 <Skeleton height={100} />
//                             </Grid>
//                             <Grid size={3}>
//                                 <Skeleton height={100} />
//                             </Grid>
//                         </Grid>
//                     </PageContainer>
//                 </DashboardLayout>
//             </AppProvider>
//             {/* <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="logo"
//                     ></IconButton>
//                     <Typography
//                         variant="h6"
//                         component="div"
//                         sx={{ flexGrow: 1, fontWeight: 600 }}
//                     >
//                         INTERNAL TICKETING SYSTEM
//                     </Typography>
//                     <Stack direction="row" spacing={2}>
//                         <Button color="inherit">Login</Button>
//                     </Stack>
//                 </Toolbar>
//             </AppBar>
//             <main>{children}</main> */}
//             <main>{children}</main>
//         </>
//     );
// };

// export default Layout;
