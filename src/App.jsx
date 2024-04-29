import './App.css'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'
import Hero from './Components/Hero/Hero'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product'
import img from './assets/Imgs/Mask Group (1).png'
import img1 from './assets/Imgs/Mask Group (2) (1).png'

function App() {

  return (
    <>
    <Navbar/>
    <Hero />
    <Main/>
    <About text_about= 'About us' text_title = 'Food Stalls with Persons but  to  Product marketing plane catlogues etc to. ' text_description = 'There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.' btn = "Read More" img = {img}/>
    <Product/>
     <Banner text_h4 = 'Testimonial'text_h2 = 'Making Food great again and again' p_text= 'You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.' img = {img1}/>
     <Form/>
     <Footer/>
    </>

    
  )
}

export default App
