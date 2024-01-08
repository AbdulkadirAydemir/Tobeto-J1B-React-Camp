import React from "react";
import { useParams } from "react-router-dom";
import { CardContent, Card, Icon, Button } from 'semantic-ui-react'

function ProductDetail() {
  let { id } = useParams();

  const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ')

  return (
    <div>
      <Card fluid>
        <CardContent header="About Amy" />
        <CardContent description={description} />
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetail;
