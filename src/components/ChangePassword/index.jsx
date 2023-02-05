import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <section class="dnestw-bg-inherit dark:dnestw-bg-gray-900">
      <div class="dnestw-flex dnestw-flex-col dnestw-items-center dnestw-justify-center dnestw-px-6 dnestw-py-8 dnestw-mx-auto md:dnestw-h-screen lg:dnestw-py-0">
        <div class="dnestw-w-full dnestw-bg-[#f59e56] dnestw-p-6 dnestw-rounded-lg dnestw-shadow dark:dnestw-border md:dnestw-mt-0 sm:dnestw-max-w-md dark:dnestw-bg-gray-800 dark:dnestw-border-gray-700 sm:dnestw-p-8">
          <h2 class="dnestw-mb-1 dnestw-text-xl dnestw-font-bold dnestw-leading-tight dnestw-tracking-tight dnestw-text-[#168b96] md:dnestw-text-2xl dark:dnestw-text-white">
            Change Password
          </h2>
          <form
            class="dnestw-mt-4 dnestw-space-y-4 lg:dnestw-mt-5 md:dnestw-space-y-5"
            action="#"
          >
            <div>
              <label
                for="email"
                class="dnestw-block dnestw-mb-2 dnestw-text-sm dnestw-font-medium dnestw-text-[#168b96] dark:dnestw-text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="dnestw-bg-gray-50 dnestw-border dnestw-border-gray-300 dnestw-text-gray-900 sm:dnestw-text-sm dnestw-rounded-lg focus:ring-primary-600 focus:border-primary-600 dnestw-block dnestw-w-full dnestw-p-2.5 dark:dnestw-bg-gray-700 dark:dnestw-border-gray-600 dark:dnestw-placeholder-gray-400 dark:dnestw-text-white dark:focus:dnestw-ring-blue-500 dark:focus:dnestw-border-blue-500"
                placeholder="your_email@gmail.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="dnestw-block dnestw-mb-2 dnestw-text-sm dnestw-font-medium dnestw-text-[#168b96] dark:dnestw-text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="dnestw-bg-gray-50 dnestw-border dnestw-border-gray-300 dnestw-text-gray-900 sm:dnestw-text-sm dnestw-rounded-lg focus:ring-primary-600 focus:border-primary-600 dnestw-block dnestw-w-full dnestw-p-2.5 dark:dnestw-bg-gray-700 dark:dnestw-border-gray-600 dark:dnestw-placeholder-gray-400 dark:dnestw-text-white dark:focus:dnestw-ring-blue-500 dark:focus:dnestw-border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="dnestw-block dnestw-mb-2 dnestw-text-sm dnestw-font-medium dnestw-text-[#168b96] dark:dnestw-text-white"
              >
                Confirm password
              </label>
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                class="dnestw-bg-gray-50 dnestw-border dnestw-border-gray-300 dnestw-text-gray-900 sm:dnestw-text-sm dnestw-rounded-lg focus:ring-primary-600 focus:border-primary-600 dnestw-block dnestw-w-full dnestw-p-2.5 dark:dnestw-bg-gray-700 dark:dnestw-border-gray-600 dark:dnestw-placeholder-gray-400 dark:dnestw-text-white dark:focus:dnestw-ring-blue-500 dark:focus:dnestw-border-blue-500"
                required=""
              />
            </div>

            <button
              type="submit"
              class="dnestw-w-full dnestw-bg-[#168b96] dnestw-text-white bg-primary-600 hover:bg-primary-700 focus:dnestw-ring-4 focus:dnestw-outline-none focus:ring-primary-300 dnestw-font-medium dnestw-rounded-lg dnestw-text-sm dnestw-px-5 dnestw-py-2.5 dnestw-text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset passwod
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
