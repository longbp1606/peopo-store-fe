import { Checkbox, CollapseProps, Flex, Select, SelectProps } from "antd";

const productOption = [
  { label: 'Goods', value: 'goods' },
  { label: 'Artbook', value: 'artbook' },
  { label: 'Figure', value: 'figure' },
  { label: 'Plushie', value: 'plushie' },
];

const typeOption = [
  { label: 'Vtuber', value: 'vtuber' },
  { label: 'Anime', value: 'anime'},
  { label: 'Manga', value: 'manga'},
];

const characterOption: SelectProps['options'] = [
  { label: 'Tokino Sora', value: 'tokinosora' },
  { label: 'AZKi', value: 'azki' },
  { label: 'Roboco', value: 'roboco' },
  { label: 'Hoshimachi Suisei', value: 'hoshimachisuisei' },
  { label: 'Sakura Miko', value: 'sakuramiko' },
]

export const ProductFilters: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Loại mặt hàng',
    children: (
      <Flex vertical gap={5}>
        {productOption.map((option) => (
          <Checkbox key={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Flex>
    ),
  },
  {
    key: '2',
    label: 'Thể loại',
    children: (
      <Flex vertical gap={5}>
        {typeOption.map((option) => (
          <Checkbox key={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Flex>
    ),
  },
  {
    key: '3',
    label: 'Nhân vật',
    children: (
      <Select
        mode="multiple"
        allowClear
        placeholder="Please select"
        defaultValue={['tokinosora']}
        options={characterOption}
        style={{width: '100%'}}
      />
    ),
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