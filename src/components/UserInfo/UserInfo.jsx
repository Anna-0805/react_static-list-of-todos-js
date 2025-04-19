import './UserInfo.scss';

export const UserInfo = ({ users }) => (
  <>
    {users.map(user => (
      <a className="UserInfo" href={user.email}>
        {user.name}
      </a>
    ))}
  </>
);
