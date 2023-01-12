import { makeStyles, Theme } from '@material-ui/core';
import ChatList from './components/ChatList/ChatList';
import ChatConversation from './components/ChatConversation/ChatConversation';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    flexGrow: 1,
    outline: '1px solid ' + theme.palette.divider,
  },
}));

const Chat = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ChatList {...props} />
      <ChatConversation {...props} />
    </div>
  );
};

export default Chat;
