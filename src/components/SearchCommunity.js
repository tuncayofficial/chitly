import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useRef } from "react"


function SearchCommunity(props){

    const classes = {
      root : '& > *'
    }

    return (
      <form onSubmit = {e => e.preventDefault()} className={classes.root} noValidate autoComplete="off">
        <TextField  id="outlined-basic" label="Search for communities" variant="outlined" />
      </form>
    );
}

export default SearchCommunity