// ** MUI Imports
import Grid from '@mui/material/Grid'
import RolesTable from'src/views/icons/Roles';

/**
 ** Icons Imports:
 * ! You need to import all the icons which come from the API or from your server and then add these icons in 'icons' variable.
 * ! If you need all the icons from the library, use "import * as Icon from 'mdi-material-ui'"
 * */

const Icons = () => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <RolesTable/>
      </Grid>
    </Grid>
  )
}

export default Icons
