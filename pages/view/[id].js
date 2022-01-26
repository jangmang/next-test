
import Axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Item from '../../src/component/Item';
import { Dimmer, Divider, Header, Loader, Segment } from 'semantic-ui-react';
import Head from 'next/head';


const Post = ({item, name}) => {  
  return (
    <>
    {item && (
      <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {name} 환경 입니다.
      <Item item={item} />
      </>
    )}
    </>
  )
}

export default Post;

export async function getServerSideProps(context) { // SSR(서버사이드랜더링)
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name : process.env.name
    },
  };
}
