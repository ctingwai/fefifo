import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';

import { styled } from '@mui/material/styles';
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  background: '#ddd',
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    justifyContent: 'flex-end',
    color: 'rgba(100, 100, 100, 0.7)',
    '&.Mui-selected': {
      color: '#333',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

const stepBg = [
  {
    step: 1,
    color: '#C00000',
  },
  {
    step: 2,
    color: '#5B5B5B',
  },
  {
    step: 3,
    color: '#ED7D31',
  },
  {
    step: 4,
    color: '#70AE47',
  },
];
const StepLabel = styled((props) => {
  const stepBgSettings = stepBg.find((arr) => arr.step == props.step);
  return (
    <Typography
      {...props}
      style={{ background: stepBgSettings.color }}
    >{props.step}</Typography>
  );
})(
  ({ theme }) => ({
    width: theme.typography.pxToRem(50),
    height: theme.typography.pxToRem(50),
    lineHeight: theme.typography.pxToRem(50),
    borderRadius: '50%',
    margin: theme.spacing(2),
    color: '#fff',
  }),
);

const Step = (props) => (
  <>
    <StepLabel step={props.step} />
    <Typography paragraph={true}>{props.label}</Typography>
  </>
);

export default function Index(props) {
  return (
    <Box>
      <StyledTabs
        value={props.tab}
        onChange={props.onTabChange}
        aria-label="styled tabs example"
      >
        <StyledTab label={<Step label="Pending" step={1} />} />
        <StyledTab label={<Step label="Executing" step={2} />} />
        <StyledTab label={<Step label="Executed" step={3} />} />
        <StyledTab label={<Step label="Completed" step={4} />} />
      </StyledTabs>
      <Divider />
    </Box>
  );
}
