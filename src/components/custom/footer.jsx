import { BookOpenCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-4/12">
            <h3 className="font-bold text-xl text-indigo-600 mb-4">
              Company name
            </h3>
            <p className="text-gray-500 text-sm mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex-row flex">
              <Link href="/#" className="w-6 mx-1">
                <div className="flex justify-center">
                  <BookOpenCheck className="text-black h-11 w-11  stroke-black stroke-1 stroke-center" />
                </div>
              </Link>
              {/* <a href="/#" className="w-6 mx-1">
                <svg
                  className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
                >
                  <path
                    id="Facebook"
                    d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                  ></path>
                </svg>
              </a>
              <a href="/#" className="w-6 mx-1">
                <svg
                  className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
                >
                  <g id="Layer_1">
                    <circle id="Oval" cx="12" cy="12" r="12"></circle>
                    <path
                      id="Shape"
                      d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                     -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                     -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                     -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                     -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                     0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                     2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                     1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                     0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                     -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                     -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                     -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                     0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                     0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
                      style="fill: rgb(255, 255, 255);"
                    ></path>
                  </g>
                </svg>
              </a>
              <a href="/#" className="w-6 mx-1">
                <svg
                  className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
                >
                  <path
                    id="Shape"
                    d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z"
                  ></path>
                </svg>
              </a>
              <a href="/#" className="w-6 mx-1">
                <svg
                  className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;"
                >
                  <path
                    id="Combined-Shape"
                    d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                  -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                  -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                  0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                  0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                  -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"
                  ></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div className="p-5 sm:w-5/12 flex flex-col">
            <div className="text-sm uppercase text-indigo-600 font-bold mb-5">
              Recent Blogs
            </div>
            <div className="flex mb-3">
              <div
                className="h-20 w-3/12 bg-cover bg-[url('https://tailwindcss.com/img/card-left.jpg')]"
                title="Woman holding a mug"
              ></div>
              <div className="pl-3 w-9/12">
                <div className="font-bold text-sm">The Coldest Sunset</div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex mb-3">
              <div
                className="h-20 w-3/12 bg-cover bg-[url('https://tailwindcss.com/img/card-left.jpg')]"
                title="Woman holding a mug"
              ></div>
              <div className="pl-3 w-9/12">
                <div className="font-bold text-sm">The Coldest Sunset</div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-indigo-600 font-bold mb-5">
              Instagram
            </div>
            <ul className="grid grid-cols-2 gap-5">
              <li>
                <img
                  src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  className="w-100"
                />
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  className="w-100"
                />
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  className="w-100"
                />
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  className="w-100"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
