import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

function Articlebox(props) {
  const handleDelete = () => {
    // Call the parent component's delete function, passing the article's ID
    props.deleteArticle(props.id);
  };

  return (
    <Card>
      <Image src={props.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>{props.abstract}</Card.Description>
        <Card.Description>
          <div style={{ marginTop: '10px' }}>{props.text}</div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h3>
          <Icon name='tags' />
          <span>{props.tags}</span>
        </h3>
        <Button color='red' onClick={handleDelete}>
          <Icon name='trash' />
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
}

export default Articlebox;