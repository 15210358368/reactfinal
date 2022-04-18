function Footer( {setPage} ) {


  function navTo(e,target){
    e.preventDefault();
      setPage(target);
  }


  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li className="nav_li"> <a href="/about" onClick = { (e) => navTo(e,'About')}>About</a></li>
        <li className="nav_li"> <a href="/privacy" onClick = { (e) => navTo(e,'Privacy')}>Privacy</a></li>
        <li className="nav_li"> <a href="https://www.linkedin.com/in/pengwang2/" >Contact Me</a></li>
      </ul>
      <span className="footer_gap"></span>
    </nav>
  );
}

export default Footer;
