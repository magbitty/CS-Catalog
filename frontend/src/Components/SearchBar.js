import { Card, Stack, Form, Button } from "react-bootstrap";
import { MDBCol } from "mdbreact";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";

export default function SearchBar() {
  //const [description, setDescription] = useState("");
  //description should be set to the text from the search bar
  const description = "test";
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/articles/?title=${description}`,
        { method: "GET" }
      );
      const jsonData = await response.json();
      console.log(jsonData);
      //call the next page here with an argument of jsonData

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <MDBCol md="10">
        <Card className="rounded-pill">
          <Stack direction="horizontal">
            <Form onSubmit={onSubmitForm}>
              <Form.Control
                className="rounded-pill border-0"
                placeholder="Search articles here..."
                style={{ "box-shadow": "none" }}
              />
              <Button type="submit">
                <Search className="mx-1"></Search>
              </Button>
            </Form>
          </Stack>
        </Card>
      </MDBCol>
    </>
  );
}
