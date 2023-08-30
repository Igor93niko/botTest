import { Button, Input, Space, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

export const useFilter = () =>{
  const [filterValue, setFilterValue] = useState({
    first:'',
    second:''
  });

  const firstFilter = useRef(null);
  const handleFilter = (selectedKeys, confirm, dataIndex) => {
    confirm();
  }
  const handleResetFilter = (clearFilters) => {
    clearFilters();
    setFilterValue({
      first:'',
      second:''
    });

  };

  const getColumnFilterProps = (dataIndex,dataTitle) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <div>
          <Tooltip title="Введите минимальное значение" placement='top'>
              <Input
                ref={firstFilter}
                placeholder={`c`}
                value={filterValue.first}
                onChange={(e) => {
                  if ((/^[\d.,:]*$/).test(e.target.value)){
                  let ar = selectedKeys.slice(0); ar[0] = e.target.value; 
                  setFilterValue({...filterValue,first:e.target.value}); 
                  setSelectedKeys(ar);
                  }
                }}

                style={{
                  marginBottom: 8,
                  display: 'block',
                }}
              />
            </Tooltip>
            <Tooltip title="Введите максимальное значение" placement='left'>
              <Input
                placeholder={`по`}
                value={filterValue.second}
                onChange={(e) => {
                  if ((/^[\d.,:]*$/).test(e.target.value)){
                    let ar = selectedKeys.slice(0); 
                    ar[1] = e.target.value; 
                    setFilterValue({...filterValue,second:e.target.value}); 
                    setSelectedKeys(ar);
                  }
                }}

                style={{
                  marginBottom: 8,
                  display: 'block',
                }}
              />
            </Tooltip>
        </div>
        <Space>
          <Button
            type="primary"
            onClick={() => handleFilter(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Поиск
          </Button>
          <Button
            onClick={() => {if (clearFilters){ handleResetFilter(clearFilters);handleFilter(selectedKeys, confirm, dataIndex)}}}
            size="small"
            style={{
              width: 90,
            }}
          >
            Сбросить
          </Button>
        </Space>
      </div>
    ),
    onFilter: (value, record) =>{
      return ( (parseInt(record[dataIndex])>= parseInt(filterValue.first)||(filterValue.first.trim()==='')) && (parseInt(record[dataIndex])<= parseInt(filterValue.second)||(filterValue.second.trim()==='')))},
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() =>{firstFilter.current?.select();
        }, 100);
      }
    },
    render: (text) =>
      text,
  });

  return{getColumnFilterProps};
}