import React from "react";
import { Link } from "react-router-dom";

const Turbo = () => {
  return (
    <div className="turbo">
      <section class="dnestw-h-full gradient-form dnestw-bg-gray-200 md:dnestw-h-screen">
        <div class="container dnestw-py-12 dnestw-px-6 dnestw-h-full">
          <div class="dnestw-flex dnestw-justify-center dnestw-items-center dnestw-flex-wrap dnestw-h-full g-6 dnestw-text-gray-800">
            <div class="xl:dnestw-w-10/12">
              <div class="dnestw-block dnestw-bg-white dnestw-shadow-lg dnestw-rounded-lg">
                <div class="lg:dnestw-flex lg:dnestw-flex-wrap g-0">
                  <div class="lg:dnestw-w-6/12 dnestw-px-4 md:dnestw-px-0">
                    <div class="md:dnestw-p-12 md:dnestw-mx-6">
                      <div class="dnestw-text-center">
                        <img
                          class="dnestw-mx-auto dnestw-w-48"
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 class="dnestw-text-xl dnestw-font-semibold dnestw-mt-1 dnestw-mb-12 dnestw-pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>
                      <form>
                        <p class="dnestw-mb-4">Please login to your account</p>
                        <div class="dnestw-mb-4">
                          <input
                            type="text"
                            class="form-control dnestw-block dnestw-w-full dnestw-px-3 dnestw-py-1.5 dnestw-text-base dnestw-font-normal dnestw-text-gray-700 dnestw-bg-white dnestw-bg-clip-padding dnestw-border dnestw-border-solid dnestw-border-gray-300 dnestw-rounded dnestw-transition dnestw-ease-in-out dnestw-m-0 focus:dnestw-text-gray-700 focus:dnestw-bg-white focus:dnestw-border-blue-600 focus:dnestw-outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                        </div>
                        <div class="dnestw-mb-4">
                          <input
                            type="password"
                            class="form-control dnestw-block dnestw-w-full dnestw-px-3 dnestw-py-1.5 dnestw-text-base dnestw-font-normal dnestw-text-gray-700 dnestw-bg-white dnestw-bg-clip-padding dnestw-border dnestw-border-solid dnestw-border-gray-300 dnestw-rounded dnestw-transition dnestw-ease-in-out dnestw-m-0 focus:dnestw-text-gray-700 focus:dnestw-bg-white focus:dnestw-border-blue-600 focus:dnestw-outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                        </div>
                        <div class="dnestw-text-center dnestw-pt-1 dnestw-mb-12 dnestw-pb-1">
                          <Link to="/menu">
                            <button
                              class="dnestw-inline-block dnestw-px-6 dnestw-py-2.5 dnestw-text-white dnestw-text-red-400 dnestw-font-medium dnestw-text-xs dnestw-leading-tight dnestw-uppercase dnestw-rounded dnestw-shadow-md hover:dnestw-bg-blue-700 hover:dnestw-shadow-lg focus:dnestw-shadow-lg focus:dnestw-outline-none focus:dnestw-ring-0 active:dnestw-shadow-lg dnestw-transition dnestw-duration-150 dnestw-ease-in-out dnestw-w-full dnestw-mb-3"
                              type="button"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                              // style="
                              // // background: linear-gradient(
                              // //   to right,
                              // //   #ee7724,
                              // //   #d8363a,
                              // //   #dd3675,
                              // //   #b44593
                              // // );
                              // //   "
                            >
                              Log in
                            </button>
                          </Link>

                          <a class="dnestw-text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div class="dnestw-flex dnestw-items-center dnestw-justify-between dnestw-pb-6">
                          <p class="dnestw-mb-0 dnestw-mr-2">
                            Don't have an account?
                          </p>
                          <button
                            type="button"
                            class="dnestw-inline-block dnestw-px-6 dnestw-py-2 dnestw-border-2 dnestw-border-red-600 dnestw-text-red-600 dnestw-font-medium dnestw-text-xs dnestw-leading-tight dnestw-uppercase dnestw-rounded hover:dnestw-bg-black hover:dnestw-bg-opacity-5 focus:dnestw-outline-none focus:dnestw-ring-0 dnestw-transition dnestw-duration-150 dnestw-ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Danger
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class="lg:dnestw-w-6/12 dnestw-flex dnestw-items-center lg:dnestw-rounded-r-lg dnestw-rounded-b-lg lg:dnestw-rounded-bl-none dnestw-bg-red-400"
                    //         style="
                    //     background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                    //   "
                  >
                    <div class="dnestw-text-white dnestw-px-4 dnestw-py-6 md:dnestw-p-12 md:dnestw-mx-6">
                      <h4 class="dnestw-text-xl dnestw-font-semibold dnestw-mb-6">
                        We are more than just a company
                      </h4>
                      <p class="dnestw-text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Turbo;
