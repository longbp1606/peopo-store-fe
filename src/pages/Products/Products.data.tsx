import { CollapseProps, SelectProps } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const ProductFilters: CollapseProps['items'] = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
      },
      {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
      },
      {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
      },
];

export const ProductOrder: SelectProps['options'] = [
    {
        value: 'newest',
        label: 'Mới nhất'
    },
    {
        value: 'oldest',
        label: 'Cũ nhất'
    },
    {
        value: 'increase',
        label: 'Giá tăng dần'
    },
    {
        value: 'descrease',
        label: 'Giá giảm dần'
    }
]