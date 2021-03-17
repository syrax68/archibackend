import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  CustomButton,
  CustomDiv,
  Title
} from './header.style';
import {
  Link
} from "react-router-dom";

export default function ButtonAppBar() {

  return (
    <CustomDiv>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>   
          <Title variant="h6" >
            <Link to="/">
            VIDEO CLUB
            </Link>
          </Title>
          <CustomButton color="inherit"><Link to="/login">se connecter / s'inscrire</Link></CustomButton>
          <CustomButton color="inherit"><Link to="/compte">Mon compte</Link></CustomButton>
        </Toolbar>
      </AppBar>
    </CustomDiv>
  );
}
