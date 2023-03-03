import React from "react";
import "./EventPosts.css";

const EventPost = ({ post }) => {
    return(
        <div className="card" key={post.uuid}>
            <div className="event-container">
                <a href={'https://acmucsd.com/events/'+ post.title.replace(/ /g,'-').toLowerCase()+'-'+post.uuid}><img src={post.cover} alt="" /></a>
                    <h3><a href={'https://acmucsd.com/events/'+ post.title.replace(/ /g,'-').toLowerCase()+'-'+post.uuid} target="_blank" rel="noreferrer">{post.title}</a></h3>
                    <p className="long">{post.description}</p>
                    {/* /*<p>Time: {Date.parse(post.start).toLocaleDateString()}</p>*/ }
                </div>
         </div>
           
        
    )         
    
}

export default EventPost