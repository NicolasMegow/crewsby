/** @jsx jsx */
import { jsx, Box, Grid, Label, Input, Button } from "theme-ui";
import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import Emoji from "../shared/emoji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SubscribeForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    display: "none",
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    this.setState({ message: result.msg });
    this.setState({ display: "block" });
  };

  render() {
    return (
      <Box
        sx={{
          mt: 5,
          maxWidth: "56rem",
        }}
      >
        <h3>
          <Emoji symbol="👋" label="welcome" />
          <br></br>Get the latest on team building!
        </h3>
        <p>
          We'll send you the occasional e-mail whenever we've added new
          activities.
        </p>

        <form
          name="subscribeForm"
          onSubmit={this.handleSubmit}
          method="POST"
          id="subscribe-form"
        >
          <Grid gap={2} columns={[1, null, 3]} style={{ alignItems: "end" }}>
            <Box>
              <Label htmlFor="name">Name</Label>
              <Input
                type="name"
                name="name"
                aria-label="text-form"
                placeholder="your first & last name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </Box>
            <Box>
              <Label htmlFor="email">E-Mail</Label>
              <Input
                type="email"
                name="email"
                aria-label="text-form"
                placeholder="your.email@domain.com"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Box>
            <Box>
              <Button type="submit" variant="primary">
                <FontAwesomeIcon icon={["fas", "envelope"]} fixedWidth />
                Subscribe
              </Button>
            </Box>
          </Grid>
          <div
            style={{ display: this.state.display }}
            dangerouslySetInnerHTML={{ __html: this.state.message }}
          />
        </form>
      </Box>
    );
  }
}
