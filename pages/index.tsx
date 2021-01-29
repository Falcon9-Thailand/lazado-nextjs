import React, { ReactElement } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";

const index = (): ReactElement => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

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
                <Link href="/login">
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
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="login">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow md:py-4 md:text-lg md:px-10"
                    >
                      เริ่มต้นใช้งาน
                    </a>
                  </Link>
                </div>
                <div className="md:ml-3">
                  <Link href="/register">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400 bg-yellow-100 hover:bg-yellow-300 hover:text-white md:py-4 md:text-lg md:px-10">
                      สมัครสมาชิก
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2 bg-black items-center justify-end">
        <img
          className=" object-cover lg:w-full lg:h-full xl:w-full"
          src="/undraw_Online_shopping_re_k1sv.png"
        />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default index;
