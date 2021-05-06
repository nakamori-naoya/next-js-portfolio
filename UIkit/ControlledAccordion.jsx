import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));




export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
//配列に格納して、mapで回せばリファクタリングできそう
  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} >作成動機</Typography>
          <Typography className={classes.secondaryHeading}>Background of Creation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="primary" >
            {props.backgroundOfCreation}
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>ここに注目</Typography>
          <Typography className={classes.secondaryHeading}>Remarkable Points</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="primary">
            {props.remakablePoints}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>今後の課題</Typography>
          <Typography className={classes.secondaryHeading}>Future Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="primary">
        {props.futureIssue}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
