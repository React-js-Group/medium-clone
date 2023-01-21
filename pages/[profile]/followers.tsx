import React from 'react'

import { getRequest } from 'api'
import Navbar from 'components/Navbar'
import { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

const Followers: NextPage = () => {
  return (
    <>
      <Head>
        <title>دنبال کنندگان</title>
      </Head>
      <>
        <Navbar />
      </>
    </>
  )
}

export default Followers

export async function getStaticPaths() {
  return { paths: ['/[profile]/followers'], fallback: 'blocking' }
}

export async function getStaticProps(req: any) {
  // const res = await getRequest("user-profile/@javad")
  // console.log(params)
  console.log(req)
  return {
    props: {},
  }
}
