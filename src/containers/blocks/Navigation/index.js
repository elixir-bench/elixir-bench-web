import React from 'react';
import { compose, pure } from 'recompose'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

import GridContainer from 'components/GridContainer'
import GithubLogo from 'components/GithubLogo'
import ElixirBenchLogo from 'components/ElixirBenchLogo'

import styles from './styles'

const Navigation = ({ classes, children }) => (
  <GridContainer className={ classes.root }>
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between" wrap="nowrap" alignItems="baseline">
          <Grid item>
            <Link to="/" className={ classes.logo }>
              <Typography variant="title" color="inherit">
                <ElixirBenchLogo className={ classes.logoIcon } />
                Elixir<b className={ classes.bolder }>Bench</b>
              </Typography>
            </Link>
          </Grid>
          <Grid container justify="center">
            <Grid item >
              <Link to="/repos" className={ classes.repositories }>
                <Typography variant="subheading" color="inherit">
                  Repositories
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/about" className={ classes.about }>
                <Typography variant="subheading" color="inherit">
                  About
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/contact" className={ classes.contact }>
                <Typography variant="subheading" color="inherit">
                  Contact
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/docs" className={ classes.docs }>
                <Typography variant="subheading" color="inherit">
                  Docs
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container wrap="nowrap">
              <Grid item>
                <a
                  className={ classes.icon }
                  href={`https://github.com/spawnfest/elixirbench`}
                  rel="noreferrer nofollow"
                  target="__blank"
                >
                  <GithubLogo />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </GridContainer>
)

export default compose(
  pure,
  withStyles(styles)
)(Navigation);
