// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack';
// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import CalendarMonth from 'mdi-material-ui/CalendarMonth'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import OfficeBuildingMarker from 'mdi-material-ui/OfficeBuildingMarker'

const FormLayoutsIcons = () => {
  return (
    <Card>
      <CardHeader title='Add User' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Full Name'
                placeholder='Leonard Carter'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='email'
                label='Email'
                placeholder='carterleonard@gmail.com'

                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                label='Phone No.'
                placeholder='+1-123-456-8790'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Phone />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='text'
                label='Organization'
                placeholder='Organization Name'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <OfficeBuildingMarker />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='date'
                label='Date'
                placeholder='mm/dd/yyyy'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CalendarMonth />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>


            <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <Button type='submit' variant='contained' size='large'>
                Add User
              </Button>
              <Button type='submit' variant='contained' size='large'>
                Cancel
              </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsIcons
