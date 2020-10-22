import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { OmitProps } from 'antd/lib/transfer/renderListBody';

export default function(props: any) {
  return (
    <div>
      <h2>umi project</h2>
      {props.chileren}
    </div>
  );
}
