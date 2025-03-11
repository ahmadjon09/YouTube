import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      top: 0,
      background: '#000',
      justifyContent: 'space-between',
      zIndex: 1000
    }}
  >
    <Link
      to='/'
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        gap: '10px',
        fontSize: '20px'
      }}
    >
      <img
        className='navImg'
        style={{ padding: '5px' }}
        src='images.png'
        alt='logo'
        height={45}
      />
      <p className='navText'>YouTube</p>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
