import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import { useState } from "react";

// function Test() {
//   const [rating, setRating] = useState(0);

//   return (
//     <>
//       <StarRating
//         maxStars={5}
//         color="blue"
//         size={30}
//         messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
//         onSetRating={setRating}
//         defaultRating={3}
//       />
//       <p>This movie is rated {rating || "X"} on imdb</p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{<App />}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
