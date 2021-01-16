import React, { ReactElement } from "react";
import Link from "next/link";

export default function registerScreen(): ReactElement {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="hidden md:block  md:pr-4 md:space-x-8">
                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  ร้านค้า
                </a>

                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  ผู้จัดส่ง
                </a>

                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  ชุมชน
                </a>

                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  ช่วยเหลือ
                </a>
                <Link href="login">
                  <a
                    href="#"
                    className="font-medium text-yellow-400 hover:text-yellow-500"
                  >
                    เข้าสู่ระบบ
                  </a>
                </Link>
              </div>
            </nav>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <p className="block ">LAZADO</p>
                <p className="block text-primary xl:inline">Market Online</p>
              </h1>
              <div className="flex flex-row rounded-md mt-8 -space-y-px justify-start sm:justify-center  md:justify-center lg:justify-start">
                <div className="w-1/2 lg:w-3/4 ">
                  <label htmlFor="email-address" className="sr-only">
                    อีเมล หรือหมายเลขโทรศัพท์มือถือ
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:z-10 text-sm"
                    placeholder="อีเมล หรือหมายเลขโทรศัพท์มือถือ"
                  />
                </div>
                <button
                  type="submit"
                  className="relative ml-3 w-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  สมัครสมาชิก
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
