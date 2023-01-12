import { Button, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const Controls = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">Controls</Typography>

      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        type="text"
        onChange={props.onUserIdChange}
        placeholder="userID"
      />

      <Button
        color="primary"
        className={classes.button}
        variant="contained"
        name="addText"
        id="addText"
        disabled={Object.keys(props.selectedChatdata).length > 0 ? false : true}
        onClick={(e) => props.onAddMessage('')}
      >
        Send Random Message
      </Button>

      <Button
        color="primary"
        className={classes.button}
        variant="contained"
        name="clearAll"
        id="clearAll"
        onClick={props.onClearAll}
      >
        Clear All
      </Button>
    </div>
  );
};

export default Controls;
