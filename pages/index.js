import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

// Custom component
import InputPurReqTab from '../src/components/InputPurReqTab';
import InputPurReqContent from '../src/components/InputPurReqContent';

// Mocked data
import orders from '../src/libs/mocked-input-purchase-requests';

export default function Index() {
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Container>
      <InputPurReqTab
        tab={tab}
        onTabChange={handleTabChange}
      />
      <InputPurReqContent data={orders} />
    </Container>
  );
}
