import { useEffect, useState } from "react";
import UserCard from "../components/UI/UserCard";

const UserListPage = () => {
    const [userListData,setUserListData]=useState([]);
    useEffect(()=>{
        fetch("https://user-profile-backend.vercel.app/users")
        .then(res=>res.json())
        .then(data=>setUserListData(data));

    },[]);
    
  return (
    <div className="mx-auto mt-[100px]">
        <h2 className="text-center font-semibold text-2xl mt-20">User Profile List </h2>
       
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pb-10 justify-center justify-items-center mx-5">
            {
                userListData?.map((user,index)=><UserCard user={user} key={index}/>)
            } 
        </div>
    </div>
  )
}

export default UserListPage;