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

// Utilities
import moment from 'moment';

function DetailsRow(props) {
  const { items, open } = props;
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
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
                {items.map((itemRow) => (
                  <TableRow key={itemRow.no}>
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
  );
}

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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={row.batched_by_pic_url} />
            <div>
              <Typography>{row.batched_by_fullname}</Typography>
              <Typography>
                {moment(row.created_at, 'YYYY-MM-DD HH:mm:ss').format('dddd, MMMM Do YYYY, h:mm a')}
              </Typography>
            </div>
          </Box>
        </TableCell>
        <TableCell>
          <a href={row.doc_url}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/excel_icon.png" alt="csv" width="64" height="64" />
              <Typography m={2}>{row.doc_title}</Typography>
            </Box>
          </a>
        </TableCell>
      </TableRow>
      <DetailsRow open={open} items={row.items} />
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
            <Row key={row.order_no} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
