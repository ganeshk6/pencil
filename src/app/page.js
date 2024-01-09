import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Feature from "./Components/Features/Feature";
import About from "./Components/About/About";
import Pencil from "./Components/Pencil/Pencil";
import VideoComponents from "./Components/Video/Video";


export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Feature />
    <About />
    <VideoComponents />
    <Pencil />
    <Footer />
    </>
  )
}
