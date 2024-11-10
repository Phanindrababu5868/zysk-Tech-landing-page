import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Chip,
  Divider,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";

import logo from "/logo.svg";
import { Heading } from "../util/color";

const Footer = () => {
  return (
    <Box component="footer" sx={{ pt: 8, pb: 5 }} margin="auto">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {footerData.map((section, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {section.title}
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      variant="body2"
                      color="text.primary"
                      underline="none"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        my: 0.5,
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      {link.name}
                      {link.isNew && (
                        <Chip
                          label="New"
                          color="primary"
                          size="small"
                          sx={{
                            ml: 1,
                            border: "solid 1px #ABEFC6",
                            bgcolor: "#ECFDF3",
                            color: "#067647",
                          }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              src={logo}
              alt="Logo"
              sx={{ width: 32, height: 32, mr: 1 }}
              component={"img"}
            />
            <Typography
              variant="body2"
              color={Heading}
              maxWidth={"max-content"}
              fontSize={"20px"}
            >
              Zysk Tech
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            maxWidth={"max-content"}
          >
            © 2077 Untitled UI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

const footerData = [
  {
    title: "Product",
    links: [
      { name: "Overview" },
      { name: "Features" },
      { name: "Solutions", isNew: true },
      { name: "Tutorials" },
      { name: "Pricing" },
      { name: "Releases" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us" },
      { name: "Careers" },
      { name: "Press" },
      { name: "News" },
      { name: "Media kit" },
      { name: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog" },
      { name: "Newsletter" },
      { name: "Events" },
      { name: "Help centre" },
      { name: "Tutorials" },
      { name: "Support" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { name: "Startups" },
      { name: "Enterprise" },
      { name: "Government" },
      { name: "SaaS centre" },
      { name: "Marketplaces" },
      { name: "Ecommerce" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Twitter" },
      { name: "LinkedIn" },
      { name: "Facebook" },
      { name: "GitHub" },
      { name: "AngelList" },
      { name: "Dribbble" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms" },
      { name: "Privacy" },
      { name: "Cookies" },
      { name: "Licenses" },
      { name: "Settings" },
      { name: "Contact" },
    ],
  },
];
