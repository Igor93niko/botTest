import { Button, Space, DatePicker } from 'antd';
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';




export const useFilterData = (isTime) =>{
  const [date,setDate] = useState({
    first:'',
    second:''
  });
  const [dateString,setDateString] = useState(
    {
      first:'',
      second:''
    }
  );
  const searchInput = useRef(null);

  const filterWithoutTime = (value,record,dataIndex) => {
    const re = new RegExp('(\\d{2}).(\\d{2}).(\\d{4})');
    const minDate = re.test(dateString.first)?new Date(dateString.first.split('.').reverse().join('-')):new Date(-8640000000000000);
    const maxDate = re.test(dateString.second)?new Date(dateString.second.split('.').reverse().join('-')):new Date(8640000000000000);
    const date = new Date((record[dataIndex].toString()).split('.').reverse().join('-'));
    return (date >= minDate && date <= maxDate);
  }

  const filterAll = (value,record,dataIndex) => {
    const re = new RegExp('(\\d{2}).(\\d{2}).(\\d{4}) (\\d{2}):(\\d{2})');
    const toDate = (dateString)=>{
      let [date,time] = dateString.split(' ');
      date =  (date.toString()).split('.').reverse().join('-');
      return new Date([date,time].join('T'));
    }
    const minDate = re.test(dateString.first)?toDate(dateString.first):new Date(-8640000000000000);
    const maxDate = re.test(dateString.second)?toDate(dateString.second):new Date(8640000000000000);
    const baseDate = toDate(record[dataIndex].toString());
    return (baseDate >= minDate && baseDate <= maxDate);
  }

  const filter = !isTime?filterWithoutTime:filterAll;
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };

  const handleReset = (clearFilters) => {
    clearFilters();
  };


  const getColumnDataFilterProps = (dataIndex,dataTitle) => ({
    _filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <div>
          <Space direction="vertical" style={{width:"100%"}}>
            {!isTime?
            <>
            <DatePicker style={{width:"100%"}} value={date.first} format="DD.MM.YYYY" onChange={(d,ds)=>{setDate({...date,first:d});setDateString({...dateString,first:ds});setSelectedKeys([ds]);}} ref={searchInput}/>
            <DatePicker style={{width:"100%",marginBottom:"8px"}} format="DD.MM.YYYY" value={date.second} onChange={(d,ds)=>{setDate({...date,second:d});setDateString({...dateString,second:ds});setSelectedKeys([ds]);}} />         
            </>:
            <>
            <DatePicker showTime={{format: 'HH:mm',}} style={{width:"100%"}} value={date.first} format="DD.MM.YYYY HH:mm" onChange={(d,ds)=>{setDate({...date,first:d});setDateString({...dateString,first:ds});setSelectedKeys([ds]);}} ref={searchInput}/>
            <DatePicker showTime={{format: 'HH:mm',}} style={{width:"100%",marginBottom:"8px"}} format="DD.MM.YYYY HH:mm" value={date.second} onChange={(d,ds)=>{setDate({...date,second:d});setDateString({...dateString,second:ds});setSelectedKeys([ds]);}} />         
            </>
            }
            </Space>
        </div>
          
          <Space>
            <Button
              type="primary"
              onClick={() => 
                handleSearch(selectedKeys, confirm, dataIndex)
              }
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90,
              }}
            >
              Поиск
            </Button>
            <Button
              onClick={() => {
                if (clearFilters) {
                  setDate({
                    first:'',
                    second:''
                  });
                  handleReset(clearFilters);
                  handleSearch([''], confirm, dataIndex);
                }
              } }
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
    get filterDropdown() {
      return this._filterDropdown;
    },
    set filterDropdown(value) {
      this._filterDropdown = value;
    },
    onFilter: (value, record) => filter(value,record,dataIndex),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.focus(), 100);
      }
    },
    render: (text) =>
        text
  });

  return{getColumnDataFilterProps};
}