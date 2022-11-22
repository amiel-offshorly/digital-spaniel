import React from "react";

import { Close, Menu } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  useTheme,
} from "@mui/material";

import logo from "../../assets/images/logo.png";

const links = ["Services", "Work", "About", "Blog", "Contact"];

const Header = () => {
  const { breakpoints } = useTheme();

  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen((prev) => !prev);
  };

  return (
    <Box
      component="header"
      sx={{ width: "100%", zIndex: 1, position: "absolute" }}
    >
      <Box
        sx={{
          maxWidth: breakpoints.values.xl,
          mx: "auto",
          p: 4,
          display: "flex",
        }}
      >
        <IconButton
          onClick={toggleNavMenu}
          sx={{
            mr: 4,
            [breakpoints.up("md")]: {
              display: "none",
            },
          }}
        >
          <Menu />
        </IconButton>
        <Box
          sx={{
            flex: 1,
            height: "90px",
            [breakpoints.down("md")]: {
              height: "60px",
            },
          }}
        >
          <img
            src={logo}
            alt="Digital Spaniel"
            style={{ height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box
          component="nav"
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "60px",
            [breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href="#"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
                font: "normal normal 600 20px/27px Open Sans",
                letterSpacing: "0px",
                color: "#FFFFFF",
                textUnderlineOffset: "4.5px",
              }}
            >
              {link}
            </Link>
          ))}
        </Box>
      </Box>
      <Drawer
        open={isNavMenuOpen}
        onClose={toggleNavMenu}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <List>
            {links.map((link, index) => (
              <ListItem key={index}>
                <Link
                  href="#"
                  onClick={toggleNavMenu}
                  sx={{
                    font: "normal normal 600 20px/27px Open Sans",
                    letterSpacing: "0px",
                    color: "#000",
                    textUnderlineOffset: "4.5px",
                  }}
                >
                  {link}
                </Link>
              </ListItem>
            ))}
          </List>
          <IconButton onClick={toggleNavMenu}>
            <Close />
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
