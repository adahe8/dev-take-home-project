const PastEventsList = ({pastEvents = []}) => {
    return (
        <div classname="event-card">
            {pastEvents &&
            pastEvents.map(({uuid,title, description, location, pointValue}) => (
                title && uuid &&
                <div classname="event-list" key={uuid}>
                    <h4><a href={'https://acmucsd.com/events/'+ title.replace(/ /g,'-').toLowerCase()+'-'+uuid} target="_blank" rel="noreferrer">{title}</a> - <b>{location}</b></h4>
                </div>
            ))}
        </div>
    );
};

export default PastEventsList;