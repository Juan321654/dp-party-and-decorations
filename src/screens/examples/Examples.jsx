import React from "react";
import "./examples.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Examples({ data }) {
  function createCards() {
    return data?.records.map((e, idx) => {
      console.log(e);
      if (e.fields.attachment)
        return (
          <Card key={idx} style={{ width: "20rem", margin: "1.25rem" }} className="card-hover">
            <a href={e.fields.attachment[0].url} target="_blank">
              <Card.Img
                src={e.fields.attachment[0].thumbnails.large.url}
                alt="party"
                style={{
                  height: "20rem",
                  objectFit: "scale-down",
                  backgroundColor: "black",
                  cursor: "zoom-in",
                }}
              />
            </a>
            <Card.Body>
              <Card.Title>{e?.fields.attachment_title}</Card.Title>
              <Card.Text>
                {e?.fields.attachment_description}
                <br />
                {e?.fields.price}
              </Card.Text>
            </Card.Body>
          </Card>
        );
    });
  }

  return <div className="example__container">{createCards()}</div>;
}

export default Examples;
