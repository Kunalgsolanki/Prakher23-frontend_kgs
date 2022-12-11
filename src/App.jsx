
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/AboutPage/About";

import HomePage from "./Pages/HomePage/HomePage";
import { motion } from 'framer-motion';



function App() {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  return(
    <div>
      
     <Navbar/> 
     <motion.div
      whileInView={{ y: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >                   
                                         
     <HomePage/>
     </motion.div>

     <motion.div
      whileInView={{ y: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >  


     <About/>

     </motion.div>
    

    
    </div>
      );

}

export default App;
