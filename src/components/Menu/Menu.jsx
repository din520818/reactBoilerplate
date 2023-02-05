import React from "react";
import { Link } from "react-router-dom";
import feature1 from "@Assets/image/feature1.png";
import feature2 from "@Assets/image/feature2.png";
import feature3 from "@Assets/image/feature3.png";
import feature4 from "@Assets/image/feature4.png";

const Menu = () => {
  return (
    <div className="featureSelectionPage dnestw-h-[100vh] dnestw-bg-[#EB572F]  dnestw-text-[#FFFFFF] dnestw-pl-[25%] md:dnestw-pl-[15%]">
      <div className="featuresContent dnestw-pt-[5.188rem]">
        <h4 className="dnestw-font-normal dnestw-text-[1.2rem] md:dnestw-text-[1.875rem]">
          Welcome to
        </h4>
        <h2 className=" dnestw-font-bold dnestw-font-sans dnestw-w-[20rem] dnestw-mt-[0.375rem] dnestw-text-[1.5rem] md:dnestw-text-[2.5rem] md:dnestw-w-[35rem]">
          Geo-Referenced National Building Exposure Platform
        </h2>
      </div>
      <div className="featuresContainer dnestw-mt-[3.75rem]">
        <p className="dnestw-opacity-[0.67]">
          Kindly select desired features below
        </p>
        <div className="features dnestw-pb-40 dnestw-mt-[1.688rem] dnestw-flex dnestw-flex-col dnestw-w-[18.188rem] dnestw-gap-[2rem] dnestw-flex-wrap   md:dnestw-flex-row md:dnestw-justify-start md:dnestw-w-[100%] md:dnestw-pb-[18.4%]">
          <Link to="change-password">
            <div className="feature dnestw-p-5 dnestw-w-[16.188rem] dnestw-bg-orange-400  dnestw-shadow-sm  dnestw-shadow-[#ff9e5d]">
              <div className="dnestw-mx-[1.188rem] dnestw-mt-10 dnestw-flex dnestw-flex-col dnestw-gap-3">
                <img
                  src={feature1}
                  alt="feature1"
                  className="dnestw-w-[5.75rem] dnestw-mx-auto dnestw-mb-[2.43rem]"
                />
                <h6 className="dnestw-text-base dnestw-text-center  dnestw-mb-[0.75rem]">
                  CHANGE PASSWORD
                </h6>
                <p className="dnestw-w-[13.188rem] dnestw-h-[2.438rem] dnestw-text-sm dnestw-text-center">
                  Explore the critical infrastructure of public and private
                  buildings
                </p>
              </div>
            </div>
          </Link>
          <div className="feature dnestw-w-[16.188rem]">
            <div className="dnestw-mx-[1.188rem] dnestw-mt-10">
              <img
                src={feature2}
                alt="feature2"
                className="dnestw-w-[5.75rem] dnestw-mx-auto dnestw-mb-[2.43rem]"
              />
              <h6 className="dnestw-text-base dnestw-text-center dnestw-mb-[0.75rem]">
                INBOX
              </h6>
              <p className="dnestw-w-[13.188rem] dnestw-h-[2.438rem] dnestw-text-sm dnestw-text-center">
                Add or edit the critical infrastructure
              </p>
            </div>
          </div>
          <div className="feature dnestw-w-[16.188rem]">
            <div className="dnestw-mx-[1.188rem] dnestw-mt-10">
              <img
                src={feature3}
                alt="feature3"
                className="dnestw-w-[5.75rem] dnestw-mx-auto dnestw-mb-[2.43rem]"
              />
              <h6 className="dnestw-text-base dnestw-text-center  dnestw-mb-[0.75rem]">
                DOWNLOAD
              </h6>
              <p className="dnestw-w-[13.188rem] dnestw-h-[2.438rem] dnestw-text-sm dnestw-text-center">
                Download the report along with visualizations in standard
                formats
              </p>
            </div>
          </div>
          <div className="feature dnestw-w-[16.188rem]">
            <div className="dnestw-mx-[1.188rem] dnestw-mt-10">
              <img
                src={feature4}
                alt="feature4"
                className="dnestw-w-[5.75rem] dnestw-mx-auto dnestw-mb-[2.43rem]"
              />
              <h6 className="dnestw-text-base dnestw-text-center  dnestw-mb-[0.75rem]">
                MY DATA
              </h6>
              <p className="dnestw-w-[13.188rem] dnestw-h-[2.438rem] dnestw-text-sm dnestw-text-center">
                Manage your database including bulk upload of data using BIPAD
                ADmin Portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
