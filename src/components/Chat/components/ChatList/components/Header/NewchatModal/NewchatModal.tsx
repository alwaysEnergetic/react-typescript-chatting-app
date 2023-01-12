import {
  makeStyles,
  Theme,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { ChatTopicType } from '../../../../../../../interfaces';

const useStyles = makeStyles((theme: Theme) => ({
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    maxWidth: 400,
  },
  margin: {
    margin: '5px 0',
  },
  buttonmargin: {
    margin: '5px',
  },
}));

const NewchatModal = (props) => {
  const classes = useStyles();

  const [userId, setUserId] = useState('' as String);
  const [topic, setTopic] = useState('Customer' as ChatTopicType);
  const [message, setMessage] = useState('' as String);

  const sendmessage = (e) => {
    props.newchat(userId, topic, message);
  };

  return (
    <div className={classes.dropdown}>
      <FormControl fullWidth variant="outlined" className={classes.margin}>
        <TextField label="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </FormControl>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel id="topic_select">Topic</InputLabel>
        <Select
          id="topic_select"
          value={topic}
          onChange={(e) => setTopic(e.target.value as ChatTopicType)}
        >
          <MenuItem value="Customer">Customer</MenuItem>
          <MenuItem value="Chat Topic A">Chat Topic A</MenuItem>
          <MenuItem value="Chat Topic B">Chat Topic B</MenuItem>
          <MenuItem value="Chat Topic C">Chat Topic C</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" className={classes.margin}>
        <TextField
          label="Message"
          size="small"
          multiline={true}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        className={classes.buttonmargin}
        onClick={sendmessage}
        disabled={userId !== '' && message !== '' ? false : true}
      >
        Send
      </Button>
    </div>
  );
};

export default NewchatModal;
