function Nav( {setPage} ) {


  function navTo(e,target){
    e.preventDefault();
      setPage(target);
  }


  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li className="nav_li"> <a href="/home" onClick = { (e) => navTo(e,'Home')}>Home</a></li>
        <li className="nav_li"> Courses
          <ul className="course_ul" id="menu">
            <li className="course_li" href="/Content" onClick = { (e) => navTo(e,'Content')}>Java</li>
            <li className="course_li" href="/content" onClick = { (e) => navTo(e,'Content_others')}>Python</li>

          </ul></li>
        <li className="nav_li"> <a href="/email" onClick = { (e) => navTo(e,'Email')}>Subscribe</a></li>
        <li className="nav_li"> <a href="/about" onClick = { (e) => navTo(e,'About')}>About</a></li>
        <li className="nav_li"> <a href="/privacy" onClick = { (e) => navTo(e,'Privacy')}>Privacy</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
