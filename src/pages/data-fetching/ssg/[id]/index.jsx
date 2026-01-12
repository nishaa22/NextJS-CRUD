import React from 'react'

const StaticUserInfoPage = (props) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-yellow-50'>
      <h1 className='text-2xl'>Profile page of {props.firstName}</h1>
    </div>
  )
}

export const getStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json()
  const allUserIds = data.users.map((user) => user.id)
  return {
    paths: allUserIds.map((userId) => ({ params: { id: `${userId}` } })),
    fallback: false
  }
  // hard coded ids array
  // return {
  //   paths: [{ params: { id: "1" } }, { params: { id: "2" }, }],
  //   fallback: false
  // }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json()
  return {
    props: {
      ...data
    }
  }
}
export default StaticUserInfoPage