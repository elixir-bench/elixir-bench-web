import React from 'react';
import { compose, pure, withHandlers } from 'recompose'
import { withStyles } from 'material-ui/styles';

import { ListItem, ListItemText } from 'material-ui/List'

import CheckCircle from 'material-ui-icons/CheckCircle'
import Restore from 'material-ui-icons/Restore'
import HighlightOff from 'material-ui-icons/HighlightOff'

import styles from './styles'

const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const PENDING = 'PENDING'

const LastJobItem = ({ key, job, classes, jobStatusIcon, onClick, children}) => (
  <ListItem key={ key } button divider>
    { jobStatusIcon(job) }
    <ListItemText
      primary={ `${job.repoSlug} : ${job.branchName} # ${job.commitSha.slice(0, 6)}` }
      onClick={ onClick }
    />
  </ListItem>
)

export default compose(
  pure,
  withHandlers({
    onClick: ({ job, onClick }) => (e) => (
      onClick(e, job)
    ),
    jobStatusIcon: () => (job) => (
      iconFromStatusCode(job.exitStatus)
    ),
  }),
  withStyles(styles)
)(LastJobItem);

function jobHumanStatus(status) {
  let humanStatus;
  switch(status) {
    case 0:
     humanStatus = SUCCESS
     break

    case null:
      humanStatus = PENDING
      break

    default:
      humanStatus = FAILURE
  }
  return humanStatus
}

function iconFromStatusCode(statusCode) {
  let status = jobHumanStatus(statusCode)
  let icon = null

  switch(status) {
    case SUCCESS:
      icon = <CheckCircle color="primary"/>
      break

    case PENDING:
      icon = <Restore color="disabled"/>
      break

    default:
      icon = <HighlightOff color="error"/>
  }

  return icon
}
