const EventPost = ({ post }) => {
    return (
        <article>
            <h3><a href={'https://acmucsd.com/events/'+ post.title.replace(/ /g,'-').toLowerCase()+'-'+post.uuid} target="_blank" rel="noreferrer">{post.title}</a></h3>
            <p>{post.description}</p>
            <p>UUID:{post.uuid}</p>
        </article>
    )
}

export default EventPost