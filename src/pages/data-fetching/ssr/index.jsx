import Link from 'next/link'
import React from 'react'

const ServerUserPage = (props) => {
  return (
    <div className='flex flex-col justify-center items-center bg-red-50'>
      <h1 className='text-2xl font-bold mt-5'>Server Side Rendered User Page (SSR)</h1>
      <div className='flex flex-col'>
        {props.users?.map((user) => (
          <Link href={`/data-fetching/ssr/${user.id}`} key={user.id}>{user.firstName}</Link>
        ))}
      </div>
    </div>
  )
}
export const getServerSideProps = async () => {
  const data = await (await fetch('https://dummyjson.com/users')).json()
  return {
    props: {
      ...data
    }
  }
}
export default ServerUserPage