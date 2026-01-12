//users url explains about the client side rendering and swr feature given to CSR for fetching data
// SWR - stale while revalidating - lightweight, real-time, caching
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const UserPage = () => {
  const { data, error } = useSWR('https://dummyjson.com/users', fetcher)
  if (error) {
    return <h1>Error Happened!!</h1>
  }
  if (!data) {
    return <h1>Loading........</h1>
  }
  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const data = await (await fetch('https://dummyjson.com/users')).json()
  //     setUsers(data)
  //   }
  //   fetchUsers()
  // }, [])
  console.log(data)
  return (
    <div className='flex flex-col'>
      <h1 className="text-2xl font-bold w-fit mt-5 bg-black text-white">User Page - CSR client side rendering</h1>

      {data.users?.map((user) => (
        <Link href={`/data-fetching/csr/${user.id}`} className='hover:text-red-600' key={user.id}>{user.firstName}</Link>
      ))}
    </div>
  )
}

export default UserPage