import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/mainteam.css";

function MainTeam(props){

    return (
      <>
      <NavBar />
    oué
    <Footer partners={props.partners} sponsors={props.sponsors}/>
      </>
    )
  }
  
  export default MainTeam;