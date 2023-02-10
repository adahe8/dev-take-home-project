import React from "react";

const SearchBar = ({pastEventPosts, setSearchResults}) => {
  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) => {
    if (!e.target.value) return setSearchResults(pastEventPosts);

    const searchReturns = pastEventPosts.filter(pastEvent => pastEvent.title.includes(e.target.value)
    ||pastEvent.description.includes(e.target.value))

    setSearchResults(searchReturns);
  }

  return (
    <header>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input className="search_input"
        type="text" id="search"
        onChange={handleChange}
        />
      </form>
    </header>
  )
}
/*
const SearchBar = ({keyword,onChange}) => {
  return (<input key="search-bar" placeholder="search events..." value={keyword} onChange={(e) => onChange(e.target.value)}/>);
}
*/
export default SearchBar;

/*
import React from "react";

function SearchBar({placeholder, data}){
  return (
    <div className="search">
      <div className="searchInputs">
        <input type='text'key="search-bar" placeholder={placeholder} value={keyword} onChange={(e) => onChange(e.target.value)}/>
      </div>
      <div className="dataResult">
        {data.map((value,key)=> {
          return (
            <a className="event" href={'https://acmucsd.com/events/'+ value.title.replace(/ /g,'-').toLowerCase()+'-'+value.uuid} target="_blank" rel="noreferrer">
              <h4>{value.title}</h4>
            </a>
          );
        })}
      </div>
    </div>

  );
}

export default SearchBar;
*/