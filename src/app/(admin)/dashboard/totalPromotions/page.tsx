import React from 'react';

import Header from '@/app/components/header';

export interface IPageProps {}

export default function Page({}: IPageProps) {
  return (
    <>
      <Header>Dashboard / Total Promotions</Header>
      <p>Some additional info</p>
    </>
  );
}
