// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import Typography from '@mui/material/Typography'


// ** Demo Components Imports

import TableBasic from 'src/views/tables/TableBasic';



const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Users Table
          </Link>
        </Typography>

      </Grid>
      <Grid item xs={12}>
      <TableBasic/>
      </Grid>
    </Grid>)};

export default MUITable;
