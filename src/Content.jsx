import Java from './Java'
import Python from './Python'
import Html from './Html'
import Css from './Css'
import Js from './Js'
import Sql from './Sql'

import { useState } from 'react';
import Nav2 from './Nav2';

function Content() {

  const [page,setPage] = useState('Java');

  return (
    <div className="content">
       < Nav2 className="course_nav" page={page} setPage={setPage} />
        <div className="course_content">
        {page === 'Java' && <Java/>}
        {page === 'Python' && <Python/>}
        {page === 'Html' && <Html/>}
        {page === 'Css' && <Css/>}
        {page === 'Js' && <Js/>}
        {page === 'Sql' && <Sql/>}
        </div>
    </div>
  );
}

export default Content;
