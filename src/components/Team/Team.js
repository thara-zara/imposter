import React from 'react';
import "./Team.css"
import ig1 from "../../assests/ig3.webp"
import ig2 from "../../assests/ig1.webp"

const Team = () => {
  return (
    <div className='team'>
      <h1>Team</h1>
      <div className=''>

      </div>
      <p>
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.
      Notice the use of %PUBLIC_URL% in the tags above.
      Notice the use of %PUBLIC_URL% in the tags above.
      </p>
      <div className='team-cards'>
            <div className='team-cards-left'>
                <div className='img'><img src={ig1} alt="img"/></div>
                <h2>elliot wainman</h2>
                <h4>creator of elliottraders,vo funder of superfarm</h4>
                <p>Only files inside the `public` folder can be referenced from the HTML.
                  Notice the use of %PUBLIC_URL% in the tags above.
                  Notice the use of %PUBLIC_URL% in the tags above.</p>
                  <div className='team-cards-left-skew'></div>
            </div>
            <div className='team-cards-right'>
            <div className='img'><img src={ig2} alt="img"/></div>
                <h2>tim clansy</h2>
                <h4>lead blockchain architech in superfarm</h4>
                <p>Only files inside the `public` folder can be referenced from the HTML.
                    Notice the use of %PUBLIC_URL% in the tags above.
                    Notice the use of %PUBLIC_URL% in the tags above.</p>
                    <div className='team-cards-left-skew'></div>
            </div>
      </div>
      <h5>30+ more talented staff</h5>
    </div>
  )
}

export default Team
