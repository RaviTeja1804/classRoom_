import React, { useState } from 'react'
import './CSS/Homepage.css'

function Homepage() {

  const [display, setDisplay] = useState('home')
  let content
  let classrooms = [
    {name: "L1", location: "Lecture hall complex", capacity: 120, equipment: ["whiteboard"]},
    {name: "L2", location: "Lecture hall complex", capacity: 120, equipment: ["whiteboard"]},
    {name: "5G1", location: "Core 5", capacity: 180, equipment: ["projector", "whiteboard", "Extra board"]},
    {name: "2101", location: "Core 2", capacity: 80, equipment: ["projector", "whiteboard"]},
    {name: "2101", location: "Core 2", capacity: 80, equipment: ["projector", "whiteboard"]},
    {name: "2101", location: "Core 2", capacity: 80, equipment: ["projector", "whiteboard"]},
    {name: "2101", location: "Core 2", capacity: 80, equipment: ["projector", "whiteboard"]},
    {name: "2101", location: "Core 2", capacity: 80, equipment: ["projector", "whiteboard"]}
  ]
  const holidays = [
    {name: "Republic Day", date: "January 26", day: "Friday"},
    {name: "Holi",date: "March 25",day: "Monday"},
    {name: "Good Friday",date: "March 29",day: "Friday"},
    {name: "Id-ul-Fitr",date: "April 11",day: "Thursday"},
    {name: "Ram Navmi",date: "April 17",day: "Wednesday"},
    {name: "Mahavir Jayanti",date: "April 21",day: "Sunday"},
    {name: "Buddha Purnima",date: "May 23",day: "Thursday"},
    {name: "Id-ul-Zuha (Bakrid)",date: "June 17",day: "Monday"},
    {name: "Muharram",date: "July 17",day: "Wednesday"},
    {name: "Independence Day / Parsi New Year’s Day / Nauraj",date: "August 15",day: "Thursday"},
    {name: "Janamashtami (Vaishnva)",date: "August 26",day: "Monday"},
    {name: "Milad-un-Nabi or Id-e-Milad (Birthday of Prophet Mohammad)",date: "September 16",day: "Monday"},
    {name: "Mahatma Gandhi’s Birthday",date: "October 2",day: "Wednesday"},
    {name: "Dussehra",date: "October 12",day: "Saturday"},
    {name: "Diwali",date: "October 31",day: "Thursday"},
    {name: "Christmas",date: "December 25",day: "Wednesday"}
];


  if(display==='home')
  {
    content = (
      <div className="home-content">
        {classrooms.map((classroom, index) => {
          return <div key={index} className="classroom-card">
                    <h1>{classroom.name}</h1>
                    <p><strong>Location:</strong> {classroom.location}</p>
                    <p><strong>Capacity:</strong> {classroom.capacity}</p>
                    <p><strong>Equipment:</strong> {classroom.equipment.join(", ")}</p>
                  </div>
        })}
      </div>
    )
  }
  else if(display==='booknow')
  {
    content = (
        <form className='booknow-content'>
          <div className="eachdetail">
            <label htmlFor="date">Date :</label>
            <input type="date" id="date" name="date" required />
          </div>
          
          <div className="eachdetail">
            <label htmlFor="startTime">Start Time :</label>
            <input type="time" id="startTime" name="startTime" required />
          </div>

          <div className="eachdetail">
            <label htmlFor="endTime">End Time :</label>
            <input type="time" id="endTime" name="endTime" required />
          </div>

          <div className="eachdetail">
            <label htmlFor="classroom">Select Classroom :</label>
            <input type="text" id="classroom" name="classroom" required />
          </div>

          <div className="eachdetail">
            <label htmlFor="purpose">Purpose :</label>
            <input type="text" id="purpose" name="purpose" required />
          </div>

          <div className="eachdetail">
            <label htmlFor="name">Your Name :</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="eachdetail">
            <label htmlFor="phone">Your Phone :</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="eachdetail">
            <label htmlFor="specialRequirements">Special Requirements :</label>
            <textarea id="specialRequirements" name="specialRequirements"></textarea>
          </div>

          <button type="submit" className='bookclass'>Book Now</button>
        </form>
    )
  }
  else if(display==='holiday')
  {
    content = (
      <div className="holiday-content">
        {holidays.map((holiday, index) => {
          return <div key={index} className="holiday-card">
                    <h1>{holiday.name}</h1>
                    <p><strong>Date : </strong> {holiday.date}</p>
                    <p><strong>Day : </strong> {holiday.day}</p>
                  </div>
        })}
      </div>
    )
  }

  return (
    <div className='homepage'>
      <div className='navbar-home'>
          <p className='name'>Classroom Booking System</p>
          <p className='hello'>Hello, Ravi Teja</p>
          <button className='logout-btn'>Logout</button>
      </div>

      <div className="listing">
        <button className="home" onClick={() => setDisplay('home')}>Home</button>
        <button className="booknow" onClick={() => setDisplay('booknow')}>Book a Classroom</button>
        <button className="upcoming" onClick={() => setDisplay('upcoming')}>Upcoming bookings</button>
        <button className="old" onClick={() => setDisplay('old')}>Old bookings</button>
        <button className="holiday" onClick={() => setDisplay('holiday')}>Public holidays</button>
      </div>

      <div className="oneoffive">
        {display==='home'?<div className="allrooms">All Rooms</div>:<></>}
        {display==='booknow'?<div className="allrooms">Enter the details</div>:<></>}
        {content}
      </div>
    </div>
  )
}

export default Homepage