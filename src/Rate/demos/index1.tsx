import React from 'react';
import Rate from '..';
/**
 * transform: true
 */
export default function RateDemo1() {
  const chooseCallback = (val: number) => {
    console.log(val);
  };
  return <Rate chooseCallback={chooseCallback} />;
}