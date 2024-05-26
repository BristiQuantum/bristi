import Contact_Page from "../Contact_Page/Contact_Page";
import About from "./About/About";
// import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Skill from "./Skill/Skill";


const Home_Page = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skill></Skill>
            <Portfolio></Portfolio>
            {/* <Contact></Contact> */}
            <Contact_Page></Contact_Page>
        </div>
    );
};

export default Home_Page;