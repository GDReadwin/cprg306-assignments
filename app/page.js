import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2/" passHref>
          <div>
            <a>Navigate to Week 2 Page</a>
          </div>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
