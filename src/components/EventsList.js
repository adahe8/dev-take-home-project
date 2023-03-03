import EventPost from "./EventPosts";

const EventsList = ({ searchResults }) => {

    const results = searchResults.map( post => <EventPost key={post.uuid} post={post} />)

    const showContent = results?.length ? results : <article><p>No Matches</p></article>

    return (
        <main>{showContent}</main>
        /*
        <div classname="event-card">
            {pastEvents &&
            pastEvents.map(({uuid,title, description, location, pointValue}) => (
                title && uuid &&
                <div classname="event-list" key={uuid}>
                    <h4><a href={'https://acmucsd.com/events/'+ title.replace(/ /g,'-').toLowerCase()+'-'+uuid} target="_blank" rel="noreferrer">{title}</a> - <b>{location}</b></h4>
                </div>
            ))}
        </div>
        */
    )
}

export default EventsList