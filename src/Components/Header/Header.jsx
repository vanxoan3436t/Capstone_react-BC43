import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_LOGIN, clearStorage } from '../../util/config';
import { history } from '../../index';
//Material
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Men from './Menu/Men';
import Woman from './Menu/Woman';
import Kid from './Menu/Kid';
import HomeMenu from './Menu/HomeMenu';
import ModeSelect from '../ModeSelect/ModeSelect';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { addTotalCartAction } from '../../redux/reducer/productReducer';

// START SEARCH
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({

  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
// END SEARCH
export default function Header() {
  const dispatch = useDispatch()

  // render total cart shopping Cart
  const arrCarts = useSelector(state => state.productReducer.arrCarts);
  const totalCart = useSelector(state => state.productReducer.totalCart);
  // start Login
  const { userLogin } = useSelector(state => state.userReducer);
  const renderLoginLink = () => {
    if (userLogin.email !== '') {
      return <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
        <Box sx={{
          flexGrow: 0, position: 'relative',
        }}>
          <Box className='box-login' sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0,
            '&:hover .MuiSvgIcon-root': {
              opacity: 1,
              right: { md: '-28px', xs: '-44px' },
              transition: 'all .5s',
            },
          }}>
            <Avatar onClick={() => {
              history.push('/profile')
            }} alt="Remy Sharp" src="https://gaixinhbikini.com/wp-content/uploads/2022/09/gai-dep-china.jpg" />
            <LogoutIcon
              onClick={() => {
                clearStorage(USER_LOGIN);
                window.location.reload();
                // history.push('/')
              }}
              sx={{
                position: { md: 'absolute', xs: 'unset' },
                top: '8px', right: 0,
                opacity: { md: 0, xs: 1 },
                color: '#d32f2f',
                // color:'white',
                cursor: 'pointer',
                transition: 'all .5s',
                translate: { md: 'unset', xs: '22px 0' }
              }} />

          </Box>
        </Box>
      </Box >
    }

    return <Button className='header-login' sx={{
      color: 'white',
      '&.MuiButtonBase-root': {
        marginRight: '0px',
        height: '40px'
      }
    }} onClick={() => {
      history.push('/login')
    }}>Đăng Nhập</Button>
  }
  // end Login
  // header fix
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    dispatch(addTotalCartAction())

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }

  }, [totalCart, arrCarts])
  // end header fix
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ display: { md: 'none' } }}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 1 new notifications"
          color="inherit"

        >
          <Badge badgeContent={totalCart} color="error">
            <AddShoppingCartIcon onClick={() => { history.push('/carts') }} />
          </Badge>
        </IconButton>
        <p>Card</p>
      </MenuItem>

      <MenuItem sx={{ display: { xs: 'block', sm: 'none' } }}>
        <ModeSelect />
      </MenuItem>

      <MenuItem>
        {renderLoginLink()}
      </MenuItem>
    </Menu>
  );

  const handleSubmitSearch = (e) => {
    //dung trong truong hop muốn seach luôn nhưng trong phần này thì chỉ cho qua trang seacrh rồi mới tìm kiếm
    e.preventDefault();
    history.push('/search')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' className={`header sticky-on ${scrollPosition > 64 ? 'sticky' : ''}`}
        sx={{
          '&.MuiPaper-root': { boxShadow: 'none' }
        }}
      >
        <Container sx={{
          '&.MuiContainer-root': { maxWidth: '1280px', p: 0 }

        }}>
          <Toolbar >
            {/* <Button variant='h1' sx={{
              fontSize: '22px',
              borderRadius: '30%',
              // color: (theme) => theme.palette.mode === 'dark' ? ,
              color: '#1976d2',
              textTransform: 'unset',
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'white'),
              '&:hover': { bgcolor: (theme) => theme.palette.mode === 'light' ? 'white' : 'white' }
            }}
              startIcon={<AllInclusiveIcon />}
              onClick={() => { history.push('/') }}
            >Shoes</Button> */}
            <NavLink className='logo-main' to='/'>
              <img src="./img/ShopShoes-Logo.png" alt="logo" />
            </NavLink>
            {/*Menu Mobile */}
            <Box>
              <Button
                size="large"
                edge="start"
                aria-label="open drawer"
                sx={{
                  color: 'white', mr: 2, display: { xs: 'block', md: 'none' },
                  '&.MuiButtonBase-root': {
                    marginRight: '0px',
                    minWidth: '50px',
                  }
                }}
                id="basic-button-bar"
                aria-controls={open ? 'basic-menu-bar' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

              >
                <MenuIcon />
              </Button>
              <Menu
                id="basic-menu-bar"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button-bar'
                }}
                sx={{ display: { md: 'none' } }}
              >
                <MenuItem ><HomeMenu /></MenuItem>
                <MenuItem > <Men /></MenuItem>
                <MenuItem > <Woman /></MenuItem>
                <MenuItem > <Kid /></MenuItem>
              </Menu>
            </Box>

            {/*Menu Tablet and > 900px */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <HomeMenu />
              <Men />
              <Woman />
              <Kid />
            </Box>
            {/* Menu Tablet 900px */}
            <form action='#' >
              <Search onClick={() => {
                history.push('/search')
              }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </form >
            <Box sx={{ flexGrow: 1 }} />
            {/* dark light */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ModeSelect />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                color="inherit"
                sx={{
                  margin: '0 5px',
                  padding: '0 12px',
                }}
                onClick={() => {
                  history.push('/carts');
                  //có thể làm đg ở trang nào thì tới trang đó luôn k về trang chủ
                }}
              >
                <Badge badgeContent={totalCart} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
              {renderLoginLink()}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                sx={{
                  '&.MuiButtonBase-root': {
                    padding: 0,
                  }
                }}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

      </AppBar>
      {renderMobileMenu}
    </Box >
  )
}
