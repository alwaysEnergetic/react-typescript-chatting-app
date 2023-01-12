import React, { useState } from 'react';
import { Grid, IconButton, makeStyles, TextField, Theme } from '@material-ui/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderTop: '1px solid ' + theme.palette.divider,
    background: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing(1),
  },
  textField: {
    background: theme.palette.background.paper,
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
}));

const ChatInput = (props) => {
  const classes = useStyles();

  const [message, setMessage] = useState('' as String);

  const handleKeyUp = (event) => {
    setMessage(event.target.value);
  };

  const sendmessage = (e) => {
    if (message) props.sendmessage(message);
    setMessage('');
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid container direction="row">
        <TextField
          id="chatInput"
          multiline={true}
          className={classes.textField}
          margin="dense"
          variant="outlined"
          name="chatInput"
          type="text"
          value={message}
          placeholder="Start typing..."
          onChange={(e) => handleKeyUp(e)}
        />

        <IconButton color="primary" onClick={sendmessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ChatInput;
