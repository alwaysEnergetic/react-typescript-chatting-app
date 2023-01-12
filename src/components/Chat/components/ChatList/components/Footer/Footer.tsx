import { makeStyles, Theme } from '@material-ui/core';
import { DateTime } from 'luxon';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: '100%',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      Footer{' '}
      {props.lastresponse && (
        <span>
          Last response time:{' '}
          {DateTime.fromISO(props.lastresponse).toLocaleString(DateTime.DATETIME_SHORT)}
        </span>
      )}
    </div>
  );
};

export default Footer;
