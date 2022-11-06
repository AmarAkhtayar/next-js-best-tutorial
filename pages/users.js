/* eslint-disable @next/next/no-typos */
import Link from 'next/link';
import User from '../components/user';

// fetching data from fake API(jsonplaceholder)
const user = ({ users }) => {
  return (
    <>
      <h1> List of users</h1>
      {users.map((users) => {
        return (
          <ul key={users.id}>
            <li>
              <User users={users}></User>
            </li>
          </ul>
        );
      })}
      <button className="btn btn-primary">
        <Link href="/">go back</Link>
      </button>
    </>
  );
};
export default user;
export async function getStaticProps() {
  // API request for fetching data from an api
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log('data is', data);
  // Data is an array of 10 users objects
  // getStaticProps should return an object with necesary props
  // that going to passed as prob to the page compoennt
  return {
    props: {
      users: data,
    },
  };
}
