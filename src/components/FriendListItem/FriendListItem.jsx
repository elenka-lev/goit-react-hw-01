import clsx from "clsx";
import s from "./FriendListItem.module.css";
const FriendListItem = (friends) => {
    return (
        <div className={s.wrapper}>
            <img className={s.img} src={friends.avatar} alt={friends.name} width="48" />
            <p className={s.friendName}>{friends.name}</p>
            <p className={clsx(s.status, friends.isOnline ? s.online : s.offline)}>{friends.isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}
export default FriendListItem;