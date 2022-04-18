// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const createData = (name: string, email:string, contact: number, organization:string,date:string) => {
  return { name, email,contact,organization,date}
}

const rows = [
  createData('Ayush Mehra', 'ayush@oracle.com', 609080798,'Oracle Inc', '19/04/2022'),
  createData('Ayush Mehra', 'ayush@oracle.com', 609080798,'Oracle Inc', '19/04/2022'),
  createData('Ayush Mehra', 'ayush@oracle.com', 609080798,'Oracle Inc', '19/04/2022'),

]

const TableBasic = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>Contact</TableCell>
            <TableCell align='center'>Organization</TableCell>
            <TableCell align='center'>Date</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='center'>{row.email}</TableCell>
              <TableCell align='center'>{row.contact}</TableCell>
              <TableCell align='center'>{row.organization}</TableCell>
              <TableCell align='center'>{row.date}</TableCell>
              <TableCell align='center'>
      <Button variant="outlined">Edit</Button> <Button variant="outlined"> Delete</Button>
                         </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
