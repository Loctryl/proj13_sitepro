import { Image, Stack } from "react-bootstrap";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import Footer from '../components/menu/footer.js'
import TilesStaff from "../components/tiles/tilesstaff";
import "./style/aboutus.css";

function AboutUs(props) {

  return (
    <>
      <NavBar />
      <div>
        <h2>Qu'est ce qu'Alkya ?</h2>
        <p className="text">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <div>
        <h2>Pourquoi Alkya ?</h2>
        <Stack className="logoWhy" direction="horizontal" gap={5}>
          <Image href="../../database/public/uploads/Vector.png" alt="logo whiteboard"></Image>
          <Image href="../../database/public/uploads/Vector(1).png" alt="logo working tree"></Image>
        </Stack>
        <p className="text">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <TilesStaff />
      <Footer/>
    </>
  )
}

export default AboutUs;