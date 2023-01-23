import React from 'react'

import { getRequest, sendRequest } from 'api'
import Navbar from 'components/Navbar'
import { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import Followings from 'components/Followings'

interface FollowingPageProps {
    followings: any
}

const FollowingPage: NextPage<FollowingPageProps> = ({ followings }) => {
    return (
        <>
            <Head>
                <title>دنبال شوندگان</title>
            </Head>
            <>
                <Navbar />
                <Followings followings={followings} />
            </>
        </>
    )
}

export default FollowingPage

export async function getStaticPaths() {
    const { data } = await axios({
        url: `${process.env.BASE_URL}all-users/`,
        method: 'GET',
    })

    const paths = data.map((user: any) => `/@${user.username}/followings`)

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params }) {
    const user = params.profile.slice(1)

    try {
        const { data } = await axios({
            url: `${process.env.BASE_URL}followings/${user}`,
            method: 'GET',
        })

        return {
            props: {
                followings: data,
            },
            revalidate: 5,
        }
    } catch (err) {
        return {
            notFound: true,
        }
    }
}
