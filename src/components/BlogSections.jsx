import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { Heading, SubHeading, ThemeDark } from "../util/color";

const BlogSections = () => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="xl" id="blogs">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2 },
            }}
          >
            <Typography>Our blog</Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "30px", sm: "36px" }, fontWeight: 600 }}
            >
              Lastest blog posts
            </Typography>
            <Typography
              sx={{
                color: SubHeading,

                fontSize: { xs: "18px", md: "20px" },
              }}
            >
              Tool and strategies modern teams need to help their companies
              grow.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: ThemeDark,
              textTransform: "none",
              mt: 4,
              maxHeight: "40px",
              display: { xs: "none", md: "flex" },
            }}
            disableElevation
          >
            View all blogs
          </Button>
        </Box>
        <ArticleList />
        <Button
          variant="contained"
          sx={{
            bgcolor: ThemeDark,
            textTransform: "none",
            mt: 4,
            maxHeight: "40px",
            display: { xs: "flex", md: "none" },
            width: "100%",
          }}
          disableElevation
        >
          View all blogs
        </Button>
      </Container>
      <Container
        sx={{ py: 8, bgcolor: "#F9FAFB", textAlign: "center" }}
        maxWidth="xl"
        id="start-trail"
      >
        <Typography
          variant="subtitle2"
          sx={{ fontSize: { xs: "30px", md: "36px" }, fontWeight: 600, mt: 4 }}
        >
          Still have questions?
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: SubHeading,

            fontSize: "16px",
            mt: 1,
          }}
        >
          Join over 4,000+ startups already growing with Untitled.
        </Typography>
        <Box>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              mt: 4,
              color: Heading,
              fontWeight: 600,
              borderColor: "#777777",
              mr: 2,
              display: { xs: "block", sm: "inline" },
              width: { xs: "100%", sm: "max-content" },
            }}
            disableElevation
          >
            Learn More
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: ThemeDark,
              textTransform: "none",
              mt: 4,
              display: { xs: "block", sm: "inline" },
              width: { xs: "100%", sm: "max-content" },
            }}
            disableElevation
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default BlogSections;

const ArticleList = () => (
  <Box sx={{ pt: 8 }}>
    <Grid container spacing={4}>
      {articles.map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ArticleCard article={article} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

const ArticleCard = ({ article }) => (
  <>
    <Card
      sx={{
        maxWidth: 440,
        boxShadow: 0,
        borderRadius: 0,
        m: { xs: "auto", sm: "10px" },
      }}
    >
      <CardMedia
        component="img"
        height="240px"
        image={article.image}
        alt={article.title}
        maxWidth={350}
      />

      <CardContent>
        <Typography variant="caption" color="primary">
          {article.category}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" gutterBottom>
            {article.title}
          </Typography>
          <ArrowOutwardIcon fontSize="small" sx={{ ml: 1 }} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
        <Box mt={2} display="flex" alignItems="center">
          <Avatar
            src={article.author.avatar}
            alt={article.author.name}
            sx={{ width: 40, height: 40, mr: 1 }}
          />
          <div>
            <Typography
              variant="caption"
              color="text.primary"
              sx={{ display: "block" }}
            >
              {article.author.name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block" }}
            >
              {article.author.date}
            </Typography>
          </div>
        </Box>
      </CardContent>
    </Card>
  </>
);

const articles = [
  {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2024",
      avatar:
        "https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=By3GomLLaiJN2DNoO8RZDNAMyWP~n-DPrdMOmE2zrEm8HA07yD0Nfn-9mXSUCaxNCQu420DRy3D~QKsq2abRLUqkbaTtoSJkk0oiKFufN7Ef7w~OycCWfOxOxTXD6PUCPgrpSvfgqVr0mOdgxtHIdTM2MZJetoWtOtm0mgCjfIrL6olXlEhWOYHxIEXn0vA6HViYCmiQ4ehc5yXoOJyRBPO7lM6QwCnkrNYuxyZVNAn94TBH9iGztALHuuSGdVKz8gS5z2COPjHAq-pH8GglQkf-2o22s4EDKO8J0Ij2gCA-d~9FduR~aMT35kgboSXo~w7IjWxD47qoT2r08sVkjA__",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilSuag86s-4bHROY2s4ehp7e0qsHudYd0U460ewFwBw76NdxJ0VDzjibpT5mQF92Tfr6pcVDmX-dJL6KnTm0TNrOtXeQg1d~mlODANgzJSqgxC9Iu4sFeNm5H1hiLdR4Xx456zOpnUYrsyxPrPWkt48XdjG0r2x6VSLwaD0B82VHXEBbqWcMAE0ePTYI2FrYq1HKMzCyXTMc8M4FpJ8Io2S57FQ46ZFcPIUR8OtTJIGZtAueVWqPHLhPZosaweqvIKlbC26~YNV41NY~uhWF4PyYPRlwdamv~mGhmUXNbkwUcB39KZmmXYl6PKDbKasPnXQ0CSeCrgsBi3K5km610Q__",
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: {
      name: "Phoenix Baker",
      date: "19 Jan 2024",
      avatar:
        "https://s3-alpha-sig.figma.com/img/1173/f077/5d4f6c2c6c7caf725e2ec6d6ed6aca1d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbEi~Y9U2YKagEKO-9Dl5p-MkAvr9GcuIsbLcSOuKESqdMFJEXnNsV8o8B3WYd-sMr9oEZ27feFeryLeVWcCa3HOFpoArj4WZvi38bFPcVE652~AmaiUZPk6kkpK8Fb9ZO~Mt0nStiAjzbkuF1Ho--4YYe-IFC5KuECHI3x66-wToACvo9D0wvtIAEqQfC9yPQvXAEDoGwo8UE49VOt1p7M4-8cFvS57fCwUXirkz8VzK6alZmB1YmUtrv75x5oI7s-l10seq8E2h2KFaB7Dwse0QgVXC2-5ijE2~TR221FfrK99TJo-3-1JltAHQ7NnTuadlUuFdHg7oKCT7xoenA__",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akTWfdKG0X3yCcleRklzWD0j4tjPlX8LnMZmiwdY2d1ih9H~fMORhFAZecq9Xb4jntKWk36nF~J4IeCYgzTSy4kIiHyonQl45z8XTX7Nrv84gRnv4ES1scfOxTTvH7I0r~-9H48QzyTF3WWbW0335g95faa6ZpjjqFYlATHolIWta3CP1UbQfgOa1IjI-VB~Utxa~ReeIiYtvv729MPbS9m71IPEeLzCqS4wL6L6tVOituYdKgYsIh4Eu6ZiHc1giC2Nx2F7571a2uECD4uhudy0phoCtLiLpqRvjP6854b3Suc-mqW5wEg68US4WECNZCJLyD3gWfGv0F-yipxokQ__",
  },
  {
    category: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: {
      name: "Lana Steiner",
      date: "18 Jan 2024",
      avatar:
        "https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjB6JcyPc9kJ9EpNYpiNOVwpuKkux-QIFP36HmPiXb49e9soueV~TSy6RF1p57HhRHD5j0guM7b5QG~HF6KMZ-FW6ev~0Yyl-90zaVReze9pbypCGJT2upggZqfdUDrgtFhhdiHPogx9IA6lMVBSH3Ql317wGCbxDk5tmYndBM1KRrvhQ0p35GMY~0KXt315EsnOfsofPtzRfY01eVhJHH-JS9he4UAlL6gAt98FfzSF7U3SbMwrfIgIrS50vX7lbzQrhYYG-w5KWXFsiqC3fcQVMz6vSXJFB~9c48j2o1pRASF3bA~7e7xLW7Pt3NKpTv29kFRka01DOQBrMhmQxQ__",
    },
    image:
      "https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMBRS74Co96WaZ3An4YPzqlN3T7m~oVsX8MbKUO9ICJ9dEVYXw3kIW2i4ziwFwQeMAXFme7F4FtklUz8D7Fw~JVFta4J16bxo18cmSXa1cuuNRaZZOXmBTrOzrLqDb1l21HmUJkBLcpjfXiB9bkM4UaBhGk7AhPqfKWYiesyyfKKuNPwIzUoXhPgosJZxOUDV8I06sU0aMtSrlRCNDBUdOsbna-8eySDNYFpEx0j3HyQWAFrAIE5r-pnI92N6IZGvWLjou6muAaJUKDN~SNdZavEAFx6EuIMDRggGjoxeQt8GkI8TpUP~fHHDFyJ3xa4uQBoEH5WOy9nmbge8Dw9xQ__",
  },
];
