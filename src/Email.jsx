
import { useState } from 'react';
import Nsername from './Nsername';
function Email( {setPage} ) {

  function navTo(e,target){
      e.preventDefault();
      setPage(target);
  }
 
  function sub(e){
    
    setisSub(1);
    e.preventDefault();
    
}

  const [name,setName] = useState("");
  const [email,setemail] = useState("");

  const [isSub,setisSub] = useState(0);



  return (
    <div className="sub">
      <Nsername name={name} setName={setName}/>
      <h2 className="sub_title">Get new resources from us!</h2>
      <form className="sub_form">
        <label>User Name{name===""? <p className="tip">*This area is required!</p> : ""}</label>
        <input required maxlength="25" 
        name="input"
        value={name}
        onInput = {(e) => setName(e.target.value)} 
        disabled = {isSub === 1? true:false}

        ></input>
        <label>Email Address{email===""? <p className="tip">*This area is required!</p> : ""}</label>
        <input type="email"  required maxlength="50" onInput = {(e) => setemail(e.target.value)} disabled = {isSub === 1? true:false}></input>
        <label id="fre">Frequency<p className="tip">*required</p></label>
        <select id="fre_select" required>
            <option value=""> Select Frequency </option>
            <option value=""> Get Email Per day </option>
            <option value=""> Get Email Per Month </option>
            <option value=""> Get Email 3 Month </option>
            <option value=""> Get Email 6 Month </option>
            <option value=""> Get Email Per Year </option>
        </select>
        <input type="checkbox" id="check"></input>
        <label id="checkbox_label">Accept User Policies. <a href="/about"  onClick = { (e) => navTo(e,"Privacy")}> Click to read </a></label>
        <button id="sub_btn" onClick={(e) =>sub(e)} >subscribe</button>

        { isSub === 1 ? <p className="tip_submitted">*{name}*, you Subcribed! Enjoy the courses</p> : ""}

    </form>

    </div>
  );

}

export default Email;
