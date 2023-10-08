import type { NextPage } from "next";
import Sidebar from "@/components/Sidebar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const DashboardNewsPage: NextPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={8}>
        <Box p="40px">
          <Breadcrumbs sx={{ marginBottom: "10px" }} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>
            <Typography color="text.primary">News</Typography>
          </Breadcrumbs>
          <h1>News</h1>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardNewsPage;
