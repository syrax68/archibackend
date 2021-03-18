import React from 'react';
import{
    DivModal,
    DivItem
}from './login.style';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const abonne = 
    <DivModal>
        <h2 id="simple-modal-title">Choisissez votre type d'abonnement</h2>
        <DivItem>
            <Paper elevation={3} >
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Herald
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Vous bénéfissiez d'une réduction de <span>5%</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
            <Paper elevation={3} >
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Guardian
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Vous bénéfissiez d'une réduction de <span>10%</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
            <Paper elevation={3} >
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Crusader
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Vous bénéfissiez d'une réduction de <span>15%</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
            <Paper elevation={3} >
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Archon
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Vous bénéfissiez d'une réduction de <span>20%</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
        </DivItem>
    </DivModal>
