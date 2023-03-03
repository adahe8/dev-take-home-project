import React from "react";
import "./EventPosts.css";

const EventPost = ({ post }) => {
    return(
        <div className="event">
            {
                
                [Object.values(post)].map((post) => {
                    return <div className="card" key={post.at(0)}>
                    <div className="event-container">
                        <a href={'https://acmucsd.com/events/'+ post.at(5).replace(/ /g,'-').toLowerCase()+'-'+post.at(0)}><img src={post.at(4)} alt="" /></a>
                        <h3><a href={'https://acmucsd.com/events/'+ post.at(5).replace(/ /g,'-').toLowerCase()+'-'+post.at(0)} target="_blank" rel="noreferrer">{post.at(5)}</a></h3>
                        <p class="long">{post.at(6)}</p>
                        <p>Time: {post.at(9)}</p>
                    </div>
                </div>
                })
            }
        </div>
    )         
    
}

export default EventPost