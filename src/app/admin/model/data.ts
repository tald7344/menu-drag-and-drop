import {TreeNode} from './tree-node';

export let demoData: TreeNode[] = [
  {
    id: 1,
    itemId: 'item 1',
    name: 'Google',
    link: '#',
    children: []
  },
  {
    id: 2,
    itemId: 'item 2',
    name: 'Windows',
    children: [
      {
        id: 2.1,
        name: 'Windows 7',
        itemId: 'item 2.1',
        link: '#',
        children: []
      },
      {
        id: 2.2,
        name: 'Windows 8',
        itemId: 'item 2.2',
        link: '#',
        children: []
      },
      {
        id: 2.3,
        itemId: 'item 2.3',
        name: 'Windows 8',
        link: '#',
        children: []
      }
    ]
  },
  {
    id: 3,
    name: 'Facebook',
    link: '#',
    itemId: 'item 3',
    children: []
  },
];
