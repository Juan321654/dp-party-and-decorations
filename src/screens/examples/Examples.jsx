import React from "react";
import "./examples.css";
import Card from "react-bootstrap/Card";

function Examples({ data }) {
  // console.log(data.records)
  function createCards() {
    return data?.map((e, idx) => {
      if (e.fields.attachment)
        return (
          <Card
            key={idx}
            style={{ width: "20rem", margin: "1.25rem" }}
            className="card-hover"
          >
            <a href={e.fields.attachment[0].url} target="_blank" rel="noreferrer">
              <Card.Img
                src={e.fields.attachment[0].thumbnails.large.url}
                alt="party"
                style={{
                  height: "20rem",
                  objectFit: "cover",
                  backgroundColor: "#e6e6e6",
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
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* <Button variant="outline-secondary" style={{width: '50%', margin: '10px'}}>Request info</Button> */}
            </div>
          </Card>
        );
        else return console.log('JuanCamachopers@hotmail.com for projects')
    });
  }
  return <div className="example__container" id="examples">{createCards()}</div>;
}

export default Examples;
