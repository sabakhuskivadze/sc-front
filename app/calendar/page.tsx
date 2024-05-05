
"use client"
import React, { useState } from 'react';
import { Alert, Calendar } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';

export default function YourComponent() {
  const [value, setValue] = useState<Dayjs>(() => {
    const storedValue = localStorage.getItem('ახალი ჯავშანი');
    return storedValue ? dayjs(storedValue) : dayjs('2017-01-25');
  });

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    localStorage.setItem('ახალი ჯავშანი', newValue.format());
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
    localStorage.setItem('ახალი ჯავშანი', newValue.format());
  };
//   const click = async() =>{
//     fetch('http://localhost:3001/login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name:value })
// })
//     .then((res) => {
//         return res.json();
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });
//   }


  
  return (
    <>
      <Alert message={`თქვენ დაჯავშნეთ ლექცია: ${value?.format('YYYY-MM-DD')}`} />
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />

    </>
  );
}
