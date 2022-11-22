import React from "react";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";

import Project from "../Project";
import TextLink from "../TextLink";
import newspaper02 from "../../assets/images/projects/newspaper02@2x.png";
import newspaper from "../../assets/images/projects/newspaper@2x.png";
import makerek from "../../assets/images/projects/makerek@2x.png";
import rider01 from "../../assets/images/projects/rider01@2x.png";
import whellies01 from "../../assets/images/projects/whellies01@2x.png";

const TABS = ["All", "Branding", "Web Design", "Digital Marketing"];

const PROJECTS = [
  {
    title: "Make Ideas Happen",
    description:
      "A local paper with big ideas needed A sharp new brand to inspire readers.",
    href: "#",
    image: whellies01,
    wide: false,
  },
  {
    title: "Make Ideas Happen",
    description:
      "A local paper with big ideas needed A sharp new brand to inspire readers.",
    href: "#",
    image: newspaper02,
    wide: false,
  },
  {
    title: "Make Ideas Happen",
    description:
      "A local paper with big ideas needed A sharp new brand to inspire readers.",
    href: "#",
    image: makerek,
    wide: false,
  },
  {
    title: "Make Ideas Happen",
    description:
      "A local paper with big ideas needed A sharp new brand to inspire readers.",
    href: "#",
    image: newspaper,
    wide: true,
  },
  {
    title: "Make Ideas Happen",
    description:
      "A local paper with big ideas needed A sharp new brand to inspire readers.",
    href: "#",
    image: rider01,
    wide: false,
  },
];

const Section3 = () => {
  const { breakpoints } = useTheme();
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Box sx={{ maxWidth: breakpoints.values.lg, mx: "auto", py: 14, px: 4 }}>
      <Typography
        sx={{
          font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
          letterSpacing: "0px",
          color: "#19293A",
        }}
      >
        Some of our
      </Typography>
      <Typography
        sx={{
          font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
          letterSpacing: "0px",
          color: "#506473",
        }}
      >
        recent projects
      </Typography>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        sx={{
          mt: 7,
          "& .MuiTabs-indicator": {
            backgroundColor: "#C0345E",
          },
        }}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            sx={{
              minWidth: "190px",
              font: "normal normal bold 20px/27px Open Sans",
              letterSpacing: "0px",
              color: "#19293A",
              textTransform: "none",
              "&.Mui-selected": {
                color: "#19293A",
              },
            }}
          />
        ))}
      </Tabs>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {PROJECTS.map((project, index) => (
          <Grid key={index} item xs={12} md={project.wide ? 8 : 4}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextLink href="#">See all work</TextLink>
        <Box sx={{ display: "flex", gap: 4 }}>
          <IconButton
            sx={{
              borderRadius: 0,
              backgroundColor: "#50647380",
              svg: {
                color: "#506473",
              },
              "&:hover": {
                backgroundColor: "#19293A",
                svg: {
                  color: "#FFFFFF",
                },
              },
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: 0,
              backgroundColor: "#50647380",
              svg: {
                color: "#506473",
              },
              "&:hover": {
                backgroundColor: "#19293A",
                svg: {
                  color: "#FFFFFF",
                },
              },
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Section3;
