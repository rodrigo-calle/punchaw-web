import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type RowData = {
    day: Date;
    loss: boolean;
    medium: boolean;
    higth: boolean;
}

type Headers = {
    header: string;
    value?: string;
}
type Props = {
    rowsData: RowData[]; 
    headers: Array<Headers>;
}; 

export default function BasicTable(props: Props) {
    function createData(
        day: Date,
        loss: boolean,
        medium: boolean,
        higth: boolean,
      ) {
        return { day, loss, medium, higth };
      }
      
      const rows = props.rowsData.map((data: RowData) => createData(data.day, data.loss, data.medium, data.higth));
    //   [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];
    console.log(props.headers)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>  
          <TableRow>    
            <TableCell>{props.headers[0].header}</TableCell>
            <TableCell align="left">
               {`${props.headers[1].header}`}
               <br /> 
               {`\n${props.headers[1].value}`}
            </TableCell>
            <TableCell align="left">
              {`${props.headers[2].header}`}
              <br /> 
              {`\n${props.headers[2].value}`}
            </TableCell>
            <TableCell align="left">
              {`${props.headers[3].header}`} 
              <br /> 
              {`\n${props.headers[3].value}`}
              </TableCell>
          </TableRow>                       
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.day.toLocaleDateString()}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day.toLocaleDateString()}
              </TableCell>
              <TableCell align="left">{row.loss? 'true' : 'false'}</TableCell>
              <TableCell align="left">{row.medium? 'true' : 'false'}</TableCell>
              <TableCell align="left">{row.higth? 'true' : 'false'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
