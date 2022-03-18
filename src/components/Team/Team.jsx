import React from 'react'
import Person from './Person';
import "./Team.css";

function Team() {
  return (
    <div className='team'>
        <h2>Team</h2>
        <div className="members">
            <Person name="Dan Smith" image="/images/team/Dan.png" position="Lead Artist" />
            <Person name="Joe Brown" image="/images/team/Joe.png" position="Artist" />
            <Person name="James David" image="/images/team/James.png" position="Project Coordinator" />
            <Person name="Joshua Jack" image="/images/team/Jack.png" position="Lead Developer" />
        </div>
    </div>
  )
}

export default Team