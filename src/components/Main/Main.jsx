import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="With speech recognition" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* infoCard ... */}
          Try saying: Add income of $100 in Category Salary for next Monday ...
        </Typography>
        <Divider />
        <Form />
        <CardContent className={classes.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* List */}
            </Grid>
          </Grid>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default Main;
