import { Container, Typography, Box, Avatar } from "@mui/material";
import React from "react";
import sysphus from "/sysphus.svg";
import { Heading, SubHeading } from "../util/color";

const TestimonialSection = () => {
  return (
    <Container
      sx={{
        py: { xs: 4, sm: 8 },

        bgcolor: "#F9FAFB",
        textAlign: "center",
      }}
      maxWidth={"xl"}
      id={"testimonial"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <img
          src={sysphus}
          alt="logo"
          style={{ width: "24px", height: "40px" }}
        />
        <Typography variant="span" sx={{ ml: "15px" }}>
          Sysphus
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "30px", md: "48px" },
          margin: "auto",
          color: Heading,
          fontWeight: 500,
        }}
      >
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </Typography>
      <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 1 }}>
        <Avatar
          src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5nn27swxAsGqmOi34~sN0fh8AouNKkxSCreVglokY1iR84Sbk4qicM87bTEyeFYLBl2pIODfasT-jRFbeDKfGscx49hBL84rM89DFOsJ9GYstIc3Rf3iAdbNBuGURQn3n1vfrRCQSyAA69pHK7WzdWyBAMTApGeYmj97eKGB05z4N6UMvWqCQsTW4MkP2I1ZQv0e5glrFRRsQlxOkXRdnOoy-SCtfdBqQRZ5f2KFsF8kQPCMOaMb4sxE-3qXU5KWXieCwdXV8VVwqQMjKAZ25qtPADUSu~KQ-cs2q67w5hR60Ppqs064SW0uMqodJKszOmQdzsGDhCJBicHUQOR1w__"
          sx={{ margin: "auto", width: "60px", height: "60px" }}
        />
        <Typography
          variant="subtitle2"
          sx={{ color: Heading, fontSize: "18px" }}
        >
          Candice Wu
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: SubHeading, fontSize: "16px" }}
        >
          Product Manager, Sisyphus
        </Typography>
      </Box>
    </Container>
  );
};

export default TestimonialSection;
