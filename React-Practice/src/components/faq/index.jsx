
import React, { useState } from "react";
import faq from "./data";

function Faq() {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [enable, setEnable] = useState(false);

  function handleClick(id) {
    if (enable) {
      multiSelection(id);
    } else {
      singleSelection(id);
    }
  }

  function singleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  function multiSelection(id) {
    let cpyMultiSelected = [...multiSelected];
    const idx = cpyMultiSelected.indexOf(id);
    if (idx === -1) {
      cpyMultiSelected.push(id);
    } else {
      cpyMultiSelected.splice(idx, 1);
    }
    setMultiSelected(cpyMultiSelected);
  }

  return (
    <div className="faq_wrapper">
      <div className="faq_container">
        <button className="faq_button" onClick={() => setEnable(!enable)}>
            {enable ? "Disable" : "Enable"}
        </button>
        {faq && faq.length > 0 ? (
          faq.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="faq"
            >
              <div className="faq_ques">
                <h3 className="faq_h3">{item.question}</h3>
                <span className="faq_logo">+</span>
              </div>
              {(selected === item.id || multiSelected.indexOf(item.id) !== -1) && (
                <div className="faq_ans">{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
}

export default Faq;
