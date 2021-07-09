import React from 'react';
import '../Style/Home.Page.css'
function Home() {
    return(
      <div className="home">
         <div className="header"> {/* Contains the title and a short generalist description */}
            <h1 className="title">
                Home
            </h1>
             <p>
                 This is the home page, this is some test text and I don't know what to put inside, please change me!
             </p>
         </div>
          <div className="buttons"> {/* List of buttons that will open the popups. This 'popups' should be components */}
              <button>BlockChain Team</button>
              <button>Code Team</button>
              <button>Random team</button>
          </div>
      </div>
    );
}
export default Home;
