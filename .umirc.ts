import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: [
    { path: '/test', component: '../pages/test' },
    {
      path: '/',
      component: '../pages/index',
      routes: [
        { path: 'test1', component: '../pages/test/test1' },
        { path: 'test2', component: '../pages/test/test2' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'front',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};

export default config;
