import React from "react";
import { Container, Grid2, Typography } from "@mui/material";
import { Heading, SubHeading } from "../util/color";
import FeaturedIcon1 from "/Featuredicon1.svg";
import FeaturedIcon2 from "/Featuredicon2.svg";
import FeaturedIcon3 from "/Featuredicon3.svg";
import FeaturedIcon4 from "/Featuredicon4.svg";
import FeaturedIcon5 from "/Featuredicon5.svg";
import FeaturedIcon6 from "/Featuredicon6.svg";

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
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    logo: FeaturedIcon3,
  },
  {
    name: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    logo: FeaturedIcon4,
  },
  {
    name: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    logo: FeaturedIcon5,
  },
  {
    name: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    logo: FeaturedIcon6,
  },
];

const FeaturesSection = () => {
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
      id="features"
    >
      <>
        <Typography variant="p" sx={{ color: SubHeading }}>
          Features
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "30px", sm: "36px" }, fontWeight: 600 }}
        >
          Analytics that feels like it’s from the future
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
      </>
      <Grid2
        container
        rowGap={4}
        columnGap={4}
        sx={{ display: "flex", justifyContent: "center" }}
        width={"100%"}
        my={4}
      >
        {data.map((feature, idx) => (
          <Grid2
            item
            xs={12}
            md={6}
            lg={4}
            textAlign={"center"}
            maxWidth={400}
            key={idx}
          >
            <img src={feature.logo} style={{ width: "40px", height: "40px" }} />
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "18px", md: "20px" }, color: Heading }}
              textAlign={"center"}
            >
              {feature.name}
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "16px", color: SubHeading }}
              textAlign={"center"}
            >
              {feature.description}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default FeaturesSection;
