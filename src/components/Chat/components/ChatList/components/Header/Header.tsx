import React from 'react';
import { makeStyles, Theme, ClickAwayListener } from '@material-ui/core';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewchatModal from './NewchatModal/NewchatModal';
import FilterchatModal from './FilterchatModal/FilterchatModal';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: 10,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  optionbutton: {
    fontSize: '20px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    marginRight: '10px',
    cursor: 'pointer',
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [newmessagemodal, setnewmessagemodal] = React.useState(false);
  const [filtermessagemodal, setfiltermessagemodal] = React.useState(false);

  const newchat = (userId, topic, message) => {
    props.newchat(userId, topic, message);
    setnewmessagemodal(false);
    setfiltermessagemodal(false);
  };

  const setfilter = (userId, topic, message) => {
    props.setfilter(userId, topic, message);
    setnewmessagemodal(false);
    setfiltermessagemodal(false);
  };

  return (
    <>
      <div className={classes.header}>
        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={() => setnewmessagemodal(false)}
        >
          <div>
            <span
              className={classes.optionbutton}
              onClick={() => setnewmessagemodal((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </span>
            {newmessagemodal ? <NewchatModal newchat={newchat}></NewchatModal> : null}
          </div>
        </ClickAwayListener>

        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={() => setfiltermessagemodal(false)}
        >
          <div>
            <span
              className={classes.optionbutton}
              onClick={() => setfiltermessagemodal((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faFilter} />
            </span>
            {filtermessagemodal ? <FilterchatModal {...props} setfilter={setfilter}></FilterchatModal> : null}
          </div>
        </ClickAwayListener>

        <span>Current Conversations</span>
      </div>
    </>
  );
};

export default Header;
