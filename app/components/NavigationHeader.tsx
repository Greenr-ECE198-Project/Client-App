import React from 'react'
import Link from "next/link";

export const NavigationHeader = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/." className="btn btn-ghost text-5xl text-accent font-bold">G</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/profile.png" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Log In</a></li>
            <li><a>Sign Up</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}