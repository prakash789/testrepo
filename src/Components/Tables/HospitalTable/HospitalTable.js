import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { hospitalTableHeaderC } from '../../../Theme';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#d6d6d6",
      color: "#000",
      textAlign:"center"
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


const useStyles = makeStyles({
  table: {
    width: "100%",
    height: 300,
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(224, 224, 224, 1)",
      textAlign:"center"

    },
    "& .MuiTableCell-root:first-child": {
      borderLeft: "none",
      textAlign:"center"

    },
  },

  cell: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
  
  
});

const HospitalTable = ({header, children, style}) => {
 
    const classes = useStyles();
    return <TableContainer component={Paper}  style={style} >
    <Table className={classes.table} size="small" stickyHeader >
      <TableHead stickyHeader>
        <TableRow>
            {header.map(item => <StyledTableCell>{item}
               </StyledTableCell> )}
        </TableRow>
      </TableHead>
      <TableBody>
       {children}
      </TableBody>
    </Table>
  </TableContainer>
}

export default HospitalTable;
