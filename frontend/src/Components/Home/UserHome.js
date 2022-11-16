import UserDetails from "../Users/UserDetails"

export default function UserHome(props){
    const {userName, avatar} = props;
    return(
        <div>
        Hello {userName}
        <UserDetails username={userName} userpic={avatar}/>
        </div>
    )
}

