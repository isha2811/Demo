// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import PermissionTable from 'src/views/typography/Table'


const TypographyPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PermissionTable/>
      </Grid>

    </Grid>
  )
}

export default TypographyPage
