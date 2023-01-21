import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};
const styleHeader = {
  backgroundColor: "black",
  color: "white",
  paddingTop: "0",
};

export function SecondMenu() {
  return (
    <Row bg="dark" className="ListMenu row gap-0">
      <Col xs={2} md={6} sm={12}>
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem style={styleHeader}>
            <ListItemText primary="Соронзон станц" />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Inbox"
              href="https://stackoverflow.com/questions/16350902/bootstrap-carousel-full-screen"
            />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </Col>
    </Row>
  );
}
