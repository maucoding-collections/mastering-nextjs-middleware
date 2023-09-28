import type { NextPage } from "next";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";

const Home: NextPage = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CardContent
        sx={{
          width: "350px",
          border: "1px solid #e8e8e8",
          borderRadius: "10px",
          padding: "40px 30px",
        }}
      >
        <form>
          <Typography
            variant="h5"
            color="text.secondary"
            textAlign="center"
            gutterBottom
          >
            <strong>Login</strong>
          </Typography>
          <br />
          <FormControl sx={{ textAlign: "left", width: "100%" }}>
            <InputLabel htmlFor="my-input-email">Username</InputLabel>
            <Input
              id="my-input-email"
              name="my-input-email"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl sx={{ textAlign: "left", width: "100%" }}>
            <InputLabel htmlFor="my-input-password">Password</InputLabel>
            <Input
              id="my-input-password"
              name="my-input-password"
              type="password"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <br />
          <br />
          <br />
          <Box textAlign="center">
            <Button type="submit" variant="contained" size="large">
              Login
            </Button>
          </Box>
        </form>
      </CardContent>
    </Box>
  );
};

export default Home;
