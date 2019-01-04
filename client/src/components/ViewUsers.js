import React from "react";
import axios from "axios";
import { Header, Image, Card, Button, Icon, Divider } from "semantic-ui-react";

class ViewUsers extends React.Component {
  state = { users: [] };

  componentDidMount() {
    axios.get("/api/users").then(res => {
      this.setState({ users: res.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Card.Group centered itemsPerRow={3}>
          {users.map(user => (
            <Card key={user.id} raised>
              <Image src={user.image} />
              <Card.Content>
                <Divider />
                <Card.Header>
                  {user.first_name} {user.last_name}
                </Card.Header>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default ViewUsers;
