import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import BookingLoading from '../Booking/BookingLoading';
import AOS from "aos";
import "aos/dist/aos.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3167D9',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function UsersList() {
const [data,setData] = React.useState([]);
const [loading,setLoading] = React.useState(false)

function FetchData(){
  setLoading(true)
axios.get(`https://doctors-api-bc6x.onrender.com/user`).then((res)=>{
    console.log(res.data);
    setData(res.data);
    setLoading(false)
})
}


React.useEffect(()=>{
    FetchData();
    AOS.init({ duration: 2000 });
},[])

if(loading){
  return  <BookingLoading/>
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Member</StyledTableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length>0 && data.map((item) => (
            <StyledTableRow key={item.id} data-aos="fade-up">
              <StyledTableCell component="th" scope="row">
                {item.firstName} {item.lastName}
              </StyledTableCell>
              <StyledTableCell align="right">{item.email}</StyledTableCell>
              <StyledTableCell align="right">{item.member?"Yes":"No"}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}