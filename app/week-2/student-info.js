import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <p>Name: Desmond Readwin</p>
      <p>
        GitHub Repository:
        <Link href="https://github.com/GDReadwin/cprg306-assignments">
          cprg306-assignments
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
