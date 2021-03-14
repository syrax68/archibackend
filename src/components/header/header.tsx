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


export default function ButtonAppBar() {

  return (
    <CustomDiv>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Title variant="h6" >
            VIDEO CLUB
          </Title>
          <CustomButton color="inherit">se connecter / s'inscrire</CustomButton>
          <CustomButton color="inherit">Mon compte</CustomButton>
        </Toolbar>
      </AppBar>
    </CustomDiv>
  );
}
