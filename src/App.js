import { useState } from "react";
import "./styles.css";

const books = {
  business: [
    { name: "The learn startup", rating: "5/4" },
    { name: "Think and grow rich", rating: "5/4" },
    { name: "become rich", rating: "5/4" }
  ],
  meditation: [
    { name: "The miracle of mindfulness", rating: "5/5" },
    { name: "Then power of now", rating: "4/5" },
    { name: "mindfulness", rating: "5/4" }
  ],
  psychology: [
    { name: "Thinking fast and slow", rating: "5/4" },
    { name: "influence", rating: "5/4" },
    { name: "emotional intelligence", rating: "5/4" }
  ]
};
//var flavour = Object.keys(books);
//console.log(flavour);
export default function App() {
  const [selectedgener, setgener] = useState("business");
  function clickhandler(gener) {
    console.log(gener);
    //var currentData=books[x]
    //console.log(currentData)
    setgener(gener);
  }
  return (
    <div className="App">
      <h1>📚 Library</h1>
      <p>explore my favourite books.select gener to get started</p>

      {Object.keys(books).map((gener) => (
        // console.log(gener),
        <button
          onClick={() => clickhandler(gener)}
          style={{
            cursor: "pointer",
            background: "#A5E7EB",
            borderRadius: ".5rem",
            padding: ".5rem",
            margin: ".5rem .3rem"
          }}
        >
          {gener}
        </button>
      ))}

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[selectedgener].map((item) => (
            //console.log(item),

            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {item.name} </div>
              <div style={{ fontSize: "smaller" }}> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
