import React from "react";

import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

import TextLink from "../TextLink";
import TextLinkWithHoverIcon from "../TextLinkWithHoverIcon";

const CATEGORIES = [
  {
    name: "Brand",
    links: [
      {
        name: "Brand Strategy",
        href: "#",
      },
      {
        name: "Logo & Name",
        href: "#",
      },
      {
        name: "Identity & Collateral",
        href: "#",
      },
    ],
  },
  {
    name: "Marketing",
    links: [
      {
        name: "Digital",
        href: "#",
      },
      {
        name: "Market Research",
        href: "#",
      },
    ],
  },
  {
    name: "Development",
    links: [
      {
        name: "eCommerce",
        href: "#",
      },
      {
        name: "Web Development",
        href: "#",
      },
      {
        name: "Mobile Apps",
        href: "#",
      },
    ],
  },
];

const Section2 = () => {
  const { breakpoints } = useTheme();

  return (
    <Box sx={{ backgroundColor: "#EDEFF1" }}>
      <Box
        sx={{
          maxWidth: breakpoints.values.lg,
          mx: "auto",
          pt: 21,
          pb: 20.5,
          px: 4,
          display: "flex",
          justifyContent: "center",
          [breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
              letterSpacing: "0px",
              color: "#19293A",
            }}
          >
            What are
          </Typography>
          <Typography
            sx={{
              font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
              letterSpacing: "0px",
              color: "#506473",
            }}
          >
            we capable of
          </Typography>
          <Typography
            sx={{
              mt: 7,
              maxWidth: "434px",
              font: "normal normal normal 21px/38px Open Sans",
              letterSpacing: "0px",
              color: "#506473",
            }}
          >
            By focusing on design as an enabler and putting a huge emphasis on
            our clients as co-producers, we create innovative, sustainable
            marketing that enhances brand experience and user engagement.
          </Typography>
          <Box sx={{ mt: 8 }}>
            <TextLink href="#">Our process</TextLink>
          </Box>
        </Box>
        <Box sx={{ flex: 1, [breakpoints.down("md")]: { mt: 8 } }}>
          <Grid container spacing={8}>
            {CATEGORIES.map((category) => (
              <Grid item xs={12} md={6} key={category.name}>
                <Typography
                  sx={{
                    font: "normal normal bold 21px/38px ITC Avant Garde Gothic Pro",
                    letterSpacing: "2.1px",
                    color: "#19293A",
                    textTransform: "uppercase",
                  }}
                >
                  {category.name}
                </Typography>
                <Stack sx={{ alignItems: "flex-start" }}>
                  {category.links.map((link) => (
                    <TextLinkWithHoverIcon
                      key={link.name}
                      href={link.href}
                      hoverIcon={
                        <KeyboardArrowRight
                          sx={{ color: "#fff", fontSize: "16px" }}
                        />
                      }
                    >
                      {link.name}
                    </TextLinkWithHoverIcon>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Section2;
