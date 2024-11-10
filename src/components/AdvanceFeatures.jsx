import React from "react";
import {
  Container,
  Grid as Grid2,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { Heading, SubHeading, ThemeDark, ThemeLight } from "../util/color";

import FeaturedIcon1 from "/Featuredicon1.svg";
import FeaturedIcon2 from "/Featuredicon2.svg";
import FeaturedIcon3 from "/Featuredicon3.svg";

import dashboard from "/dashboard.svg";
import dashbordPhone from "/dashbord-phone.svg";

const AdvanceFeaturesSection = () => {
  return (
    <Container
      sx={{
        my: 8,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        py: { xs: 4, sm: 8 },
      }}
      maxWidth={"xl"}
      id="advanced-features"
    >
      <Typography
        variant="body1"
        sx={{
          color: ThemeDark,
          bgcolor: ThemeLight,
          border: `solid 1px ${ThemeDark}`,
          borderRadius: "14px",
          maxWidth: "max-content",
          p: "5px",
          margin: "auto",
        }}
      >
        Features
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: "30px", sm: "36px" }, fontWeight: 600 }}
      >
        Cutting-edge features for advanced analytics
      </Typography>
      <Typography
        variant="body1"
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

      {/* Responsive image using CSS only */}
      <Box
        component="img"
        sx={{
          content: {
            xs: `url(${dashbordPhone})`,
            sm: `url(${dashboard})`,
          },
        }}
        alt="Dashboard"
      />

      <Grid2
        container
        rowGap={4}
        columnGap={4}
        sx={{ display: "flex", justifyContent: "center" }}
        width={"100%"}
      >
        {data.map((feature) => (
          <Grid2
            item
            xs={12}
            md={6}
            lg={3}
            textAlign={"center"}
            maxWidth={400}
            key={feature.name}
          >
            <img
              src={feature.logo}
              alt={feature.name}
              style={{ width: "40px", height: "40px" }}
            />
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "18px", md: "20px" }, color: Heading }}
              textAlign={"center"}
            >
              {feature.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", color: SubHeading }}
              textAlign={"center"}
            >
              {feature.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                mt: 2,
              }}
            >
              <Typography
                variant="span"
                sx={{
                  fontSize: "12px",
                  color: ThemeDark,
                  marginRight: "6px",
                  fontWeight: 600,
                }}
              >
                Lear More{"   "}
              </Typography>
              <ArrowRightAltIcon sx={{ fontSize: "12px", color: ThemeDark }} />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default AdvanceFeaturesSection;

const data = [
  {
    name: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    logo: FeaturedIcon1,
  },
  {
    name: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    logo: FeaturedIcon2,
  },
  {
    name: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
    logo: FeaturedIcon3,
  },
];
