import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserCard = ({user}) => {

  return (
  <Link to={`/users/${user._id}`}>  
    <div className="card w-96 bg-blue-100 shadow-xl text-center items-center mt-10 border transform transition duration-500 hover:scale-110 cursor-pointer">
        <div className="avatar pt-5">
            <div className="w-24 rounded-full">
                <img src={user?.image} />
            </div>
        </div>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{user?.name}</h2>
            <p><strong>Email:</strong> {user?.email}</p>
       </div>
    </div>
</Link>
  )
}

export default UserCard;