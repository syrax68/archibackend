import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
    InitialeGrid,
    GridCenter,
    CustomImage,
    Title
} from './home.style';
import Header from '../header/header';

export default function Home() {

    return (
        <>
            <Header />
            <InitialeGrid className="bloc-item" container>
                <Grid className="child-bloc marg" item lg={6} md={6} container>
                    <Grid >
                        <CustomImage alt="complex" src="/images/fond.svg" />
                    </Grid>
                </Grid>
                <Grid className="child-bloc marg" item lg={6} md={6} container>
                    <GridCenter item>
                        <Title>
                            Bienvenue dans notre VIDEO CLUB
                        </Title>
                    </GridCenter>
                </Grid>
            </InitialeGrid>
        </>
    );
}
