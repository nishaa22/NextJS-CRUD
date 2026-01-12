import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const UserInfoPage = () => {
  const [userData, setUserData] = useState()
  const router = useRouter();
  useEffect(() => {
    const id = router.query.id;
    const fetchUserById = async (id) => {
      const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json()
      setUserData(data)
    }
    fetchUserById(id)
  }, [router.query.id])
  return (
    <div className='flex flex-col justify-center items-center bg-blue-50 h-screen'>
      <h1 className='text-2xl'>UserName : {userData?.firstName}</h1>
    </div>
  )
}

export default UserInfoPage