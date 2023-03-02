import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { UserContext } from "../contexts/User";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { login, setLogin, isLogged, setIsLogged } =
    React.useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={() => setLogin("")}
          >
            <CalendarTodayIcon />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, paddingLeft: "10px" }}
          >
            Agenda
          </Typography>

          {isLogged === true && (
            <>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <Button
                  variant="text"
                  color="inherit"
                  onClick={() => {
                    setLogin("");
                    setIsLogged(false);
                  }}
                >
                  Sair
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
