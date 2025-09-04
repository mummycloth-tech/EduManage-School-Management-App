import React from "react";

const CardSocialTraffic: React.FC = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-gray-700 dark:text-gray-200">
              Social traffic
            </h3>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              See all
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 align-middle border border-solid border-gray-200 dark:border-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Referral
              </th>
              <th className="px-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 align-middle border border-solid border-gray-200 dark:border-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Visitors
              </th>
              <th className="px-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 align-middle border border-solid border-gray-200 dark:border-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-[140px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                Facebook
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                1,480
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700 dark:text-gray-200">60%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200 dark:bg-red-900">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500 dark:bg-red-700"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                Facebook
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                5,480
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700 dark:text-gray-200">70%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200 dark:bg-green-900">
                      <div
                        style={{ width: "70%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 dark:bg-green-700"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                Google
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                4,807
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700 dark:text-gray-200">80%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200 dark:bg-purple-900">
                      <div
                        style={{ width: "80%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 dark:bg-purple-700"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                Instagram
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                3,678
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700 dark:text-gray-200">75%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200 dark:bg-blue-900">
                      <div
                        style={{ width: "75%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 dark:bg-blue-700"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                Twitter
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                2,645
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700 dark:text-gray-200">30%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-orange-200 dark:bg-orange-900">
                      <div
                        style={{ width: "30%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500 dark:bg-orange-700"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardSocialTraffic;