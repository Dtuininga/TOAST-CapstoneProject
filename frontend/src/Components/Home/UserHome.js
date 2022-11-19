import UserDetails from "../Users/UserDetails"

export default function UserHome(props){
    const {userName, avatar} = props;
    return(
        <div>
        <h1 className="welcome">Hello {userName}</h1>
        <UserDetails username={userName} userpic={avatar}/>
        </div>
    )
}

