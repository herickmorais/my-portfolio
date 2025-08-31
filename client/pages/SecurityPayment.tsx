import Sidebar from "@/components/Sidebar";
import { Link } from "react-router-dom";

export default function SecurityPayment() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 ml-[242px] min-h-screen bg-white">
        <div className="flex justify-center pt-20">
          <div className="w-[920px] flex flex-col justify-center items-center gap-6">
            
            {/* Back to Projects Navigation */}
            <div className="flex h-20 items-center w-full border-b border-[#DFDFDF]">
              <Link 
                to="/" 
                className="flex items-center gap-2 py-2 hover:opacity-70 transition-opacity"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1919 1.63654C10.3794 1.82407 10.4847 2.07837 10.4847 2.34354C10.4847 2.6087 10.3794 2.86301 10.1919 3.05054L5.24191 8.00054L10.1919 12.9505C10.3741 13.1392 10.4749 13.3918 10.4726 13.654C10.4703 13.9161 10.3652 14.167 10.1798 14.3524C9.99436 14.5378 9.74347 14.6429 9.48132 14.6452C9.21912 14.6475 8.96652 14.5467 8.77792 14.3645L3.12091 8.70754C2.93344 8.52001 2.82812 8.2657 2.82812 8.00054C2.82812 7.73537 2.93344 7.48107 3.12091 7.29354L8.77792 1.63654C8.96544 1.44907 9.21975 1.34375 9.48487 1.34375C9.75007 1.34375 10.0044 1.44907 10.1919 1.63654Z" fill="#252525"/>
                </svg>
                <span className="text-[20px] font-medium leading-6 text-[#252525]">
                  Back to projects
                </span>
              </Link>
            </div>

            <div className="w-full pb-20 flex flex-col items-center gap-[119px]">
              
              {/* Hero Section */}
              <div className="flex flex-col items-center gap-20">
                <div className="flex flex-col items-center gap-6 w-full">
                  
                  {/* Hero Image */}
                  <div className="w-[920px] flex justify-center items-center">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1eb4d7b02a58dcbfc18aab27f173180b94202e6e?width=1840" 
                      alt="Security and Payment app mockups showing desktop and mobile interfaces" 
                      className="w-full h-[397px] object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="flex justify-between items-center flex-wrap w-full">
                    
                    {/* Contribution */}
                    <div className="flex flex-col justify-center items-start gap-2 px-1 py-2 border-b border-[#DFDFDF] min-w-[249px]">
                      <h3 className="text-[16px] font-bold leading-[19.2px] text-[#252525] text-center">
                        Contribution
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#252525] text-center">
                        Research, Ideation, Visual Design
                      </p>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-col justify-center items-start gap-2 px-1 py-2 border-b border-[#DFDFDF] min-w-[277px]">
                      <h3 className="text-[16px] font-bold leading-[19.2px] text-[#252525] text-center">
                        Tools
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#252525] text-center">
                        Figma, Miro, Trello, GoogleWorkspace
                      </p>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col justify-center items-start gap-2 px-1 py-2 border-b border-[#DFDFDF] min-w-[143px]">
                      <h3 className="text-[16px] font-bold leading-[19.2px] text-[#252525] text-center">
                        Timeline
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#252525] text-center">
                        3 months (2024)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Title and Description */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <h1 className="text-[40px] font-semibold leading-[48px] text-[#252525] w-full">
                    Clients free from fake payment slips
                  </h1>
                  <p className="text-[24px] font-medium leading-[36px] text-[#252525] w-full">
                    Development of a tool that verifies whether payment slips are valid or fraudulent
                  </p>
                </div>
              </div>

              {/* Challenge Section */}
              <div className="flex flex-col items-start gap-8">
                
                <h2 className="text-[28px] font-semibold leading-[33.6px] text-[#252525]">
                  The biggest <span className="text-[#CB4E66]">challenge</span> faced by the company.
                </h2>

                <div className="flex flex-col items-start gap-6 w-full">
                  <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                    This project was developed to help large companies in the telemarketing and telecommunications sector in Brazil to 
                    definitively <span className="font-bold">solve the issues related to fraud in payment slips faced by their users.</span>
                  </p>

                  <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                    Many of their <span className="font-bold">clients were falling victim to scams by paying fake payment slips</span>. This resulted not only in financial 
                    losses for the clients but also in a growing distrust in the banking system.
                  </p>

                  {/* Statistics */}
                  <div className="flex justify-between items-center flex-wrap w-full pt-2">
                    
                    {/* 6 billions */}
                    <div className="flex flex-col justify-center items-start gap-2 px-1 py-4 border-b border-[#DFDFDF] min-w-[246px]">
                      <h3 className="text-[24px] font-semibold leading-[28.8px] text-[#CB4E66] text-center w-full">
                        6 billions
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#252525] text-center w-full">
                        of payment slips generated/year.
                      </p>
                    </div>

                    {/* 450 millions */}
                    <div className="flex flex-col justify-center items-start gap-2 px-1 py-4 border-b-2 border-[#CB4E66] min-w-[240px] max-w-[240px]">
                      <div className="flex items-center gap-2 justify-center w-full">
                        <h3 className="text-[24px] font-semibold leading-[28.8px] text-[#CB4E66]">
                          450 millions
                        </h3>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_warning)">
                            <path d="M10.5 7.20237V11.0024M10.5 14.8024H10.5088M9.28843 2.3495L2.09165 15.8458C1.69248 16.5944 1.49289 16.9687 1.52239 17.2759C1.54812 17.5438 1.67742 17.7873 1.8781 17.9457C2.10819 18.1274 2.50654 18.1274 3.30326 18.1274H17.6968C18.4935 18.1274 18.8919 18.1274 19.1219 17.9457C19.3227 17.7873 19.452 17.5438 19.4777 17.2759C19.5072 16.9687 19.3076 16.5944 18.9084 15.8458L11.7116 2.3495C11.3139 1.6036 11.115 1.23065 10.8555 1.10538C10.6292 0.996122 10.3709 0.996122 10.1445 1.10538C9.88508 1.23065 9.68619 1.6036 9.28843 2.3495Z" stroke="#CB4E66" strokeWidth="1.82346" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_warning">
                              <rect width="21" height="19" fill="white" transform="translate(0 0.078125)"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-[16px] leading-[19.2px] text-[#252525] text-center w-full">
                        of fraudulent payment slips/year.
                      </p>
                    </div>

                    {/* 45 millions */}
                    <div className="flex flex-col justify-center items-start gap-2 px-1 py-4 border-b border-[#DFDFDF] min-w-[183px]">
                      <h3 className="text-[24px] font-semibold leading-[28.8px] text-[#CB4E66] text-center w-full">
                        45 millions
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#252525] text-center w-full">
                        of unbanked Brazilians.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goals Section */}
              <div className="w-full flex flex-col justify-center items-start gap-8">
                
                <h2 className="text-[28px] font-semibold leading-[42px] text-[#252525] w-full">
                  Discover the main <span className="text-[#CB4E66]">goals</span> of the project
                </h2>

                {/* Goals Grid */}
                <div className="flex items-start gap-8 flex-wrap w-full">
                  
                  {/* Goal 1 */}
                  <div className="flex w-[380px] p-4 flex-col items-start gap-6 rounded-lg border border-[#DFDFDF]">
                    <div className="w-12 h-12 p-2 flex justify-center items-center rounded">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_edit)">
                          <path d="M23.0757 19.9252L21.8448 21.2157C21.192 21.8999 20.3067 22.2842 19.3836 22.2842C18.4604 22.2842 17.5752 21.8999 16.9223 21.2157C16.2686 20.5329 15.3834 20.1494 14.4606 20.1494C13.5378 20.1494 12.6525 20.5329 11.9988 21.2157M0.921875 22.2842H2.98285C3.58492 22.2842 3.88596 22.2842 4.16925 22.219C4.42041 22.1613 4.66052 22.0659 4.88077 21.9366C5.12918 21.7907 5.34204 21.5867 5.76776 21.1787L21.2296 6.36114C22.2492 5.38402 22.2492 3.7998 21.2296 2.82268C20.21 1.84556 18.5569 1.84557 17.5373 2.82268L2.07543 17.6403C1.6497 18.0483 1.43683 18.2522 1.28461 18.4903C1.14964 18.7014 1.05019 18.9315 0.989888 19.1722C0.921875 19.4436 0.921875 19.7322 0.921875 20.3092V22.2842Z" stroke="#CB4E66" strokeWidth="1.80728" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_edit">
                            <rect width="24" height="23" fill="white" transform="translate(0 0.464844)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-[18px] font-medium leading-[21.6px] text-[#252525] w-full">
                      Create a product that prevents a user from paying a fake payment slip.
                    </p>
                  </div>

                  {/* Goal 2 */}
                  <div className="flex p-4 flex-col items-start gap-6 flex-1 rounded-lg border border-[#DFDFDF]">
                    <div className="w-12 h-12 p-2 flex justify-center items-center rounded">
                      <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_shield)">
                          <path d="M13.3308 1.96484H7.26406C5.30388 1.96484 4.32379 1.96484 3.5751 2.35722C2.91653 2.70236 2.3811 3.2531 2.04554 3.93047C1.66406 4.70056 1.66406 5.70866 1.66406 7.72485V20.2048C1.66406 22.221 1.66406 23.2291 2.04554 23.9992C2.3811 24.6766 2.91653 25.2273 3.5751 25.5725C4.32379 25.9649 5.30388 25.9648 7.26406 25.9648H14.7308C16.6909 25.9648 17.671 25.9649 18.4197 25.5725C19.0783 25.2273 19.6137 24.6766 19.9493 23.9992C20.3308 23.2291 20.3308 22.221 20.3308 20.2048V9.16485M13.3308 1.96484L20.3308 9.16485M13.3308 1.96484V9.16485H20.3308M10.9974 21.1649C10.9974 21.1649 14.4974 19.4489 14.4974 16.8751V13.8723L11.9452 12.9343C11.332 12.7084 10.6614 12.7084 10.0482 12.9343L7.4974 13.8723V16.8751C7.4974 19.4489 10.9974 21.1649 10.9974 21.1649Z" stroke="#CB4E66" strokeWidth="1.77482" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_shield">
                            <rect width="21" height="27" fill="white" transform="translate(0.5 0.464844)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-[18px] font-medium leading-[21.6px] text-[#252525] w-full">
                      Bring more trust to people who use online payment methods.
                    </p>
                  </div>
                </div>

                {/* Goals Grid Row 2 */}
                <div className="flex items-start gap-8 flex-wrap w-full">
                  
                  {/* Goal 3 */}
                  <div className="flex w-[380px] p-4 flex-col items-start gap-6 rounded-lg border border-[#DFDFDF]">
                    <div className="w-12 h-12 p-2 flex justify-center items-center rounded">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_face)">
                          <path d="M9.2 16.5562C9.2 16.5562 11 18.9563 14 18.9563C17 18.9563 18.8 16.5562 18.8 16.5562M17.6 10.5563H17.612M9.2 10.5563H11.6M26 14.1563C26 20.7837 20.6274 26.1563 14 26.1563C7.37259 26.1563 2 20.7837 2 14.1563C2 7.52883 7.37259 2.15625 14 2.15625C20.6274 2.15625 26 7.52883 26 14.1563ZM18.2 10.5563C18.2 10.8876 17.9314 11.1562 17.6 11.1562C17.2686 11.1562 17 10.8876 17 10.5563C17 10.2249 17.2686 9.95625 17.6 9.95625C17.9314 9.95625 18.2 10.2249 18.2 10.5563Z" stroke="#CB4E66" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_face">
                            <rect width="27" height="27" fill="white" transform="translate(0.5 0.65625)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-[18px] font-medium leading-[21.6px] text-[#252525] w-full">
                      Develop a tool that is intuitive and accessible for users.
                    </p>
                  </div>

                  {/* Goal 4 */}
                  <div className="flex p-4 flex-col items-start gap-6 flex-1 rounded-lg border border-[#DFDFDF]">
                    <div className="w-12 h-12 p-2 flex justify-center items-center rounded">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_chart)">
                          <path d="M7.07572 15.8474V18.3089M11.9988 10.9243V18.3089M16.9218 6.0012V18.3089M6.82957 23.232H17.168C19.2359 23.232 20.2698 23.232 21.0597 22.8295C21.7544 22.4755 22.3193 21.9107 22.6733 21.216C23.0757 20.4261 23.0757 19.3922 23.0757 17.3243V6.98582C23.0757 4.91793 23.0757 3.88399 22.6733 3.09416C22.3193 2.39941 21.7544 1.83456 21.0597 1.48056C20.2698 1.07812 19.2359 1.07812 17.168 1.07812H6.82957C4.76168 1.07812 3.72774 1.07812 2.93791 1.48056C2.24316 1.83456 1.67831 2.39941 1.32431 3.09416C0.921875 3.88399 0.921875 4.91793 0.921875 6.98582V17.3243C0.921875 19.3922 0.921875 20.4261 1.32431 21.216C1.67831 21.9107 2.24316 22.4755 2.93791 22.8295C3.72774 23.232 4.76168 23.232 6.82957 23.232Z" stroke="#CB4E66" strokeWidth="1.84615" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_chart">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.15625)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-[18px] font-medium leading-[21.6px] text-[#252525] w-full">
                      Build a portal to monitor data and app usage, making it easier to analyze and attract investors.
                    </p>
                  </div>
                </div>

                {/* Conclusion */}
                <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                  Given this scenario, major companies in Brazil's telecommunications sector invested in this MVP project to combat these 
                  figures and bring more security to their customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
