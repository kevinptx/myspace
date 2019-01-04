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
