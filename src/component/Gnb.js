import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";
import Link from 'next/link'

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if(router.pathname === '/'){ // 페이지내 경로비교
    activeItem = "home"; // 변수 
  } else if(router.pathname === '/about') {
    activeItem = "about";
  } else if(router.pathname === '/admin') {
    activeItem = "admin";
  }

  function goLink(e, data){
    if(data.name === 'home') { // 앵커데이터값 비교
      router.push('/') 
    } else if(data.name === 'about') {
      router.push('/about')      
    } else if(data.name === 'contact') {
      router.push('/contact')      
    } else if(data.name === 'admin') {
      router.push('/admin')      
    }
  }

  return ( 
    <>
    <Link href="/about">About Link</Link>
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'} // 변수비교 active클래스명 활성화
        onClick={goLink}
      />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name='Contact Us'
        active={activeItem === 'contact'}
        onClick={() => {
          router.push('/contact')  
        }}
      />

      <Menu.Item
        name='admin'
        active={activeItem === 'admin'}
        onClick={() => {
          router.push('/admin')  
        }}
      />
    </Menu>
    </>
  )
}
