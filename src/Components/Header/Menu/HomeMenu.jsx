import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import theme from '../../../theme'
import { history } from '../../..'
function HomeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Button
        sx={{
          color: (theme) => (theme.palette.mode === 'dark' ? 'white' : { xs: '#1976d2', md: 'white' })
        }
        }
        id="basic-button-recent"
        aria-controls={open ? 'basic-menu-recent' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={() => {
          history.push('/')
        }}
        // endIcon={<ExpandMoreIcon />}
      >
        Home
      </Button>
      {/* <Menu
        id="basic-menu-recent"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-recent'
        }}
      >
        <MenuItem>
          <ListItemText onClick={() => {
            history.push('/')
          }} inset>Home</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>List card</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Footer</ListItemText>
        </MenuItem>

      </Menu> */}
    </Box>
  )
}

export default HomeMenu
