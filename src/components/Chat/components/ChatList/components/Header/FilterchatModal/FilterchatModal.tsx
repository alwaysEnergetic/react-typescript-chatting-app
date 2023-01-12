import React, { useState } from 'react';
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

const FilterchatModal = (props) => {
  const classes = useStyles();

  const [category, setCategory] = useState(props.filter.category ? props.filter.category : 'topic');
  const [criteria, setCriteria] = useState(props.filter.criteria ? props.filter.criteria : '');

  const setfilter = (e) => {
    props.setfilter(category, criteria);
  };

  const resetfilter = (e) => {
    setCategory('topic');
    setCriteria('');
    props.setfilter('', '');
  };

  return (
    <div className={classes.dropdown}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value as string)}>
          <MenuItem value="topic">Topic</MenuItem>
          <MenuItem value="senderid">SenderID</MenuItem>
          <MenuItem value="channel">Channel</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" className={classes.margin}>
        <TextField
          label="Filter criteria"
          size="small"
          value={criteria}
          onChange={(e) => setCriteria(e.target.value)}
        />
      </FormControl>

      <Button variant="contained" color="primary" className={classes.buttonmargin} onClick={resetfilter}>
        Reset
      </Button>

      <Button
        variant="contained"
        color="primary"
        className={classes.buttonmargin}
        onClick={setfilter}
      >
        Apply
      </Button>
    </div>
  );
};

export default FilterchatModal;
