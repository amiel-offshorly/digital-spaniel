import React from "react";

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Input, Link, Stack, Typography, useTheme } from "@mui/material";

import TextLink from "../TextLink";

const SITE_MAP = [
  {
    title: "Explore",
    links: [
      {
        name: "Services",
        href: "#",
      },
      {
        name: "Work",
        href: "#",
      },
      {
        name: "About",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Brand",
        href: "#",
      },
      {
        name: "Development",
        href: "#",
      },
      {
        name: "Marketing",
        href: "#",
      },
    ],
  },
];

const SOCIAL_MEDIA_LINKS = [
  {
    icon: <Facebook fontSize="large" sx={{ color: "#9EA9B1" }} />,
    href: "#",
  },
  {
    icon: <Twitter fontSize="large" sx={{ color: "#9EA9B1" }} />,
    href: "#",
  },
  {
    icon: <Instagram fontSize="large" sx={{ color: "#9EA9B1" }} />,
    href: "#",
  },
  {
    icon: <LinkedIn fontSize="large" sx={{ color: "#9EA9B1" }} />,
    href: "#",
  },
];

const Footer = () => {
  const { breakpoints } = useTheme();

  return (
    <Box
      sx={{ maxWidth: breakpoints.values.lg, mx: "auto", pt: 16, pb: 4, px: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            sx={{
              font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
              letterSpacing: "0px",
              color: "#19293A",
            }}
          >
            We're a brands
          </Typography>
          <Typography
            sx={{
              font: "normal normal bold 48px/57px ITC Avant Garde Gothic Pro",
              letterSpacing: "0px",
              color: "#506473",
            }}
          >
            best friend
          </Typography>
          <Box sx={{ mt: 21 }}>
            <TextLink href="#">Let's talk</TextLink>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              [breakpoints.down("md")]: {
                mt: 8,
              },
            }}
          >
            {SITE_MAP.map((item) => (
              <Stack key={item.title} gap={3}>
                <Typography
                  sx={{
                    font: "normal normal bold 21px/38px ITC Avant Garde Gothic Pro",
                    letterSpacing: "2.1px",
                    color: "#19293A",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </Typography>
                <Stack>
                  {item.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      sx={{
                        font: "normal normal 600 21px/58px Open Sans",
                        letterSpacing: "0.53px",
                        color: "#506473",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            ))}
            <Stack gap={4.5}>
              <Typography
                sx={{
                  font: "normal normal bold 21px/38px ITC Avant Garde Gothic Pro",
                  letterSpacing: "2.1px",
                  color: "#19293A",
                  textTransform: "uppercase",
                }}
              >
                Questions?
              </Typography>
              <Stack gap={3}>
                <Box>
                  <Typography
                    sx={{
                      font: "normal normal 600 21px/32px Open Sans",
                      letterSpacing: "0.53px",
                      color: "#506473",
                    }}
                  >
                    Call Us
                  </Typography>
                  <Input
                    type="tel"
                    value="0121 345 678"
                    readOnly
                    disableUnderline
                    sx={{
                      font: "normal normal normal 21px/32px Open Sans",
                      letterSpacing: "0.53px",
                      color: "#506473",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      font: "normal normal 600 21px/32px Open Sans",
                      letterSpacing: "0.53px",
                      color: "#506473",
                    }}
                  >
                    Email Us
                  </Typography>
                  <Link
                    href="mailto:info@digitalspaniel.co.uk"
                    sx={{
                      font: "normal normal normal 21px/32px Open Sans",
                      letterSpacing: "0.53px",
                      color: "#506473",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    info@digitalspaniel.co.uk
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            font: "normal normal 600 21px/32px Open Sans",
            letterSpacing: "0.53px",
            color: "#50647380",
          }}
        >
          Copyright © Digital Spaniel 2019. All rights reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            [breakpoints.down("md")]: {
              mt: 8,
            },
          }}
        >
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.icon}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
