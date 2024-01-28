import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <p>Name: Desmond Readwin</p>
      <p>
        GitHub Repository:
        <Link href="https://github.com/GDReadwin/cprg306-assignments">
          <a target="_blank" rel="noopener noreferrer">
            Your GitHub Repository
          </a>
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
