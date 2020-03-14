import React from 'react';
import { Button } from 'antd';

export default function() {
  return (
    <div className="container--center">
      <div>
        <h1>Hello World</h1>
        <p>Back to JS</p>
        <Button className="button" type="primary">
          OK
        </Button>
        <Button className="button" type="default">
          Cancel
        </Button>
      </div>
    </div>
  );
}