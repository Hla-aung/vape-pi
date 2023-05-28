import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';

const Header = () => {
  return (
    <>
        <nav className="nav">
            <img src="../images/logo.png" alt="logo" id="logo"/>
            <div className="navicons">
                <button><SearchOutlinedIcon sx={{padding: "5px", marginRight: "5px", color: "white"}}/></button>
                <button><ShoppingCartOutlinedIcon sx={{padding: "5px", marginRight: "5px", color: "white"}}/></button>
                <button><DensityMediumOutlinedIcon sx={{padding: "5px", marginRight: "5px", color: "white"}}/></button>
            </div>
        </nav>
    </>
  )
}

export default Header