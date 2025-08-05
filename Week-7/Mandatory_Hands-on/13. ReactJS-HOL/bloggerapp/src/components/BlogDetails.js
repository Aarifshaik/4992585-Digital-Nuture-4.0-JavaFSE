import React from 'react';

const blogs = [
    {BlogPost:"Know your Responsibilities", publisher:"Creator"},
    {BlogPost:"Use Resources Resourcefully", publisher:"Creator"},
    {BlogPost:"Be Thankful", publisher:"Creator"},
]
const BlogDetails = () => (
  <div>
    <h2>✍️ Blog Details</h2>
    {blogs.map((blog)=>
        <div>
            <h4>Blog Name: {blog.BlogPost}</h4>
            <h4>Publisher: {blog.publisher}</h4>
        </div>
    )}
  </div>
);

export default BlogDetails;
