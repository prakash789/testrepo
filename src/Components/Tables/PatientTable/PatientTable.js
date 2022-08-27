import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { genderTableHeaderC } from "../../../Theme";


const useStyles = makeStyles({
  table: {
    // maxWidth: 400,
    "& .MuiTableCell-root": {
        borderLeft: "1px solid rgba(224, 224, 224, 1)"
      },
     "& .MuiTableCell-root:first-child" : {
         borderLeft: "none"
     },
  },
  cell: {
    "&:last-child": {
      borderBottom: "none"
    }
  },
  head: {
    backgroundColor: genderTableHeaderC,
    color: "#fff",
  },
});

const PatientTable = ({children,header}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} style={{maxHeight:"350px", backgroundColor:"#f7f7f7", boxShadow:"-1px 4px 12px -3px rgba(0,0,0,0.28)"}} >
      <Table
        stickyHeader
        className={classes.table}
        size="small"
        aria-label="a dense table">
        <TableHead>
          <TableRow>
            {header.map((item) => (
              <TableCell className={classes.head} >{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientTable;
