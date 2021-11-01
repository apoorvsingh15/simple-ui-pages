import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Header = () => {
  return (
    <nav style={{ borderBottom: "1px solid #D6D8DA !important", height: 70 }}>
      <Grid container spacing={2} style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Grid item lg={4} md={4} style={{ justifyContent: "center" }}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} style={{ justifyContent: "center" }}>
              <p style={{ margin: 0, marginTop: 5 }}>link1</p>
            </Grid>
            <Grid item lg={4} md={4} style={{ justifyContent: "center" }}>
              <p style={{ margin: 0, marginTop: 5 }}>link2</p>
            </Grid>
            <Grid item lg={4} md={4} style={{ justifyContent: "center" }}>
              <p style={{ margin: 0, marginTop: 5 }}>link3</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <h2 style={{ color: "green", margin: 0 }}>The Green Iniative</h2>
        </Grid>
        <Grid item lg={4} md={4} style={{ justifyContent: "center" }}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} style={{ justifyContent: "center" }}>
              <p style={{ margin: 0, marginTop: 5 }}>link1</p>
            </Grid>
            <Grid item lg={4} md={4} style={{ justifyContent: "center" }}>
              <p style={{ margin: 0, marginTop: 5 }}>link2</p>
            </Grid>
            <Grid item lg={4} md={4} style={{ justifyContent: "center" }}>
              <p style={{ margin: 0, marginTop: 5 }}>link3</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Header;
