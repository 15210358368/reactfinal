function Nav2( {setPage} ) {


  function navTo(e,target){
    e.preventDefault();
      setPage(target);
  }


  return (
    <nav className="nav2">
      <ul className="nav2_ul">
        <li className="nav2_li"> <a href="/Java" onClick = { (e) => navTo(e,'Java')}>Java</a></li>
        <li className="nav2_li"> <a href="/Python" onClick = { (e) => navTo(e,'Python')}>Python</a></li>
        <li className="nav2_li"> <a href="/Html" onClick = { (e) => navTo(e,'Html')}>Html</a></li>
        <li className="nav2_li"> <a href="/Css" onClick = { (e) => navTo(e,'Css')}>Css</a></li>
        <li className="nav2_li"> <a href="/Js" onClick = { (e) => navTo(e,'Js')}>Js</a></li>
        <li className="nav2_li"> <a href="/Sql" onClick = { (e) => navTo(e,'Sql')}>Sql</a></li>
      </ul>
    </nav>
  );
}

export default Nav2;
