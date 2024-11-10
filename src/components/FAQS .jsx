import React from "react";
import { Avatar, Button, Container, Grid2, Typography } from "@mui/material";
import { Heading, SubHeading, ThemeDark } from "../util/color";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const FAQS = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      id="faqs"
    >
      <>
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "30px", sm: "36px" }, fontWeight: 600 }}
        >
          Frequently asked questions
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: SubHeading,
            textAlign: "center",
            fontSize: { xs: "18px", md: "20px" },
          }}
        >
          Everything you need to know about the product and billing.
        </Typography>
      </>
      <Box
        component="div"
        width={{ xs: "100%", md: "70%" }}
        margin={"auto"}
        my={6}
      >
        {accordionData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            sx={{ boxShadow: 0 }}
            textAlign={"left"}
          >
            <AccordionSummary
              expandIcon={
                expanded === item.id ? (
                  <RemoveCircleOutlineIcon />
                ) : (
                  <AddCircleOutlineIcon />
                )
              }
              ExpandMoreIcon={<RemoveCircleOutlineIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
              sx={{ fontSize: "18px", color: Heading, fontWeight: 500 }}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{ fontSize: "16px", color: SubHeading, fontWeight: 400 }}
            >
              {item.content}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Container sx={{ bgcolor: "#F9FAFB", py: 4 }} id="contact-us">
        <Box
          margin={"auto"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={
              "https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giTRibkmJRZjuoe51ZzkkJhYfsGD-He~HLHlXCw5EyeuCzHKC1isi~e1QnRW9UvfIq562pPD6pFFDiHVjdLXulxMmx53pLtqI~nh3ZiPRZH4MEHjgNro0b4VyFitte6sbp2i22OmVl-IibuS9IAqtlg2KkqbxFqD3jrLEHonjqTSWr8me2l1NkrbkJgOXhO3~QifquFJgiXay6A9xTMiOvLPImYIwQWnLqrsz06Z7mgnL~v7388thcx7VypeVOAmHZ-BOU4TEncUBzpSCGn0HcUAHCgvtK0bYNis2IF4BaSiq0-8zBLUnI6a67KkdSbjCY08dLByZW~1BSyxpvnmxQ__"
            }
            sx={{
              width: "48px",
              height: "48px",
              mr: "-18px",

              zIndex: 1,
            }}
          />
          <Avatar
            src={
              "https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=By3GomLLaiJN2DNoO8RZDNAMyWP~n-DPrdMOmE2zrEm8HA07yD0Nfn-9mXSUCaxNCQu420DRy3D~QKsq2abRLUqkbaTtoSJkk0oiKFufN7Ef7w~OycCWfOxOxTXD6PUCPgrpSvfgqVr0mOdgxtHIdTM2MZJetoWtOtm0mgCjfIrL6olXlEhWOYHxIEXn0vA6HViYCmiQ4ehc5yXoOJyRBPO7lM6QwCnkrNYuxyZVNAn94TBH9iGztALHuuSGdVKz8gS5z2COPjHAq-pH8GglQkf-2o22s4EDKO8J0Ij2gCA-d~9FduR~aMT35kgboSXo~w7IjWxD47qoT2r08sVkjA__"
            }
            sx={{
              width: "56px",
              height: "56px",

              zIndex: 2,
            }}
          />
          <Avatar
            src={
              "https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gmDHyTADmFh2qcBkpgaK8~zuePjTFOvV0B0yYBx8e1UHG9a0JJsLGH28m79eX9~lDnbrtGI5gWlGkVXwRhxukzgMoIT1sZTI2aEqRlqqKgBorZ6s3kVOq9uJd6dCohMb7K9FTd8~UU2IHicxuV2Er5A~VpC4YT1YA1UlTfMWjnM-SGXLWwZLUm8-EbiWqSu-XIEqPQzIeBd4d2Xx~2SufLTkz049wh-EoUU8QE1wbFdFMMTqkih62N4PJk8dM23owQ2NVgKkRd6~d4TuCpGkFw31duhLbKwQ-6lxRO5ApvgZ09J8H6wqzbFoVSKXfOmM5I9T4q9Ralj0V4fCWSIqrQ__"
            }
            sx={{
              width: "48px",
              height: "48px",
              ml: "-18px",

              zIndex: 1,
            }}
          />
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "20px", fontWeight: 600, mt: 4 }}
        >
          Still have questions?
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: SubHeading,
            textAlign: "center",
            fontSize: "16px",
            mt: 1,
          }}
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: ThemeDark,
            textTransform: "none",
            mt: 4,
          }}
          disableElevation
        >
          Get in touch
        </Button>
      </Container>
    </Container>
  );
};

export default FAQS;

const accordionData = [
  {
    id: 1,
    title: "Is there a free trial available?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    title: "Can I change my plan later?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 3,
    title: "What is your cancellation policy?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 4,
    title: "Can other info be added to an invoice?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 5,
    title: "How does billing work?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 6,
    title: "How do I change my account email?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];
