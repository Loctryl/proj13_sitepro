import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/team.css";

function Team(props){

    return (
      <>
      <NavBar />
    oui
    <Footer partners={props.partners} sponsors={props.sponsors}/>
      </>
    )
  }
  
  export default Team;