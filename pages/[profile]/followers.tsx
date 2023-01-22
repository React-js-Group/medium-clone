import React from 'react'

import { getRequest, sendRequest } from 'api'
import Navbar from 'components/Navbar'
import { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import Followers from 'components/Followers'

interface FollowersPageProps {
    followers: any
}

const FollowersPage: NextPage<FollowersPageProps> = ({ followers }) => {
    return (
        <>
            <Head>
                <title>دنبال کنندگان</title>
            </Head>
            <>
                <Navbar />
                <Followers followers={followers} />
            </>
        </>
    )
}

export default FollowersPage

export async function getStaticPaths() {
    const { data } = await axios({
        url: `${process.env.BASE_URL}all-users/`,
        method: 'GET',
    })

    const paths = data.map((user: any) => `/@${user.username}/followers`)

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params }) {
    const user = params.profile.slice(1)

    try {
        const { data } = await axios({
            url: `${process.env.BASE_URL}followers/${user}`,
            method: 'GET',
        })

        return {
            props: {
                followers: data,
            },
            revalidate: 5,
        }
    } catch (err) {
        return {
            notFound: true,
        }
    }
}
