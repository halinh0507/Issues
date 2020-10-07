import React from "react";

const PostDetails = ({ post }) => {

    
    return (
        <div classname = "class">
      <ul key={post.id}>
        <li><strong>Title:</strong>  <br></br>  {post.title}</li>
        <li><strong>Number:  </strong> <br></br>{post.number}</li>
  
        <li><div><strong>Link to Issue:</strong> </div>
        <a href = {post.html_url}> URL</a></li>
        <li><div><strong>Owner:</strong> </div>
        <a href = {post.user.html_url}> {post.user.login}</a></li>
        {/* <img src = {"https://avatars0.githubusercontent.com/u/5185660?v=4"}/> */}
        <li><strong>Created at: </strong><br></br> {post.created_at}</li>
        <li><strong>Updated at: </strong><br></br> {post.updated_at}</li>
        <li><strong>Organization:  </strong><br></br> walmartlabs</li>
        <li><strong>Repo:  </strong> <br></br>thorax</li>
        <li><strong>Organization:</strong>   <br></br> {post.title}</li>
        <li><strong>Message:  </strong><br></br>{post.body}</li>
        <li><strong>Comments:  </strong><br></br>{post.comments}</li>
        <li><strong>Author Association:  </strong><br></br>{post.author_association}</li>
       
      </ul></div>
    );
//   });
};

export default PostDetails;