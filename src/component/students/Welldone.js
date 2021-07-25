import React from "react";
import "./Welldone.css"
import M from "../../images/M.png";
import Done from "../../images/Done.png";


export default function Welldone() {
  return (
    <>
      <body>
        <div className="done">
          <img src={M} alt="M" />
          <span>
          Well-done!
          </span>
        </div>
      
      <main>
        <div className="celebrate">
          <p>
            You are all set! You'll be notified in your profile page once a
            Mentor accepts your request.
          </p>
        </div>

        <div>
          <img src={Done} alt="Done" />
        </div>

        <button className="btn">Go to My Profile Page</button>
      </main>
      </body>
    </>
  );
}
