import user from '../pages/users';

const User = ({users}) => {
  return (
    <>
      <p>{users.name}</p> 
      <p>{users.email}</p>
    </>
  );
};
export default User