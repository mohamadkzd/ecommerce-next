"use client";

import Link from "next/link";
import { logout } from "../../../../actions/auth";
import { useContext } from "react";
import AuthContext from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const { logoutContext } = useContext(AuthContext);
  const router = useRouter();
  return (
    <section className="profile_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Link href="/profile">اطلاعات کاربر</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/addresses">آدرس ها</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/orders">سفارشات</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/transactions">تراکنش ها</Link>
              </li>
              <li className="list-group-item">
                <a
                  onClick={async () => {
                    await logout();
                    logoutContext();
                    router.push("/");
                  }}
                  href="#"
                >
                  خروج
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-lg-9">{children}</div>
        </div>
      </div>
    </section>
  );
}
