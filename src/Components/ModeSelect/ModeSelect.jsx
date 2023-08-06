import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleValueResMode = () => {
    if (mode) {
      console.log('mode', mode)

    }
  }
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel
        sx={{
          color: (theme) => theme.palette.mode === 'dark' ? 'white' : { xs: 'black', sm: 'white' },
          '&.Mui-focused ': { color: (theme) => theme.palette.mode === 'dark' ? 'white' : { xs: 'black', sm: 'white' } }
        }}
        id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: (theme) => theme.palette.mode === 'dark' ? 'white' : { xs: 'black', sm: 'white' },
          '.MuiOutlinedInput-notchedOutline': { borderColor: (theme) => theme.palette.mode === 'dark' ? 'white' : { xs: 'black', sm: 'white' } },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: (theme) => theme.palette.mode === 'dark' ? 'white' : { xs: 'black', sm: 'white' } },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: (theme) => theme.palette.mode === 'dark' ? 'white' : { xs: 'black', sm: 'white' } },
          '& .MuiSvgIcon-root': { color: (theme) => theme.palette.mode === 'dark' ? 'white' : { xs: 'black', sm: 'white' } }
        }}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='smail' /> Light
          </Box>
        </MenuItem>

        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
            <DarkModeOutlinedIcon fontSize='smail' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
            <SettingsBrightnessIcon fontSize='smail' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl >
  )
}
export default ModeSelect
