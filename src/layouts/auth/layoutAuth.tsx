import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Link } from "@mui/material";

import { paths } from "../../routes/paths";

const TOP_NAV_HEIGHT = 64;

const LayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top center",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  height: "100%",
}));

export const LayoutAuth = () => {
  return (
    <LayoutRoot>
      <Box
        component="header"
        sx={{
          left: 0,
          position: "fixed",
          right: 0,
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} sx={{ height: TOP_NAV_HEIGHT }}>
            <Stack
              alignItems="center"
              component={Link}
              direction="row"
              display="inline-flex"
              href={paths.index}
              spacing={1}
              sx={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  color: "text.primary",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: "0.3px",
                  lineHeight: 2.5,
                  "& span": {
                    color: "primary.main",
                  },
                }}
              >
                Face <span>Marketing</span>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flex: "1 1 auto",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: "60px",
              md: "120px",
            },
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </LayoutRoot>
  );
};
