const { Component } = require("react");
import { Stack } from "react-bootstrap";
import "./style/tilesstaff.css";

class TilesStaff extends Component {
  render() {
    return (
      <>
        <h1>staff</h1>
        <Stack direction="vertical" gap={1}>
          <Stack direction="horizontal" gap={3}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </Stack>
        </Stack>
      </>
    )
  }
}

export default TilesStaff;