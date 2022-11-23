import React from "react";

import { Box, Typography, useTheme } from "@mui/material";

import TextLink from "../TextLink";
import hero2x from "../../assets/images/hero@2x.png";

const Hero = () => {
  const { breakpoints } = useTheme();

  return (
    <Box
      component="section"
      sx={{
        maxWidth: breakpoints.values.lg,
        minHeight: "100vh",
        mx: "auto",
        px: 4,
        display: "flex",
        position: "relative",
        [breakpoints.down("md")]: {
          pt: 8,
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            font: "normal normal 600 16px/72px Open Sans",
            letterSpacing: "0.8px",
            color: "#C0345E",
            opacity: "0.75",
          }}
        >
          BRAND, DEV, ECOM, MARKETING
        </Typography>
        <Typography
          sx={{
            mt: 6.875,
            font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
            letterSpacing: "0px",
            color: "#19293A",
          }}
        >
          We unleash
        </Typography>
        <Typography
          sx={{
            font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
            letterSpacing: "0px",
            color: "#506473",
          }}
        >
          business potential
        </Typography>
        <Typography
          sx={{
            mt: 6.25,
            maxWidth: "413px",
            font: "normal normal normal 21px/38px Open Sans",
            letterSpacing: "0px",
            color: "#506473",
          }}
        >
          We create brand experiences which are memorable and distinct. Our
          experienced team create and develop brands with personality and
          resonance.
        </Typography>
        <Box sx={{ mt: 7.75 }}>
          <TextLink href="#">Let's talk</TextLink>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          maxWidth: breakpoints.values.lg,
          width: "49.5vw",
          overflow: "hidden",
          [breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <img
          src={hero2x}
          alt="Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
