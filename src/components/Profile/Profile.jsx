import s from "./Profile.module.css"
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <img src={image} alt={name} className={s.img} />
                <p className={s.title}>{name}</p>
                <p className={s.descr}>{tag}</p>
                <p className={s.descr}>{location}</p>
            </div>
            <ul className={s.social}>
                <li className={s.item}>
                    <span className={s.subtitle}>Followers</span>
                    <span className={s.score}>{stats.followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.subtitle}>Views</span>
                    <span className={s.score}>{stats.views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.subtitle}>Likes</span>
                    <span className={s.score}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;