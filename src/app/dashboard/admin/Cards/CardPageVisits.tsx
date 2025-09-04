import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const CardPageVisits: React.FC = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-gray-700 dark:text-gray-200">
              Page visits
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
                Page name
              </th>
              <th className="px-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 align-middle border border-solid border-gray-200 dark:border-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Visitors
              </th>
              <th className="px-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 align-middle border border-solid border-gray-200 dark:border-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Unique users
              </th>
              <th className="px-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 align-middle border border-solid border-gray-200 dark:border-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Bounce rate
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                /argon/
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                4,569
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                340
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                <FontAwesomeIcon icon={faArrowUp} className="text-emerald-500 mr-4" />
                46,53%
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                /argon/index.html
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                3,985
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                319
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                <FontAwesomeIcon icon={faArrowDown} className="text-orange-500 mr-4" />
                46,53%
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                /argon/charts.html
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                3,513
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                294
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                <FontAwesomeIcon icon={faArrowDown} className="text-orange-500 mr-4" />
                36,49%
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                /argon/tables.html
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                2,050
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                147
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                <FontAwesomeIcon icon={faArrowUp} className="text-emerald-500 mr-4" />
                50,87%
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 dark:text-gray-200">
                /argon/profile.html
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                1,795
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                190
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700 dark:text-gray-200">
                <FontAwesomeIcon icon={faArrowDown} className="text-red-500 mr-4" />
                46,53%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardPageVisits;