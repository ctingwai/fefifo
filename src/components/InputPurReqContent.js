import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// Custom components
import InputPurReqTable from './InputPurReqTable';

export default function InputPurReqContent(props) {
  return (
    <Container>
      <Box style={{ textAlign: 'right' }} m={2}>
        <ButtonGroup variant="outlined" aria-label="outlined primary button group" size="large">
          <Button>Undo Batch</Button>
          <Button>Assign Suppliers</Button>
          <Button>Generate PO</Button>
        </ButtonGroup>
      </Box>
      <InputPurReqTable data={props.data} />
    </Container>
  );
}
