import React from 'react';
import { withRouter } from 'react-router'
import { compose, pure, withHandlers } from 'recompose'

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import Page from 'components/Page'
import ElixirBenchLogo from 'components/ElixirBenchLogo'

import styles from './styles'

const IndexPage = ({ classes, onClickGoToRepositories }) => (
  <Page>
    <Grid align="center">
      <Typography variant="display3" align="center" style={{fontFamily: 'serif'}}>
        ELIXIR
        <ElixirBenchLogo color="primary" style={{ fontSize: "76px" }}/>
        BENCH
      </Typography>
      <Typography variant="headline" align="center" style={{borderBottom: '2px solid gray'}}>
        Long Running Benchmarks for Elixir Projects
      </Typography>
    </Grid>

    <Grid container className={ classes.gridContainer } align="center">
      <Grid item xs={ 12 } sm={ 12 } md={ 4 }>
        <Grid >
          <Typography variant='display1' className={ classes.gridTitle }>
            What is ElixirBench?
          </Typography>

          <Typography align='justify' className={ classes.gridDescription }>
            ElixirBench is a platform for running benchmarks for projects hosted
            on Github. Our platform empower developers to easily monitor and detect
            performance regressions. Like a CI, you can have your scripts running
            automatically on every change. We provide graphics for temporal
            tracking of the the performance of each new commits and pull requests
            to your project.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={ 12 } sm={ 12 } md={ 4 }>
        <Typography variant='display1' className={ classes.gridTitle }>
          Setup your benchmarks
        </Typography>

        <Typography align='justify' className={ classes.gridDescription }>
          Easily setup a benchee/config.yml and the benchmark scripts to start collecting
          performance metrics for your project. We currently support benchmarks
          written with Benchee, a powerful library specially designed to test
          and measure performance of Elixir code. See the examples of the
          Ecto library.
        </Typography>
      </Grid>
      <Grid item xs={ 12 } sm={ 12 } md={ 4 }>
        <Typography variant='display1' className={ classes.gridTitle }>
          Reliable Hardware
        </Typography>

        <Typography align='justify' className={ classes.gridDescription }>
          Confident hardware infrastructure that runs one benchmark job at a time,
          all within docker containers and the benefits of isolated and clean
          environments for the execution of benchmark jobs. Also, our application
          is being designed to support independent runners, so projects will soon
          be able to fully control their benchmark environments and hardware
          infrasctructure.
        </Typography>
      </Grid>
    </Grid>

    <Grid align="center">
      <Button className={ classes.button } color="primary" size='large' variant='raised' onClick={ onClickGoToRepositories }>View tracked repositories</Button>
    </Grid>
  </Page>
)

export default compose(
  pure,
  withRouter,
  withStyles(styles),
  withHandlers({
    onClickGoToRepositories: ({ router }) => () => (
      router.push('repos')
    )
  })
)(IndexPage);
