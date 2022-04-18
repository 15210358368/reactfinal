import './App.css';
import { useState } from 'react';
import Home from './Home'
import Content from './Content'
import Email from './Email'
import About from './About'
import Privacy from './Privacy'
import Nav from './Nav'
import Footer from './Footer';
import Accordion from './Accordion';
import Content_others from './Content_others'


const defaultFAQs = {
  'Are these reources free?': `
  Yes,we only offer links of learning resources, copyright is belong to their author. `,
  'How many links in this website?': `
  We have about 20 links, but we are keep updating.`,
  'Why we made this website?':`
  We are making this programming learning website for you so that you can build a better career life, and buy more cat food, cat toys, cat trees, cat clothes, tofu cat litter, or anything else that your cat master told you they like.
  `,

};



function App() {

  
  const [faqs] = useState(defaultFAQs);
  const [page,setPage] = useState('Home');


  return (
    <div className="app" >

      <img className="app_header_logo" src="logo.png" alt="logo of codemeow"></img>
       
      < Nav page={page} setPage={setPage} />
      

      <header className="app_header">
     
      <img className="app_header_bg" src="hd.png" alt="background picture, dark blue"></img>
      <h1 className="app_header_title">Learn With Us</h1>
      <h5 className="app_header_subtitle">Skills for your future</h5>

      
        {page === 'Home' && <Home page={page} setPage={setPage}/>}
        {page === 'Content' && <Content page={page} setPage={setPage}/>}
        {page === 'Content_others' && <Content_others page={page} setPage={setPage}/>}
        {page === 'Email' && <Email page={page} setPage={setPage} />}
        {page === 'Privacy' && <Privacy/>}
        {page === 'About' && <About/>}

      </header>
      
      <h2 className = "qa">Common questions and answer</h2>
      <Accordion className="accordion" entries={faqs}/>
      
      <footer className="footer">
      < Footer page={page} setPage={setPage} />
      
      </footer>

      
      
    </div>
  );
}

export default App;
