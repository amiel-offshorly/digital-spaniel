import React from "react";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, IconButton, Link, Typography, useTheme } from "@mui/material";

import dashboard01 from "../../assets/images/case-studies/dashboard01@2x.png";
// import lab01 from "../../assets/images/case-studies/lab01@2x.png";
// import socks from "../../assets/images/case-studies/socks@2x.png";

const CASE_STUDIES = [
  {
    image: dashboard01,
    title: "Project title here",
    description:
      "Short project description goes here To explain what the project is all about.",
  },
  // {
  //   image: socks,
  //   title: "Project title here",
  //   description:
  //     "Short project description goes here To explain what the project is all about.",
  // },
  // {
  //   image: lab01,
  //   title: "Project title here",
  //   description:
  //     "Short project description goes here To explain what the project is all about.",
  // },
];

const Section4 = () => {
  const { breakpoints } = useTheme();

  return (
    <Box
      sx={{
        py: 2,
        px: 4,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        position: "relative",
      }}
    >
      <Box
        sx={{
          maxWidth: breakpoints.values.lg,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
            letterSpacing: "0px",
            color: "#19293A",
          }}
        >
          Case Studies
        </Typography>
        <Typography
          sx={{
            maxWidth: "710px",
            textAlign: "center",
            font: "normal normal normal 21px/32px Open Sans",
            letterSpacing: "0px",
            color: "#506473",
          }}
        >
          Every project is different. We like to work collaboratively with our
          clients, tailoring each project to suit the needs of you and your
          business.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: breakpoints.values.lg,
          mx: "auto",
          display: "flex",
          maxHeight: "580px",
        }}
      >
        {CASE_STUDIES.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              [breakpoints.down("md")]: {
                flexDirection: "column",
              },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              sx={{
                py: 8,
                height: "100%",
                [breakpoints.down("md")]: { py: 0 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  px: 4,
                  backgroundColor: "#19293A",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  [breakpoints.down("md")]: { py: 4 },
                }}
              >
                <Typography
                  sx={{
                    font: "normal normal bold 24px/36px ITC Avant Garde Gothic Pro",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    font: "normal normal normal 18px/27px Open Sans",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                  }}
                >
                  {item.description}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Link
                    href="#"
                    sx={{
                      font: "normal normal 600 20px/27px Open Sans",
                      letterSpacing: "0px",
                      color: "#FFFFFF",
                      textUnderlineOffset: "6.5px",
                      textDecoration: "solid underline #FFF",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }}
                  >
                    Read more
                  </Link>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    display: "flex",
                  }}
                >
                  <IconButton
                    sx={{
                      borderRadius: 0,
                      backgroundColor: "#A7B1B8",
                      color: "#506473",
                      "&:hover": {
                        backgroundColor: "#FFF",
                        color: "#19293A",
                      },
                    }}
                  >
                    <KeyboardArrowLeft />
                  </IconButton>
                  <IconButton
                    sx={{
                      borderRadius: 0,
                      backgroundColor: "#A7B1B8",
                      color: "#506473",
                      "&:hover": {
                        backgroundColor: "#FFF",
                        color: "#19293A",
                      },
                    }}
                  >
                    <KeyboardArrowRight />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section4;
