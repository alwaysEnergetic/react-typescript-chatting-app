import { makeStyles, Theme } from '@material-ui/core';
import ChatMessages from './components/ChatMessages/ChatMessages';
import ChatInput from './components/ChatInput/ChatInput';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flexGrow: 1,
    outline: '1px solid ' + theme.palette.divider,
  },
}));

const ChatConversation = (props) => {
  const classes = useStyles();

  const { selectedChatdata } = props;

  return (
    <div className={classes.root}>
      <ChatMessages {...props} />
      {Object.keys(selectedChatdata).length > 0 && <ChatInput {...props} />}
    </div>
  );
};

export default ChatConversation;
