import React from "react";
import { Container, Box, Typography, Icon, Button } from "@mui/material";
import { Heading, SubHeading, ThemeDark, ThemeLight } from "../util/color";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const HeroSection = () => {
  return (
    <Container
      sx={{
        py: { xs: 4, sm: 8 },
        mb: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
      maxWidth={"xl"}
      id="home"
    >
      <Box
        sx={{
          border: `solid 1px ${ThemeDark}`,
          borderRadius: "14px",
          p: "4px",
          maxWidth: "max-content",
          bgcolor: ThemeLight,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          variant="span"
          sx={{
            borderColor: ThemeDark,
            borderRadius: "10px",
            border: "solid",
            borderWidth: "1px",
            px: "10px",
            textTransform: "none",
            color: ThemeDark,
            bgcolor: "white",
            mr: "10px",
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          New feature
        </Typography>
        <Typography
          variant="span"
          sx={{
            textTransform: "none",
            color: ThemeDark,
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          Check out the team dashboard
        </Typography>
        <ArrowRightAltIcon
          sx={{
            color: ThemeDark,
            fontSize: { xs: "12px", sm: "14px" },
            ml: "10px",
          }}
        />
      </Box>
      <Typography
        variant="h1"
        sx={{
          color: Heading,
          fontSize: { xs: "32px", md: "70px" },
          textAlign: "center",
          lineHeight: { xs: "44px", md: "72px" },
          fontWeight: 600,
        }}
      >
        Beautiful analytics to grow smarter
      </Typography>
      <Typography
        variant="p"
        sx={{
          color: SubHeading,
          textAlign: "center",
          fontSize: { xs: "18px", md: "20px" },
        }}
      >
        Powerful, self-serve product and growth analytics to help you convert,
        <br />
        engage, and retain more users. Trusted by over 4,000 startups.
      </Typography>
      <Box margin={"auto"} sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PlayCircleOutlineIcon />}
          sx={{ borderColor: ThemeLight, color: ThemeDark }}
        >
          Demo
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: ThemeDark,
            textTransform: "none",
          }}
          disableElevation
        >
          Sign Up
        </Button>
      </Box>
      <Box
        component={"img"}
        src={
          "https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCxh4HkZRzbhpDbBiKOIV4mTVjBzbRQEgg268Lidl98wjBj2Wy~HFf38IOf9bSiu024iK11vw3bUThEXuZ1EQr8iz-d-A4lLP-0H5WdFF6f1~FGYO8TdmSq8X8uhKk7MXZmGd9oJtb--Sn5YpNWO6FkIg6sC3THVqXfMJwv9sHOIQZws8bYk~bAfEOG-hPecEulCPusFJ7JQfkyZ8hSv6Oi-G9JQEPBe2TSYX2hyoLVsiIAKdTdg0pm0op5iMX6ml4REkX712ytyjD~BCK6NNofR~KEXKn0GMvp344Se4FUDbdCaGJiKqJXObLSTQrYQiYwf8fY9YuAH0Z6NB4gPUA__"
        }
        sx={{
          border: { xs: `solid 4px ${Heading}`, md: `solid 6px ${Heading}` },
          borderRadius: { xs: "6px", md: "12px" },
        }}
      />
    </Container>
  );
};

export default HeroSection;
