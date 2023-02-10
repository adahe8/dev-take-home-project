import { getEvents } from './api/API';
import React, { useState, useEffect } from "react";
import EventsList from "./EventsList";
import SearchBar from './SearchBar';
import "./App.css";

/*const API_BASE_URL = "https://api.acmucsd.com/api/v2";*/

function App() {
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults]=useState([]);
  /*
  const [allPastEvents, setAllPastEvents] = useState([]);
  const [keyword, setKeyword] = useState('');
  */

  /*const fetchEvents = async () => {
    const data = await(await fetch(`${API_BASE_URL}/event/past`)).json();
    const sortedEvents = data.hits.sort((pastEvent,nextPastEvent) => (pastEvent.start < nextPastEvent.start ? 1 : -1));
    setAllPastEvents(sortedEvents);
    setEvents(sortedEvents);
  };
  
  const updateKeyword = (keyword) => {
    const filteredEvents = allPastEvents.filter(event => {
      return `${event.title.toLowerCase()} ${event.location.toLowerCase()} ${event.description.toLowerCase()}`.includes(keyword.toLowerCase());
    });
    setKeyword(keyword);
    setEvents(filteredEvents);
  }
*/
  useEffect(() => {
    getEvents().then((data) => {
      console.log(data)
      setEvents(data.events)
      setSearchResults(data.events)
      return (data.events)
    })/*.then((data)=> {
      console.log(data)
      //setEvents(data.events[]);
      */
     
  }, [])

  return (
    <div className="App">
      <h1>ACM Past Events</h1>
      <SearchBar pastEventPosts={events} setSearchResults={setSearchResults}/>
      <EventsList searchResults= {searchResults}/>
    </div>
  );
}

export default App;