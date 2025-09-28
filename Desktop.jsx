import React from "react";
import { Button, Box, Typography, AppBar, Toolbar, Link, Container } from "@mui/material";
import "./../styles/style.css";
import frameLogo from "../assets/frame.svg";
import megaphone from "../assets/Megaphone.png";
import netflix from "../assets/Netflix.svg";
import notion from "../assets/Notion.svg";
import zoom from "../assets/zoom.png";
import dribbble from "../assets/dribble.png";
import amazon from "../assets/Amazon.svg";
import hubspot from "../assets/HubSpot.svg";
import servicesblock from "../assets/Servicesblock.png";
import heading from "../assets/Heading.png";
import processblock from "../assets/Processblock.png";
import subheading from "../assets/Subheading.png";
import testimonialsblock from "../assets/Testimonialsblock.png";
import footerblock from "../assets/Footerblock.png";



export default function Desktop() {
  return (
    <Box sx={{ background: "#fff", minHeight: "100vh", fontFamily: "Inter, Arial, sans-serif" }}>
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #eee" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={frameLogo} alt="Positivus Logo" style={{ height: 32, marginRight: 8 }} />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Positivus</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Link href="#" underline="none" color="inherit">About us</Link>
            <Link href="#" underline="none" color="inherit">Services</Link>
            <Link href="#" underline="none" color="inherit">Use Cases</Link>
            <Link href="#" underline="none" color="inherit">Pricing</Link>
            <Link href="#" underline="none" color="inherit">Blog</Link>
            <Button variant="outlined" sx={{ borderRadius: 50, textTransform: "none", ml: 2 }}>Request a quote</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container
        sx={{
          py: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 2, md: 8 }
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Navigating the digital landscape for success
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#23272A",
              borderRadius: 50,
              textTransform: "none",
              px: 4,
              py: 1,
              mb: 6
            }}
          >
            Book a consultation
          </Button>
        </Box>
        <Box sx={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={megaphone} alt="Megaphone" style={{ maxWidth: "420px", width: "100%" }} />
        </Box>
      </Container>

      {/* Brand bar below hero section */}
      <Box
        sx={{
          width: "100%",
          background: "#fff",
          borderTop: "2px solid #E5E5E5",
          borderBottom: "2px solid #E5E5E5",
          py: 2,
          px: { xs: 2, md: 8 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 8 }
        }}
      >
        <img src={amazon} alt="amazon" style={{ height: 40, objectFit: "contain" }} />
        <img src={dribbble} alt="dribbble" style={{ height: 40, objectFit: "contain" }} />
        <img src={hubspot} alt="HubSpot" style={{ height: 40, objectFit: "contain" }} />
        <img src={notion} alt="Notion" style={{ height: 40, objectFit: "contain" }} />
        <img src={netflix} alt="Netflix" style={{ height: 40, objectFit: "contain", fontWeight: "bold" }} />
        <img src={zoom} alt="zoom" style={{ height: 40, objectFit: "contain" }} />
      </Box>

      {/* Services Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              background: "#C1F651",
              color: "#23272A",
              fontWeight: 700,
              borderRadius: 2,
              px: 2,
              py: 0.5,
              mr: 2,
              fontSize: "1.5rem"
            }}
          >
            Services
          </Typography>
          <Typography variant="body1" sx={{ color: "#23272A" }}>
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </Typography>
        </Box>
        {/* Add the Servicesblock image here */}
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <img
            src={servicesblock}
            alt="Services Block"
            style={{
              width: "100%",
              maxWidth: 900,
              borderRadius: 24,
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
            }}
          />
        </Box>
      </Box>

      {/* Working Process Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
        {/* Heading image */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <img
            src={heading}
            alt="Our Working Process"
            style={{
              height: 40,
              marginRight: 16
            }}
          />
          
        </Box>
        {/* Processblock image */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={processblock}
            alt="Process Block"
            style={{
              width: "100%",
              maxWidth: 900,
              borderRadius: 24,
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
            }}
          />
        </Box>
      </Box>

      {/* Subheading under Working Process */}
      <Box sx={{ px: { xs: 2, md: 8 }, mt: -4, mb: 4 }}>
        <img
          src={subheading}
          alt="Subheading"
          style={{
            width: "100%",
            maxWidth: 900,
            display: "block",
            margin: "0 auto"
          }}
        />
      </Box>

      {/* Testimonials Block */}
      <Box sx={{ px: { xs: 2, md: 8 }, mb: 6 }}>
        <img
          src={testimonialsblock}
          alt="Testimonials Block"
          style={{
            width: "100%",
            maxWidth: 900,
            display: "block",
            margin: "0 auto"
          }}
        />
      </Box>

      {/* Footer Block */}
      <Box sx={{ px: { xs: 2, md: 8 }, mb: 0 }}>
        <img
          src={footerblock}
          alt="Footer Block"
          style={{
            width: "100%",
            maxWidth: 900,
            display: "block",
            margin: "0 auto"
          }}
        />
      </Box>
    </Box>
  );
}
