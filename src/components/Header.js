import Designation from "./Designation";
import Experience from "./Experience";

const Header = () => {
    return(
        <>
        <div className="header">
            <h1>Bittoo Aggarwal</h1>
            <p>Software Developer,Educator at Geekster</p>
            <a href="https://www.xyz.com">Linkedin</a>&nbsp;
            <a href="https://www.xyz.com">Github</a>

        </div>
        
        <Experience />
        <Designation />
        </>
    )
}

export default Header;