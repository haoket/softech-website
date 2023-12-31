import React from 'react';
import Head from 'next/head';
import GoTop from './GoTop';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';
import { type } from 'os';

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>StartP - React Next IT Startup & Digital Agency Template</title>
      </Head>

      <Navbar />

      <div style={{ marginTop: 100 }}>{children}</div>

      <Toaster position='top-right' />

      <GoTop scrollStepInPx='100' delayInMs='10.50' />

      {/* <Sidebar /> */}
      <Footer />
    </>
  );
};

export default Layout;
