import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  users: ReactNode;
  revenues: ReactNode;
  notifications: ReactNode;
  login: ReactNode;
};

export default function ComplexDashboardLayout({
  children,
  users,
  revenues,
  notifications,
  login,
}: Props) {
  const isLoggedIn = !false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenues}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
}
