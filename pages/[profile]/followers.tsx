import React from 'react'
import nookies from 'nookies'

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

export async function getStaticPaths(context: any) {
  return { paths: ['/[profile]/followers'], fallback: 'blocking' }
}

export async function getStaticProps(context: any) {
  const cookie = nookies.get(context)

  const { data } = await axios.get(`${process.env.BASE_URL}followers/`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0NDk1MzczLCJpYXQiOjE2NzQyMDc4NDgsImp0aSI6ImM2M2ViYzQ4NTRiMDQ3ZjViNTU4M2Y3Mjk3ZDFjMzYyIiwidXNlcl9pZCI6MTIyfQ.vcl8jO0nDZ3nqmAlHfkIfqCprL1I70wYFvyKKzwZlFE',
    },
  })

  console.log(cookie)
  console.log(data)
  // console.log(data)
  return {
    props: {},
  }
}
