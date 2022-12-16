import React from 'react'
import MapCard from '../Props/MapCard';
import "./Map.css";


const Map = () => {
  return (
    <div className='map'>
        <div className='road'>
            <h1>genesis roadmap</h1>
            <p>manifest.json provides metadata used when your web app is installed on a
                user's mobile device or desktop. See json provides metadata used when your web app is installed on a
                user's mobile device or desktop</p>
            <div className='phase'>
                <span className='p1'>phase 01</span>
                <span>phase 02</span>
                <span>phase 03</span>
            </div>
        </div>
        <div className='map-card'>
            <div className='card-body'>
                    <div className='card-prop1'>
                        <MapCard
                        head="01"
                        name="week 02 - stacking"
                        content="json provides metadata used when your web"
                        card="card1"
                        body="left"
                        hed="head1"
                        />
                    </div>
                    <div className='card-prop2'>
                        <MapCard
                        head="02"
                        name="week 02 - stacking"
                        content="json provides metadata used when your web"
                        card="card0"
                        body="right"
                        hed="head2"
                        />
                    </div>
                    <div className='card-prop1'>
                        <MapCard
                        head="03"
                        name="week 02 - stacking"
                        content="json provides metadata used when your web"
                        card="card1"
                        body="left"
                        hed="head1"
                        />
                    </div>
                    <div className='card-prop2'>
                        <MapCard
                        head="04"
                        name="week 02 - stacking"
                        content="json provides metadata used when your web"
                        card="card0"
                        body="right"
                        hed="head2"
                        />
                    </div>
                    <div className='card-prop1'>
                        <MapCard
                        head="05"
                        name="week 02 - stacking"
                        content="json provides metadata used when your web"
                        card="card1"
                        body="left"
                        hed="head1"
                        />
                    </div>
                    <div className='card-prop2'>
                        <MapCard
                        head="06"
                        name="week 02 - stacking"
                        content="json provides metadata used when your web json provides metadata used when your web"
                        card="card0"
                        body="right"
                        hed="head2"
                        />
                    </div>
                    <div className='card-prop1'>
                        <MapCard
                        head="07"
                        name="week 02 - stacking"
                        content="json provides metadata used your web"
                        card="card1"
                        body="left"
                        hed="head1"
                        />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Map
