import Link from 'next/link';
const Home = () => {
  return (
    <>
      <h1> Next js pre-rendering</h1>
      <h3>
        click <Link href="/users">the following to go to the user lists</Link>
        
      </h3>
    </>
  );
};
export default Home;
