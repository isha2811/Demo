// ** Icon imports
import Login from 'mdi-material-ui/Login'
import AccountBoxMultiple from 'mdi-material-ui/AccountBoxMultiple'
import AccountMultiplePlus from 'mdi-material-ui/AccountMultiplePlus'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import AccountGroup from 'mdi-material-ui/AccountGroup'
import AccountKey from 'mdi-material-ui/AccountKey'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'



const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title:'Permissions',
      icon: AccountKey,
      path: '/typography'
    },
    {
      title: 'Roles',
      path: '/icons',
      icon: AccountGroup
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Users',
      icon:  AccountBoxMultiple,
      path: '/tables'
    },
    {
      icon: AccountMultiplePlus,
      title: 'Add User',
      path: '/form-layouts'
    }
  ]
}

export default navigation
