import FriendListItem from "../FriendListItem/FriendListItem";
import s from "../FriendList/FriendList.module.css";
const FriendList = ({friends}) => {
    return (
        <ul className={s.list}>
	  {friends.map((friend) => {
          return <li className={s.item} key={friend.id}><FriendListItem
                name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
          />
          </li>;
	  })}
	</ul>
    )
}
export default FriendList;