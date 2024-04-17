import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const CTA = () => {
  return (
    <div>
      <section className="cta">
        <p className="cta-text">
          Want to know more about me? <br className="sm:block hidden"/>
          Feel free to reach out! 🚀
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
        
      </section>
      <hr className="border-slate-200 cta"/>
      <Footer/>
    </div>
  )
}

export default CTA