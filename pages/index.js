import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import styles from '../styles/Home.module.css'
import ItemList from '../src/component/ItemList';
import { Dimmer, Divider, Header, Loader, Segment } from 'semantic-ui-react';

export default function Home({list}) {  
  return (
    <div>
      <Head>
        <title>장맹코딩</title>
        <meta name="description" content="장맹 메인입니다"></meta>
      </Head>           
      <>
        <Header as="h3" style={{paddingTop: 40}}>베스트 상품</Header>
        <Divider />
        <ItemList list={list.slice(0,9)} />

        <Header as="h3" style={{paddingTop: 40}}>신상품</Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  )
}


export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    }
  }
}