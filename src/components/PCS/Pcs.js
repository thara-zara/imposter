import React from 'react'
import PcsCard from '../Props/PcsCard'
import "./Pcs.css"
import ig1 from "../../assests/ig2.png";
import ig2 from "../../assests/ig1.webp";
import ig3 from "../../assests/ig3.webp";

const Pcs = () => {
  return (
    <div className='pcs'>
        <div className='pcs-mid'>
            <div className='one'>
                <PcsCard
            color_class="card01"
            img_name={ig2}
            img="ig2"
            head="play and earn"
            content="Notice the use of %PUBLIC_URL% in the tags above.
                      It will be replaced with the URL of the `public` "
            header="crad-content"
            skew="pcs1"
            />
            </div>
            <div className='two'>
                <PcsCard
            color_class="card02"
            img_name={ig1}
            img="ig1"
            head="community owned"
           content="To begin the development, run `npm start` or `yarn start`.
                    To create a production bundle, use `npm run build` or `yarn build`"
            header="crad-content"
            skew="pcs2"
            />
            </div>
            <div className='three'>
               <PcsCard
            color_class="card03"
            img_name={ig3}
            img="ig3"
            head="social metaverse"
            content="To begin the development, run `npm start` or `yarn start`.
                      To create a production bundle, use `npm run build` or `yarn build`"
            header="crad-content"
            skew="pcs3"
            /> 
            </div>
             
        </div>
    </div>
  )
}

export default Pcs