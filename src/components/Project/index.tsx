import React from "react";

import { Box, Link, Typography } from "@mui/material";

type Props = {
  image: string;
  title: string;
  description: string;
  href: string;
};

const Project = (project: Props) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        height: "420px",
        backgroundImage: `url(${project.image})`,
        "&:hover": {
          backgroundImage: `linear-gradient(180deg, #19293A1A 0%, #19293A 100%), url(${project.image})`,
        },
        transition: "all 0.4s ease-in-out",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        p: 4,
        borderRadius: "10px",
      }}
    >
      {hover && (
        <>
          <Typography
            sx={{
              font: "normal normal bold 24px/36px ITC Avant Garde Gothic Pro",
              letterSpacing: "0px",
              color: "#FFFFFF",
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              mt: 2,
              font: "normal normal normal 18px/27px Open Sans",
              letterSpacing: "0px",
              color: "#FFFFFF",
            }}
          >
            {project.description}
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Link
              href={project.href}
              sx={{
                font: "normal normal 600 20px/27px Open Sans",
                letterSpacing: "0px",
                color: "#FFFFFF",
                textUnderlineOffset: "6.5px",
                textDecoration: "solid underline #FFF",
                "&:hover": {
                  textDecoration: "solid underline #C0345E",
                },
              }}
            >
              Full project
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Project;
