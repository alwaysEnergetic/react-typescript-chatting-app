import React from 'react';
import { makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 200px)',
    overflowY: 'scroll',
  },
  datasection: {
    whiteSpace: 'pre-wrap',
  },
}));
const DataView = (prop) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6">Data</Typography>
      <div className={classes.root}>
        <pre className={classes.datasection}>{JSON.stringify(prop.data, null, 2)}</pre>
      </div>
    </>
  );
};

export default DataView;
