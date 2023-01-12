import React, { useState, useEffect } from 'react';
import { Avatar, List, ListItem, makeStyles, Theme, Chip } from '@material-ui/core';
import { IChat } from '../../../../interfaces';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
  },
  cardTitle: {
    padding: theme.spacing(1),
    width: '100%',
  },
  sendername: {
    margin: 0,
    fontSize: 20,
  },
  listheader: {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  responders: {
    display: 'flex',
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
  margin: {
    margin: 0,
  },
  incoming: {
    fontSize: 26,
    textAlign: 'center',
    margin: 0,
  },
}));

const ChatList = (props) => {
  const classes = useStyles();

  const [selectedChatId, setSelectedChatId] = useState(props.selectedChatdata.chatId);
  const [hasincoming, setHasincoming] = useState(false);
  const { filter } = props;

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

  const handleChatClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, chatId: string) => {
    setSelectedChatId(chatId);
    props.handleChatClicked(chatId);
  };

  const getinitials = (name) => {
    if (name)
      return name
        .match(/(^\S\S?|\b\S)?/g)
        .join('')
        .match(/(^\S|\S$)?/g)
        .join('')
        .toUpperCase();
  };

  useEffect(() => {
    setSelectedChatId(props.selectedChatdata.chatId);
  }, [props.selectedChatdata]);

  useEffect(() => {
    setHasincoming(false);
    if (props.chatData)
      props.chatData.map((item, key) => {
        if (!item.lastMessage) {
          setHasincoming(true);
        }
        return true;
      });
  }, [props.chatData]);

  const checkfilter = (chat) => {
    if (filter.category) {
      switch (filter.category) {
        case 'topic':
          if (chat.topic === filter.criteria) return true;
          else return false;

        case 'senderid':
          if (chat.senderId === filter.criteria) return true;
          else return false;

        case 'channel':
          if (chat.channel === filter.criteria) return true;
          else return false;
      }
    }
    return true;
  };

  return (
    <div className={classes.root}>
      <Header {...props}></Header>
      <List component="nav">
        {props.chatData &&
          props.chatData.map((chat: IChat, key) => (
            <React.Fragment key={key}>
              {chat.lastMessage && checkfilter(chat) ? (
                <ListItem
                  button
                  selected={selectedChatId === chat.chatId}
                  onClick={($event) => handleChatClick($event, chat.chatId)}
                >
                  <Avatar>{getinitials(chat.senderId)}</Avatar>
                  <div className={classes.cardTitle}>
                    <div className={classes.listheader}>
                      <div>
                        <Chip size="small" label={chat.channel} color="primary" />
                        <Chip variant="outlined" color="primary" size="small" label={chat.status} />
                      </div>
                      <div className={classes.responders}>
                        {chat.currentResponders.map((user, key) => {
                          return (
                            <React.Fragment key={key}>
                              <Avatar
                                className={classes.responder}
                                style={{
                                  backgroundColor: colorarray[chat.currentResponders.indexOf(user)],
                                }}
                              >
                                {getinitials(user)}
                              </Avatar>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                    <p className={classes.margin}>{chat.senderId}</p>
                  </div>
                </ListItem>
              ) : (
                <></>
              )}
            </React.Fragment>
          ))}
      </List>

      {hasincoming && (
        <List component="nav">
          <p className={classes.incoming}>Incoming...</p>
        </List>
      )}

      <List component="nav">
        {props.chatData &&
          props.chatData.map((chat: IChat, key) => (
            <React.Fragment key={key}>
              {!chat.lastMessage && checkfilter(chat) ? (
                <ListItem
                  button
                  selected={selectedChatId === chat.chatId}
                  onClick={($event) => handleChatClick($event, chat.chatId)}
                >
                  <Avatar>{getinitials(chat.senderId)}</Avatar>
                  <div className={classes.cardTitle}>
                    <div className={classes.margin}>
                      <Chip size="small" label={chat.channel} color="primary" />
                      <Chip variant="outlined" color="primary" size="small" label={chat.status} />
                    </div>
                    <p className={classes.sendername}>{chat.senderId}</p>
                  </div>
                </ListItem>
              ) : (
                <></>
              )}
            </React.Fragment>
          ))}
      </List>
      <Footer {...props}></Footer>
    </div>
  );
};

export default ChatList;
