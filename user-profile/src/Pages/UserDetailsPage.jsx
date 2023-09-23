/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import './detail.css';
const UserDetailsPage = () => {
    const allUser=useLoaderData();
    console.log(allUser);

  return (
    <div className="mx-auto mt-[100px] mb-4">
        <h2 className="text-center font-semibold text-2xl mt-20">User Details </h2>
       
        <div className="card lg:card-side bg-blue-100 shadow-xl mx-20 my-8 border">
          <div className="avatar my-11">
            <div className="w-[23rem] rounded">
              <img src={allUser?.image} />
            </div>
          </div>
                
          <div className="card-body grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4 my-11">
            <div className="text-xl">
              <h3 className="mb-4"><strong>User Info </strong></h3>
              <h3><strong>Name: </strong>{allUser?.name}</h3>
              <h3><strong>User Name: </strong>{allUser?.username}</h3>
              <h3><strong>Email: </strong>{allUser?.email}</h3>
              <h3><strong>Phone: </strong>{allUser?.phone}</h3>
              <h3><strong>Website: </strong>{allUser?.website}</h3>
            </div>
            <div className="text-xl">
              <h3 className="mb-4"><strong >Company Info</strong></h3>
              <h3><strong>Company Name: </strong>{allUser?.company?.name}</h3>
              <h3><strong>Catch Phrase: </strong>{allUser?.company?.catchPhrase}</h3>
              <h3><strong>Company BS: </strong>{allUser?.company?.bs}</h3>
            </div>
            <div className="text-xl">
              <h3 className="mb-4"><strong>Address</strong></h3>
              <h3><strong>City: </strong>{allUser?.address?.city}</h3>
              <h3><strong>Street: </strong>{allUser?.address?.street}</h3>
              <h3><strong>Email: </strong>{allUser?.address?.zipcode}</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserDetailsPage