import React from "react";
import axios from "axios";
import { Segment, Header, Divider } from "semantic-ui-react";

class ViewPosts extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  //create a function to setState with an axios post with the new post. You'll be setting state with a new post and using the spread operator to spread over the existing posts. The new post should be put above the older posts. That function should be passed as a prop to PostForm.js so that it can pass it the information. It needs to reference and pass it the info.

  //when you create a post, you're pushing to the ViewPosts to see the new one.

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map(post => (
          <Segment raised color="blue ">
            <Header>{post.title}</Header>
            <Header.Subheader>
              By: {post.first_name} {post.last_name}
            </Header.Subheader>
            <Divider />
            {post.body}
          </Segment>
        ))}
      </div>
    );
  }
}

export default ViewPosts;
