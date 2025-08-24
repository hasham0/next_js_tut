import Link from "next/link";

type Props = {};

const AuthHeader = ({}: Props) => {
  return (
    <div>
      <nav className="bg-white text-xl text-black py-3">
        <ul className="flex justify-evenly space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/forgot-password">Forgot Password</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AuthHeader;
