import React from 'react';
import { Avatar, makeStyles, Theme } from '@material-ui/core';
import { DateTime } from 'luxon';

const useStyles = makeStyles((theme: Theme) => ({
  message: {
    padding: 10,
    display: 'flex',
  },
  send: {
    flexDirection: 'row-reverse',
  },
  avatar: {
    margin: '10px 0 0 0',
  },
  messagetime: {
    margin: 0,
    fontSize: 12,
  },
  messageitem: {
    maxWidth: '60%',
    margin: '0 15px',
  },
  rightarrow: {
    '&::before': {
      content: '""',
      right: -15,
      top: 0,
      borderStyle: 'solid',
      borderWidth: '15px 15px 15px 15px',
      borderColor: '#bde1f9 transparent transparent transparent',
      position: 'absolute',
    },
  },
  leftarrow: {
    '&::before': {
      content: '""',
      left: -15,
      top: 0,
      borderStyle: 'solid',
      borderWidth: '0px 15px 12px 0',
      borderColor: 'transparent #dddddd transparent transparent',
      position: 'absolute',
    },
  },
  messagecontent: {
    backgroundColor: '#dddddd',
    padding: 10,
    borderRadius: 10,
    whiteSpace: 'pre-line',
    position: 'relative',
    borderTopLeftRadius: 0,

    '&.send': {
      backgroundColor: '#bde1f9',
    },
  },
}));

const ChatMessage = (props) => {
  const classes = useStyles();

  const message = props.message;

  const getinitials = (name) => {
    if (name)
      return name
        .match(/(^\S\S?|\b\S)?/g)
        .join('')
        .match(/(^\S|\S$)?/g)
        .join('')
        .toUpperCase();
  };

  const colorarray = [
    '#982d73',
    '#bab1ed',
    '#e51c',
    '#142a55',
    '#11df79',
    '#9d096a',
    '#869257',
    '#2a648e',
    '#78932f',
    '#a7ed99',
  ];

  return (
    <>
      <div
        className={
          message.authorId === 'ME' ? classes.message + ' ' + classes.send : classes.message
        }
      >
        <Avatar
          className={classes.avatar}
          style={{
            backgroundColor: colorarray[props.responders.indexOf(message.authorId)],
          }}
        >
          {getinitials(message.authorId)}
        </Avatar>
        <div className={classes.messageitem}>
          <p className={classes.messagetime}>
            {DateTime.fromISO(message.createdAt).toLocaleString(DateTime.DATETIME_SHORT)}
          </p>
          <div
            className={
              message.authorId === 'ME'
                ? classes.messagecontent + ' send ' + classes.rightarrow
                : classes.messagecontent + ' ' + classes.leftarrow
            }
          >
            {message.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
