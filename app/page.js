import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2/">
          <span>Navigate to Week 2 Page</span>
        </Link>
      </p>
      <p>
        <Link href="/week-3/">
          <span>Navigate to Week 3 Page</span>
        </Link>
      </p>
      <p>
        <Link href="/week-4/">
          <span>Navigate to Week 4 Page</span>
        </Link>
      </p>
      <p>
        <Link href="/week-5/">
          <span>Navigate to Week 5 Page</span>
        </Link>
      </p>
      <p>
        <Link href="/week-6/">
          <span>Navigate to Week 6 Page</span>
        </Link>
      </p>
      <p>
        <Link href="/week-7/">
          <span>Navigate to Week 7 Page</span>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
