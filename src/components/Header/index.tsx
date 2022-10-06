import { Stack, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import LogoImage from "./LogoImage";

const centered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ height: "10vh", maxHeight: "50px", p: 1 }}
    >
      <Box
        sx={{
          width: "30vw",
          maxWidth: "192px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <LogoImage />
      </Box>
      <Box sx={{ ...centered }}>
        <Link href="https://app.cottage.dev">
          <Typography
            variant="body1"
            sx={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Developers
          </Typography>
        </Link>
      </Box>
    </Stack>
  );
}
