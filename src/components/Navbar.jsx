import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
const Navbar = () => (
  <Stack style={{ padding: "10px" }} direction={"row"}
    alignItems={"center"}
    p={"2"}
    sx={{ position: "sticky", background: '#000', top: '0', justifyContent: 'space-between' }}>
    <Link to={'/'} style={{ dispaly: 'flex', alignItems: 'center' }}>
      <img src="images.png" alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar