import React from "react";
import {Button, Card} from "react-bootstrap";

function GalleryItem(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GalleryItem;
