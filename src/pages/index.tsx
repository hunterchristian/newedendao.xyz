import React from "react";
import { Container, Box, Stack, Typography, Grid } from "@mui/material";
import Header from "src/components/Header";
import Image from "next/image";

export default function Index() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        //background: "url(/wavesvertical.svg) left bottom no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Box>
          <Header />
        </Box>
        <Box
          sx={{
            minHeight: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                The <b>fastest way</b> to increase your frontend development
                velocity.
              </Typography>
              <Typography variant="body1">
                Engage frontend developers instantly with our easy to use
                competition platform. No interviews. No onboarding.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Stack
          alignItems="center"
          sx={{
            height: "250px",
            background: "url(/wavesthin.svg) left bottom no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
            Trusted By
          </Typography>
          <Grid container>
            <Grid
              item
              xs={6}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src="/sequense.jfif" width="150" height="150" />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src="/draper.jfif" width="150" height="150" />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src="/thirdwork.jfif" width="150" height="150" />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src="/getelected.png" width="150" height="28" />
            </Grid>
          </Grid>
        </Stack>
        <Box>
          <Typography variant="h3" gutterBottom>
            Competition examples
          </Typography>
          <iframe
            id="softr-adf5356b-87c7-4a85-a887-362e4db55e45-list4"
            src="https://app.cottage.dev/embed/pages/adf5356b-87c7-4a85-a887-362e4db55e45/blocks/list4"
            width="100%"
            height="1000"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none" }}
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
}
