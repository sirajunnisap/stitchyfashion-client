import React from 'react'
import {motion} from 'framer-motion'
function LandingPage() {
  return (
    <div>

     
     <motion.h1
     initial={{ opacity: 0, scale: 0}}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 2 }}

     >
    Welcome to our fashion design course
      
      </motion.h1> 
     
    </div>
  )
}

export default LandingPage;
