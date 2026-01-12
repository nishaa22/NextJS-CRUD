import Link from 'next/link'
import React from 'react'

const StaticUserPage = (props) => {
  return (
    <div className='flex flex-col justify-center items-center bg-yellow-50'>
      <h1 className='text-2xl font-bold mt-5'>Static site Generation User Page (SSG)</h1>
      <div className='flex flex-col'>
        {props.users?.map((user) => (
          <Link href={`/data-fetching/ssg/${user.id}`} key={user.id}>{user.firstName}</Link>
        ))}
      </div>
    </div>
  )
}
export const getStaticProps = async () => {
  const data = await (await fetch('https://dummyjson.com/users')).json()
  return {
    props: {
      ...data
    }
  }
}
export default StaticUserPage