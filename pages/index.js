/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
 const [data, setData] = useState(null);

 useEffect(() => {
  (async () => {
   const request = await axios(
    'https://next-test-eight-black.vercel.app/api/products'
   );

   const response = await request.data;

   setData(response.result);
  })();
 }, []);

 const onSubmit = async () => {
  const request = await axios.post(
   'https://next-test-eight-black.vercel.app/api/products',
   {
    name: 'testingResponseAsRestAPI',
    released_year: 2022,
    githut_rank: 100,
    pypl_rank: 200,
    tiobe_rank: 300,
   }
  );

  const response = await request.data;

  console.log(response);
 };

 const onDelete = async (id) => {
  const request = await axios.delete(
   `https://next-test-eight-black.vercel.app/api/products/${id}`
  );

  console.log(request);
 };

 return (
  <div className={styles.container}>
   <Head>
    <title>Create Next App</title>
    <meta name='description' content='Generated by create next app' />
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main className={styles.main}>
    <h1 className={styles.title}>
     Welcome to <a href='https://nextjs.org'>Next.js!</a>
    </h1>

    <p className={styles.description}>
     Get started by editing <code className={styles.code}>pages/index.js</code>
    </p>
    <button onClick={onSubmit}>Test Button</button>
    <button onClick={() => onDelete(23)}>Delete</button>

    <div className={styles.grid}>
     {data === null
      ? null
      : data.map((languages) => (
         <div key={languages.id} className={styles.card}>
          <p>{languages.name}</p>
         </div>
        ))}
    </div>
   </main>
  </div>
 );
}
