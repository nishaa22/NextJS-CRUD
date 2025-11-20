import Link from 'next/link'
import React from 'react'

const ServerUserPage = (props) => {
  return (
    <>
      <h1>Server Side Rendered User Page (SSR)</h1>
      <div className='flex flex-col'>
        {props.users?.map((user) => (
          <Link href={`/data-fetching/ssr/${user.id}`} key={user.id}>{user.firstName}</Link>
        ))}
      </div>
    </>
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