
import React from 'react';
import './Myalert.css'
import { Alert, Space } from 'antd';

const Myalert = () => (
  <>
    <div className="alert">
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message="Warning" type="warning" showIcon closable className='alert' />
    <Alert
      className='alert'
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
    />
     </Space>
    </div>
  </>
);
export default Myalert;