

function Nsername({name}) {

  return (
    <div className="username">
       {name === ""? <p>Let's fill in and subscribe!</p> : <p> *{name}*, go ahead!</p>}
    </div>
  );
}

export default Nsername;
