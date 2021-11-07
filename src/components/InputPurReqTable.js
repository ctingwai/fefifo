import * as React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell padding="checkbox">
          <Checkbox color="primary" />
        </TableCell>
        <TableCell>
          {row.order_no}
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Avatar src={row.batched_by_pic_url} />
          <Typography paragraph={true}>{row.batched_by_fullname}</Typography>
          <Typography paragraph={true}>{row.created_at}</Typography>
        </TableCell>
        <TableCell>
          <a href={row.doc_url}>
            <Image src="/excel_icon.png" alt="csv" width="64" height="64" style={{ margin: '8px' }} />
            <Typography>{row.doc_title}</Typography>
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Agri-Input Category</TableCell>
                    <TableCell>Product Image</TableCell>
                    <TableCell>Product Description</TableCell>
                    <TableCell>Order Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((itemRow) => (
                    <TableRow key={itemRow.date}>
                      <TableCell component="th" scope="row">
                        {itemRow.no}
                      </TableCell>
                      <TableCell>{itemRow.category_name}</TableCell>
                      <TableCell>
                        <Avatar src={itemRow.image_url} />
                      </TableCell>
                      <TableCell>{itemRow.description}</TableCell>
                      <TableCell>{itemRow.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function InputPurReqTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Executing Agri-Input Orders</TableCell>
            <TableCell>Batched By</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
