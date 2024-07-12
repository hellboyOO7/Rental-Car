import "./App.css";
import Banner from "./Components/Banner/Banner";
import BookCar from "./Components/BookCar/BookCar";
import Details from "./Components/Details/Details";
import Download from "./Components/Download/Download";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Models from "./Components/Models/Models";
import Navbar from "./Components/Navbar/Navbar";
import Plan from "./Components/Plan/Plan";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookCar />
      <Plan />
      <Details />
      <Banner />
      <Models />
      <Testimonial />
      <Download />
      <Footer />
    </>
  );
}

export default App;
