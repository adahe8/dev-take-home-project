import React, { useState, useEffect } from "react";

const API_BASE_URL = "https://api.acmucsd.com/api/v2";

export default function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/event/past`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //setEvents(data.events[]);
        setEvents(data.events);
        console.log(events);
        console.log(data.events);
      });
  }, []);

  return (
    <div className="App">
      <h1>ACM Past Events</h1>
      <div className="view-events">
        <table>
          {events.map((events) => {
            return (
              <li key={events.id}>{events.title}</li>
            )
          })}
          ;
        </table>
      </div>
    </div>
  );
}