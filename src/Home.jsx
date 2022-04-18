
import Carousel from './Carousel';

function Home({setPage}) {

  function navTo(e){
    e.preventDefault();
      setPage('Content');
  }

  const slides = [
    { src: "cou2.png", alt: "a pic shows what course we have(web/data/pm)", },
    { src: "cou1.png", alt: "a pic shows the purpose of this website to help you in career path building", },
    { src: "cou3.png", alt: "a picture says learn code!", },
  ];


  return (

    <div>
    <div className="course_list">

      <a className ="course_list_a" href="/content" onClick = { (e) => navTo(e)}> Go to course list &gt;&gt;&gt; </a>
        
        <div className="course_list_cards">
          <img className="course_list_picture" src="java.png" alt="a picture of java course cover"></img>
           <h3>Java Learning</h3>
           <p>Algorithms/Data Science</p>  </div>

         <div className="course_list_cards">
          <img className="course_list_picture" src="py.png" alt="a picture of python course cover"></img>
           <h3>Python Learning</h3>
           <p>Full-Stack/Machine Learning</p> </div>

         <div className="course_list_cards">
          <img className="course_list_picture" src="html.png" alt="a picture of html course cover"></img>
           <h3>HTML Learning</h3>
           <p>Front-End/Web Scrawler/SEO</p>  </div>

         <div className="course_list_cards">
          <img className="course_list_picture" src="css.png" alt="a picture of css course cover"></img>
           <h3>CSS Learning</h3>
           <p>Front-End/UIUX</p></div>


           <div className="course_list_cards">
          <img className="course_list_picture" src="js.png" alt="a picture of js course cover"></img>
           <h3>JavaScript Learning</h3>
           <p>Front-End/Full-Stack</p></div>

           <div className="course_list_cards">
          <img className="course_list_picture" src="sql.png" alt="a picture of sql course cover"></img>
           <h3>SQL Learning</h3>
           <p>Analytics/Database/Web</p></div>
           </div>
           <Carousel className="carousel_body" slides={slides}/>

    </div>
  );
}

export default Home;
