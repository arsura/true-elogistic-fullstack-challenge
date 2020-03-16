import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div className="container--center">
      <div>
        <h1>Hello World</h1>
        <p>Back to School</p>
        <Link to="/product">
          <Button className="button" type="link">
            Go to Product Page
          </Button>
        </Link>
      </div>
    </div>
  );
}
