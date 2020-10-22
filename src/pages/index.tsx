import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'umi';

const { SubMenu } = Menu;
export default function() {
  return (
    <div>
      <Menu
        style={{ width: 200 }}
        mode="inline"
        defaultOpenKeys={['1']}
        onClick={e => console.log(e)}
      >
        <SubMenu key="1" title="1">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1.1">
              <Link to="/test1">Option 1</Link>
            </Menu.Item>
            <Menu.Item key="1.2">
              <Link to="/test2">Option 2</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="2" title="2">
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="2.1">Option 1</Menu.Item>
            <Menu.Item key="2.2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
}
