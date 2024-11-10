import { Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { Heading, SubHeading } from "../util/color";
import boltshift from "/boltshift.svg";
import featherdev from "/featherdev.svg";
import globalbank from "/globalbank.svg";
import lightbox from "/lightbox.svg";
import nietzsche from "/nietzshe.svg";
import spherule from "/spherule.svg";

const data = [
  {
    name: "BoltShift",
    logo: boltshift,
  },
  {
    name: "Lightbox",
    logo: lightbox,
  },
  {
    name: "FeatherDev",
    logo: featherdev,
  },
  {
    name: "Spherule",
    logo: spherule,
  },
  {
    name: "GlobalBank",
    logo: globalbank,
  },
  {
    name: "Nietzsche",
    logo: nietzsche,
  },
];

const CompaniesSection = () => {
  return (
    <Container
      sx={{
        py: { xs: 4, sm: 8 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      maxWidth={"xl"}
      id="our-clinets"
    >
      <Typography variant="p" sx={{ fontSize: "16px", color: SubHeading }}>
        Join 4,000+ companies already growing
      </Typography>
      <Grid2
        container
        spacing={2}
        width={"100%"}
        display={"flex"}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={"center"}
      >
        {data.map((company, ind) => (
          <Grid2
            item
            xs={6}
            md={2}
            sx={{ display: "flex", alignItems: "center" }}
            key={ind}
          >
            <img src={company.logo} style={{ width: "30px", height: "30px" }} />
            <Typography
              sx={{
                textTransform: "none",
                color: Heading,
                fontWeight: "bold",
                fontSize: { xs: "16px", md: "22px" },
              }}
            >
              {company.name}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default CompaniesSection;
