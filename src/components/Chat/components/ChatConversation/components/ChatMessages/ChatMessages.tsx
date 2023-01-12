import React from 'react';
import { Box, makeStyles, Theme, Avatar } from '@material-ui/core';
import ChatMessage from '../ChatMessage/ChatMessage';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'auto',
  },
  chatSent: {
    backgroundColor: theme.palette.primary.main,
    display: 'block',
  },
  header: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '10px 30px 10px 10px',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  avatar: {
    margin: '0 5px',
  },
  responders: {
    display: 'flex',
  },
  sender: {
    display: 'flex',
    alignItems: 'center',
  },
  responder: {
    width: 30,
    height: 30,
    fontSize: 12,
    marginRight: -10,
    zIndex: 0,

    '&:hover': {
      zIndex: 1,
    },
  },
}));

const ChatMessages = (props) => {
  const classes = useStyles();

  const responders = props.selectedChatdata.currentResponders;

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
    <Box flexGrow={1} flexDirection="column" className={classes.root}>
      {Object.keys(props.selectedChatdata).length > 0 && (
        <div className={classes.header}>
          <div className={classes.sender}>
            <Avatar className={classes.avatar}>
              {getinitials(props.selectedChatdata.senderId)}
            </Avatar>
            {props.selectedChatdata.senderId}
          </div>

          <div className={classes.responders}>
            {responders.map((user, key) => {
              return (
                <React.Fragment key={key}>
                  <Avatar
                    className={classes.responder}
                    style={{
                      backgroundColor: colorarray[responders.indexOf(user)],
                    }}
                  >
                    {getinitials(user)}
                  </Avatar>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
      {props.selectedChatdata.messages && (
        <>
          {props.selectedChatdata.messages.map((message, key) => {
            return <ChatMessage key={key} message={message} responders={responders}></ChatMessage>;
          })}
        </>
      )}
    </Box>
  );
};

export default ChatMessages;
