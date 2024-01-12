import { Link } from "react-router-dom";


function Profile({loggedIn}) {

    

    return (
        <div className="profileTab">
            {loggedIn ? null : (<h1 style={{
                textAlign: "center",
            }}>
                Go to <Link style={{textDecorationLine: "underline", color: "blue"}} to="/login">login</Link> or <Link style={{textDecorationLine: "underline", color: "red"}} to="/register">Register</Link>
            </h1>)}
        </div>
    )
}

export default Profile;