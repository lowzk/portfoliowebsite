import './alternating_elements.css';

function AlternatingElements() {
  return (
    <div className="wrapper">
      <div className="static-txt">I'm a part time</div>
      <ul className="dynamic-txts">
        <li>
          <span>software dev,</span>
        </li>
        <li>
          <span>cs student,</span>
        </li>
        <li>
          <span>musician,</span>
        </li>
        <li>
          <span>data analyst,</span>
        </li>
        <li>
          <span>software dev,</span>
        </li>
        <li>
          <span>barista,</span>
        </li>
        <li>
          <span>photographer,</span>
        </li>
        <li>
          <span>shuttler,</span>
        </li>
      </ul>
    </div>
  );
}

export default AlternatingElements;
