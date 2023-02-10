import React, { useState, useEffect } from "react";
import PastEventsList from "./EventsList";
import SearchBar from './SearchBar';
import "./App.css";

const API_BASE_URL = "https://api.acmucsd.com/api/v2";

export default function App() {
  const [events, setEvents] = useState([]);
  const [allPastEvents, setAllPastEvents] = useState([]);
  const [keyword, setKeyword] = useState('');

  /*const fetchEvents = async () => {
    const data = await(await fetch(`${API_BASE_URL}/event/past`)).json();
    const sortedEvents = data.hits.sort((pastEvent,nextPastEvent) => (pastEvent.start < nextPastEvent.start ? 1 : -1));
    setAllPastEvents(sortedEvents);
    setEvents(sortedEvents);
  };*/
  
  const updateKeyword = (keyword) => {
    const filteredEvents = allPastEvents.filter(event => {
      return `${event.title.toLowerCase()} ${event.location.toLowerCase()} ${event.description.toLowerCase()}`.includes(keyword.toLowerCase());
    })
    setKeyword(keyword);
    setEvents(filteredEvents);
  }

  useEffect(() => {
    fetch(`${API_BASE_URL}/event/past`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //setEvents(data.events[]);
        setEvents(data.events);
      });
  }, []);

  return (
    <>
    <div className="App">
      <h1>ACM Past Events</h1>
      <SearchBar keyword={keyword} onChange={updateKeyword}/>
      <PastEventsList pastEvents= {events}/>
    </div>
    </>
  );
}