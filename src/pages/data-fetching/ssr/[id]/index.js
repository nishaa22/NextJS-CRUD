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
    <h1>UserName : {userData?.firstName}</h1>
  )
}

export default UserInfoPage

