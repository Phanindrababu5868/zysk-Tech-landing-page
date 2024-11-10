import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "/logo.svg";
import { Heading, SubHeading } from "../util/color";

const pages = ["Home", "Pricing"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [anchorElResources, setAnchorElResources] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleOpenProductsMenu = (event) =>
    setAnchorElProducts(event.currentTarget);
  const handleOpenResourcesMenu = (event) =>
    setAnchorElResources(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleCloseProductsMenu = () => setAnchorElProducts(null);
  const handleCloseResourcesMenu = () => setAnchorElResources(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const toggleProductsOpen = () => setProductsOpen(!productsOpen);
  const toggleResourcesOpen = () => setResourcesOpen(!resourcesOpen);

  const redirectToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        color: SubHeading,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            color: SubHeading,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center" gap={1} mr={3}>
            <img src={logo} alt="logo" style={{ marginRight: "12px" }} />
            <Typography
              variant="body2"
              color={Heading}
              maxWidth="max-content"
              fontSize="20px"
            >
              Zysk Tech
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => redirectToSection("home".toLowerCase())}
              sx={{
                my: 2,
                color: SubHeading,
                display: "block",
                textTransform: "none",
              }}
            >
              Home
            </Button>

            {/* Products Menu */}
            <Button
              onClick={handleOpenProductsMenu}
              sx={{ my: 2, color: SubHeading, textTransform: "none" }}
            >
              Products {anchorElProducts ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Menu
              anchorEl={anchorElProducts}
              open={Boolean(anchorElProducts)}
              onClose={handleCloseProductsMenu}
            >
              <MenuItem
                onClick={() => {
                  handleCloseProductsMenu();
                  redirectToSection("features");
                }}
              >
                Features
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseProductsMenu();
                  redirectToSection("advanced-features");
                }}
              >
                Advanced features
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseProductsMenu();
                  redirectToSection("testimonial");
                }}
              >
                Testimonial
              </MenuItem>
            </Menu>

            {/* Resources Menu */}
            <Button
              onClick={handleOpenResourcesMenu}
              sx={{ my: 2, color: SubHeading, textTransform: "none" }}
            >
              Resources {anchorElResources ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Menu
              anchorEl={anchorElResources}
              open={Boolean(anchorElResources)}
              onClose={handleCloseResourcesMenu}
            >
              <MenuItem
                onClick={() => {
                  handleCloseResourcesMenu();
                  redirectToSection("our-clinets");
                }}
              >
                our clinets
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseResourcesMenu();
                  redirectToSection("blogs");
                }}
              >
                blogs
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseResourcesMenu();
                  redirectToSection("faqs");
                }}
              >
                FAQS
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseResourcesMenu();
                  redirectToSection("contact-us");
                }}
              >
                Contact us
              </MenuItem>
            </Menu>
            <Button
              onClick={() => redirectToSection("start-trail".toLowerCase())}
              sx={{
                my: 2,
                color: SubHeading,
                display: "block",
                textTransform: "none",
              }}
            >
              Pricing
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pR4n0jCHJZwn6xQjanoJEOK9~jH-jCjsedUgRWB2WO3Kkb5zftzYQvq15XHRHuKHi6~M6Bdlkq5uz2~2uo2G2l4Z2xdBxMCxYU-i2TjZTKg4newZPLGCQGkmqxHY6wnzE-8dXINYkJ1kA0ojA3tfrSAw-48gA20efqvgj8fdYVH3a7OO3Z8KY6Bpt1hn~aofV0p3RpYI1k9T40WnihkHhRR8JANkQCnyK2zPF2dH8JQNmo1VjiPlbjVVZz9dx~KmLdfwxVdspJbLBSPu9cqFLFZghKbvbE-zenHhnOajbQdoz4QBM4MnDhAPfQ1LkDCGWB-Q1gzmzRcYy0YqiSP1kg__"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Drawer for Mobile Menu */}
          <IconButton
            size="large"
            aria-label="open drawer"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List sx={{ width: 250 }}>
              <ListItem button onClick={() => redirectToSection("home")}>
                <ListItemText primary="Home" />
              </ListItem>

              {/* Products Submenu */}
              <ListItem button onClick={toggleProductsOpen}>
                <ListItemText primary="Products" />
                {productsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={productsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    button
                    onClick={() => redirectToSection("features")}
                  >
                    <ListItemText primary="Features" inset />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => redirectToSection("advanced-features")}
                  >
                    <ListItemText primary="Advanced features" inset />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => redirectToSection("testimonial")}
                  >
                    <ListItemText primary="Testimonial" inset />
                  </ListItem>
                </List>
              </Collapse>

              {/* Resources Submenu */}
              <ListItem button onClick={toggleResourcesOpen}>
                <ListItemText primary="Resources" />
                {resourcesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={resourcesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    button
                    onClick={() => redirectToSection("our-clinets")}
                  >
                    <ListItemText primary="Our clinets" inset />
                  </ListItem>
                  <ListItem button onClick={() => redirectToSection("blogs")}>
                    <ListItemText primary="blogs" inset />
                  </ListItem>
                  <ListItem button onClick={() => redirectToSection("faqs")}>
                    <ListItemText primary="FAQS" inset />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => redirectToSection("contact-us")}
                  >
                    <ListItemText primary="Contact us" inset />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={() => redirectToSection("pricing")}>
                <ListItemText primary="Pricing" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
