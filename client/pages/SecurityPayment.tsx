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

              {/* Development Process Section */}
              <div className="w-full flex flex-col justify-center items-center gap-8">

                {/* Mobile App Mockups */}
                <div className="w-full relative">
                  <div className="flex justify-center items-start gap-10 w-full">
                    {/* Mobile Screen 1 */}
                    <div className="w-[280px] h-[560px] rounded-md border border-[#DFDFDF] overflow-hidden">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/eedff2e0a7192e20085c787a716e7d78d7e0e065?width=560"
                        alt="Payment slip verification mobile screen"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Mobile Screen 2 */}
                    <div className="w-[280px] h-[560px] rounded-md border border-[#DFDFDF] overflow-hidden">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/9e6f559fbee9a8ea097c48d80e17d8668b195536?width=560"
                        alt="Bill verification process mobile screen"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Mobile Screen 3 */}
                    <div className="w-[280px] h-[560px] rounded-md border border-[#DFDFDF] overflow-hidden">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/c7beeffc8dc7fd4dd4adcd04a058d7fba657b2ee?width=560"
                        alt="Verification result mobile screen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-[225px] bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
                </div>

                {/* Development Process Content */}
                <div className="w-full flex flex-col justify-center items-start gap-6">

                  <h2 className="text-[36px] font-semibold leading-[43.2px] text-[#252525] w-full">
                    Development process
                  </h2>

                  <h3 className="text-[28px] font-semibold leading-[42px] text-[#CB4E66] w-full">
                    Step 1: Discovery
                  </h3>

                  <div className="flex flex-col gap-6 w-full">
                    <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                      We conducted <span className="font-bold">detailed analyses to understand the target audience and market solutions</span>, ensuring that development
                      met real needs.
                    </p>

                    <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                      We identified that customers wanted <span className="font-bold">a simple tool for verifying payment slips and quick access to support</span>. With this
                      in mind, we decided to expand the functionality by creating a section with tips for fraud prevention, adding more value and
                      increasing user engagement with the product.
                    </p>
                  </div>

                  {/* Feature Cards */}
                  <div className="flex justify-between items-center w-full gap-4 mt-8">

                    {/* Payment slip verification */}
                    <div className="w-[242px] h-[128px] border border-[#DFDFDF] rounded-lg flex flex-col items-center justify-center gap-2 relative">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.9642 12.957H6.34348M8.55038 17.457H6.34348M15.171 8.45703H6.34348M19.5849 12.3945V8.23203C19.5849 6.34186 19.5849 5.39676 19.2241 4.67482C18.9067 4.03977 18.4003 3.52346 17.7774 3.19988C17.0693 2.83203 16.1423 2.83203 14.2883 2.83203H7.22624C5.37227 2.83203 4.44529 2.83203 3.73717 3.19988C3.11429 3.52346 2.60787 4.03977 2.29049 4.67482C1.92969 5.39676 1.92969 6.34186 1.92969 8.23203V19.932C1.92969 21.8222 1.92969 22.7673 2.29049 23.4893C2.60787 24.1243 3.11429 24.6406 3.73717 24.9641C4.44529 25.332 5.37227 25.332 7.22624 25.332H10.2055M21.7917 25.332L20.1366 23.6445M21.2401 20.832C21.2401 23.0066 19.5109 24.7695 17.378 24.7695C15.245 24.7695 13.5159 23.0066 13.5159 20.832C13.5159 18.6574 15.245 16.8945 17.378 16.8945C19.5109 16.8945 21.2401 18.6574 21.2401 20.832Z" stroke="#CB4E66" strokeWidth="2.22835" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                          Payment slip verification
                        </p>
                        <p className="text-[16px] leading-[19.2px] text-[#777] mt-1">
                          Goal
                        </p>
                      </div>
                    </div>

                    {/* Dotted Line */}
                    <div className="flex-1 h-[4px] flex items-center justify-center">
                      <svg width="97" height="5" viewBox="0 0 97 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.980469 2.08203H96.0209" stroke="#CB4E66" strokeWidth="1.97969" strokeDasharray="2.97 2.97"/>
                      </svg>
                    </div>

                    {/* Tips and FAQs */}
                    <div className="w-[242px] h-[128px] border border-[#DFDFDF] rounded-lg flex flex-col items-center justify-center gap-2 relative">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2.83203V3.95703M3.875 14.082H2.75M6.6875 6.76953L6.01239 6.09442M21.3125 6.76953L21.9878 6.09442M25.25 14.082H24.125M11.75 15.7695H16.25M14 15.7695V21.3945M17.9375 19.5652C19.6408 18.3399 20.75 16.3405 20.75 14.082C20.75 10.3541 17.7279 7.33203 14 7.33203C10.2721 7.33203 7.25 10.3541 7.25 14.082C7.25 16.3405 8.35918 18.3399 10.0625 19.5652V21.732C10.0625 22.9921 10.0625 23.6222 10.3077 24.1035C10.5235 24.5269 10.8677 24.8711 11.2911 25.0868C11.7723 25.332 12.4024 25.332 13.6625 25.332H14.3375C15.5976 25.332 16.2277 25.332 16.7089 25.0868C17.1323 24.8711 17.4766 24.5269 17.6922 24.1035C17.9375 23.6222 17.9375 22.9921 17.9375 21.7321V19.5652Z" stroke="#CB4E66" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                          Tips and FAQs
                        </p>
                        <p className="text-[16px] leading-[19.2px] text-[#777] mt-1">
                          Engagement
                        </p>
                      </div>
                    </div>

                    {/* Dotted Line */}
                    <div className="flex-1 h-[4px] flex items-center justify-center">
                      <svg width="97" height="5" viewBox="0 0 97 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.980469 2.08203H96.0209" stroke="#CB4E66" strokeWidth="1.97969" strokeDasharray="2.97 2.97"/>
                      </svg>
                    </div>

                    {/* Support contact */}
                    <div className="w-[242px] h-[128px] border border-[#DFDFDF] rounded-lg flex flex-col items-center justify-center gap-2 relative">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.75 17.457L8.29033 20.96C7.80776 21.4486 7.56647 21.6928 7.35907 21.7101C7.17914 21.7251 7.00297 21.6527 6.88546 21.5157C6.75 21.3576 6.75 21.0143 6.75 20.3275V18.5726C6.75 17.9565 6.24545 17.5107 5.63585 17.4214C4.16046 17.2053 3.00175 16.0465 2.78563 14.5712C2.75 14.3279 2.75 14.0376 2.75 13.457V8.23203C2.75 6.34186 2.75 5.39676 3.11785 4.67482C3.44143 4.03977 3.95774 3.52346 4.59278 3.19988C5.31473 2.83203 6.25982 2.83203 8.15 2.83203H16.475C18.3651 2.83203 19.3103 2.83203 20.0322 3.19988C20.6672 3.52346 21.1836 4.03977 21.5072 4.67482C21.875 5.39676 21.875 6.34186 21.875 8.23203V12.957M21.875 25.332L19.4266 23.6298C19.0823 23.3905 18.9103 23.2708 18.723 23.186C18.5568 23.1108 18.382 23.0559 18.2025 23.0228C18.0003 22.9856 17.7907 22.9856 17.3715 22.9856H15.35C14.0899 22.9856 13.4598 22.9856 12.9786 22.7404C12.5552 22.5247 12.2109 22.1804 11.9952 21.757C11.75 21.2758 11.75 20.6457 11.75 19.3856V16.557C11.75 15.2969 11.75 14.6668 11.9952 14.1856C12.2109 13.7622 12.5552 13.418 12.9786 13.2023C13.4598 12.957 14.0899 12.957 15.35 12.957H21.65C22.9101 12.957 23.5402 12.957 24.0215 13.2023C24.4449 13.418 24.789 13.7622 25.0048 14.1856C25.25 14.6668 25.25 15.2969 25.25 16.557V19.6106C25.25 20.659 25.25 21.1831 25.0787 21.5967C24.8504 22.148 24.4124 22.586 23.8611 22.8144C23.4476 22.9856 22.9233 22.9856 21.875 22.9856V25.332Z" stroke="#CB4E66" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                          Support contact
                        </p>
                        <p className="text-[16px] leading-[19.2px] text-[#777] mt-1">
                          Communication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Ideation Section */}
              <div className="w-full flex flex-col justify-center items-start gap-6">

                <h3 className="text-[28px] font-semibold leading-[42px] text-[#CB4E66] w-full">
                  Step 2: Ideation
                </h3>

                <p className="text-[20px] leading-[24px] text-[#252525] w-full">
                  After the discovery phase, we moved on to creating the flow, style guide, and wireframes for the project.
                </p>

                {/* User Flow Mapping */}
                <div className="w-full flex flex-col gap-6 mt-16">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[20px] font-medium leading-[24px] text-[#252525] w-full">
                      User flow mapping
                    </h4>
                    <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                      We created a fast and intuitive payment slip verification process, with few steps and clicks, ensuring simple and efficient
                      navigation.
                    </p>
                  </div>

                  {/* User Flow Diagram */}
                  <div className="w-full flex justify-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/d8e10e78a9b0358e5fede348b5e6398e997b1be9?width=1840"
                      alt="User flow diagram showing payment slip verification process"
                      className="w-full h-[341px] object-contain"
                    />
                  </div>
                </div>

                {/* Style Guide Creation */}
                <div className="w-full flex flex-col gap-6 mt-16">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[20px] font-medium leading-[24px] text-[#252525] w-full">
                      Creation of the Style Guide
                    </h4>
                    <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                      Developed based on the company's visual identity manual, but with adjustments to the primary color to improve
                      accessibility, ensuring an inclusive experience.
                    </p>
                  </div>

                  {/* Style Guide Image */}
                  <div className="w-full flex justify-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/7d3cfc26e5235f4fb36794e9c4cca5633abee44b?width=1840"
                      alt="Style guide showing colors, typography, and design elements"
                      className="w-full h-[400px] object-contain rounded"
                    />
                  </div>

                  {/* Color Accessibility Testing */}
                  <div className="flex justify-center items-start gap-10 w-full mt-8">
                    <div className="w-[280px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/61617bb7fc3df62e5025135b0c4668fc994d5c04?width=560"
                        alt="Color accessibility testing results - page 1"
                        className="w-full h-[531px] object-contain"
                      />
                    </div>
                    <div className="w-[280px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/2768cd57551e49c56f9c59a9693b0ce3173fdcb9?width=560"
                        alt="Color accessibility testing results - page 2"
                        className="w-full h-[530px] object-contain"
                      />
                    </div>
                    <div className="w-[280px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/20fe32f65cc2204d7f5afc446cea49db3394c76e?width=560"
                        alt="Color accessibility testing results - page 3"
                        className="w-full h-[543px] object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Wireframe Validation */}
                <div className="w-full flex flex-col gap-6 mt-16">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[20px] font-medium leading-[24px] text-[#252525] w-full">
                      Validations through wireframes.
                    </h4>
                    <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                      We used a proprietary component library, which accelerated the creation of wireframes and allowed us to quickly validate
                      the solutions with clients, ensuring alignment with their expectations.
                    </p>
                  </div>

                  {/* Mobile Wireframes Row 1 */}
                  <div className="flex justify-center items-start gap-10 w-full">
                    <div className="w-[145px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/e1344eaded69d728b2fa6fd7dfbb7e06dc11cb76?width=290"
                        alt="Mobile wireframe 1"
                        className="w-full h-[313px] object-contain"
                      />
                    </div>
                    <div className="w-[145px] flex justify-center border border-[#DFDFDF] rounded">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/84c4bd16b938bbba3772c1c40fa09003510c4dcd?width=290"
                        alt="Mobile wireframe 2"
                        className="w-full h-[313px] object-contain rounded"
                      />
                    </div>
                    <div className="w-[144px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/de1250ec82fbe50e0cdad3d9290b648d93975f7e?width=288"
                        alt="Mobile wireframe 3"
                        className="w-full h-[313px] object-contain"
                      />
                    </div>
                    <div className="w-[144px] flex justify-center border border-[#DFDFDF] rounded">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/dd1eb250a3b2dbcffa38f13c907d34141526df9b?width=288"
                        alt="Mobile wireframe 4"
                        className="w-full h-[313px] object-contain rounded"
                      />
                    </div>
                  </div>

                  {/* Desktop Wireframes Row 2 */}
                  <div className="flex justify-center items-start gap-10 w-full mt-8">
                    <div className="w-[338px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/d75acf5b3da6afe34a9cb0a722bd96409a1966d3?width=676"
                        alt="Desktop wireframe 1"
                        className="w-full h-[300px] object-contain"
                      />
                    </div>
                    <div className="w-[306px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/9eba9fb4581a9881a9cf178acc537f30460ce833?width=612"
                        alt="Desktop wireframe 2"
                        className="w-full h-[300px] object-contain"
                      />
                    </div>
                  </div>

                  {/* Desktop Wireframes Row 3 */}
                  <div className="flex justify-center items-start gap-10 w-full mt-8">
                    <div className="w-[295px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/f8854bdd24bc9ea06a0a4948c85cc2415ab8b8e1?width=590"
                        alt="Desktop wireframe 3"
                        className="w-full h-[166px] object-contain"
                      />
                    </div>
                    <div className="w-[248px] flex justify-center">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/0b93935fd9320c32843556543c3ea798926dc006?width=496"
                        alt="Desktop wireframe 4"
                        className="w-full h-[166px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Development Section */}
              <div className="w-full flex flex-col justify-center items-start gap-6 mt-16">

                <h3 className="text-[28px] font-semibold leading-[42px] text-[#CB4E66] w-full">
                  Step 3: Development
                </h3>

                <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                  After the approval of the flow, style guide, and initial wireframes, we moved on to creating the new components and high-
                  fidelity design.
                </p>

                {/* Mobile App Section */}
                <div className="w-full flex justify-between items-center gap-10 mt-16">
                  <div className="w-[270px] p-10 bg-gradient-to-br from-[#F0F1F1] to-[#C3C6CC] rounded-2xl flex justify-center items-end relative">
                    {/* Mobile Phone Mockup */}
                    <div className="relative w-[182px] h-[367px]">
                      {/* Shadow */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                        alt="Phone shadow"
                        className="absolute w-full h-full opacity-70"
                      />
                      {/* Main phone */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                        alt="Phone frame"
                        className="absolute left-[3px] top-[1px] w-[175px] h-[356px]"
                      />
                      {/* Screen content */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/fd836bc04e55dbe967b5ae836684e63a0f07d903?width=316"
                        alt="Payment slip verification app screen"
                        className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                      />
                    </div>
                  </div>

                  <div className="w-[618px] flex flex-col gap-8">
                    {/* Description Card */}
                    <div className="border border-[#DFDFDF] rounded-lg p-4 flex justify-center items-center min-h-[148px]">
                      <p className="text-[18px] font-medium leading-[21.6px] text-[#252525] text-center max-w-[520px]">
                        The main product is an application that allows users to quickly scan
                        payment slips with their phone's camera, facilitating reading.
                      </p>
                    </div>

                    {/* Design System Image */}
                    <div className="border border-[#DFDFDF] rounded-lg p-4 flex justify-center items-center min-h-[248px]">
                      <div className="w-full h-[203px] relative">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/c97b25253cf0ef78f2622b3aca5b0418dbe75031?width=1166"
                          alt="Design system components and UI elements"
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admin Portal Section */}
                <div className="w-full flex justify-between items-center gap-10 mt-20">
                  <div className="w-[384px] flex flex-col gap-8">
                    {/* Admin Portal Description */}
                    <div className="border border-[#DFDFDF] rounded-lg p-6 flex justify-center items-center">
                      <p className="text-[18px] font-medium leading-[21.6px] text-[#252525] text-center">
                        Creation of an Admin portal to facilitate
                        product management by the company's
                        management team without relying on the
                        development team.
                      </p>
                    </div>

                    {/* Admin Portal Wireframe */}
                    <div className="border border-[#DFDFDF] rounded-lg p-3 flex justify-center items-center min-h-[239px]">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/dedb3bd99543fc0e2e090a6129f5c88111166c86?width=720"
                        alt="Admin portal wireframe interface"
                        className="w-full h-[136px] object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="w-[504px] p-9 bg-gradient-to-br from-[#F0F1F1] to-[#C3C6CC] rounded-2xl flex justify-center items-center relative">
                    {/* Tablet Mockup */}
                    <div className="relative w-[438px] h-[336px]">
                      {/* Shadow */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/056d69903efa2f4b284b2a3cac68890b40450704?width=916"
                        alt="Tablet shadow"
                        className="absolute w-[458px] h-[357px] opacity-70"
                      />
                      {/* Main tablet */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/f9e6f44282e4b4d664fc870f243962aa023470a0?width=878"
                        alt="Tablet frame"
                        className="absolute w-[439px] h-[336px]"
                      />
                      {/* Screen content */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/247018df1d4f429efe0efa73a88ddb0e7b986f55?width=824"
                        alt="Admin dashboard with analytics and charts"
                        className="absolute left-[13px] top-[13px] w-[412px] h-[310px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Landing Page Section */}
                <div className="w-full flex justify-between items-center gap-10 mt-20">
                  <div className="w-[504px] p-20 bg-gradient-to-br from-[#F0F1F1] to-[#C3C6CC] rounded-2xl flex justify-center items-center relative">
                    {/* Laptop Mockup */}
                    <div className="relative w-[425px] h-[239px]">
                      {/* Shadow */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/d28b6c42bb501dff98056650cdeaf79a170103b0?width=850"
                        alt="Laptop shadow"
                        className="absolute w-full h-full opacity-70"
                      />
                      {/* Main laptop */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/430562bb0cbd96c3b8208051ec75de6dfadb66d5?width=850"
                        alt="Laptop frame"
                        className="absolute w-full h-full mix-blend-multiply"
                      />
                      {/* Screen content */}
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/fa456cb88b52c7b1ef2510d13edbe4f48eed7fab?width=650"
                        alt="Landing page with verification tool and company information"
                        className="absolute left-[49px] top-[4px] w-[325px] h-[209px]"
                      />
                    </div>
                  </div>

                  <div className="w-[384px] flex flex-col gap-8">
                    {/* Landing Page Description */}
                    <div className="border border-[#DFDFDF] rounded-lg p-6 flex justify-center items-center">
                      <p className="text-[18px] font-medium leading-[21.6px] text-[#252525] text-center">
                        Landing page featuring the verification
                        functionality and an institutional section
                        explaining the product, company, and
                        partners.
                      </p>
                    </div>

                    {/* Landing Page Design */}
                    <div className="border border-[#DFDFDF] rounded-lg p-3 flex justify-center items-center min-h-[263px]">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/41bc36328502320801c4a3ac7a2debadec9ffe6a?width=720"
                        alt="Landing page design layouts and sections"
                        className="w-full h-[135px] object-contain rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Interaction Section */}
              <div className="w-full flex flex-col justify-center items-start gap-6 mt-16">

                <h3 className="text-[28px] font-semibold leading-[42px] text-[#CB4E66] w-full">
                  Step 4: Interaction
                </h3>

                <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                  We began creating the first screens and held several discussions with clients to gather feedback on the developed options.
                  We also validated the screens together, ensuring <span className="font-bold">quality, accessibility, and alignment with the project's objectives.</span>
                </p>
              </div>

              {/* Step 5: Delivery Section */}
              <div className="w-full flex flex-col justify-center items-start gap-6 mt-16">

                <h3 className="text-[28px] font-semibold leading-[42px] text-[#CB4E66] w-full">
                  Step 5: Delivery
                </h3>

                <div className="flex flex-col gap-6 w-full">
                  <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                    After completing the validations with the clients, we made the final adjustments and prepared the files to be handed over to
                    the development team, along with <span className="font-bold">documentation of components and navigation flows, as well as a navigable
                    prototype.</span>
                  </p>

                  <p className="text-[18px] leading-[21.6px] text-[#252525] w-full">
                    Check below for the final delivery of the project and the content of each product.
                  </p>
                </div>
              </div>

              {/* Mobile App Section */}
              <div className="w-full flex flex-col justify-center items-start gap-6 mt-16">

                <h3 className="text-[32px] font-semibold leading-[38.4px] text-[#252525] w-full text-center">
                  Mobile App
                </h3>

                {/* Mobile App Mockups - First Set */}
                <div className="w-full p-12 bg-gradient-to-br from-[#F0F1F1] to-[#C3C6CC] rounded-2xl flex flex-wrap justify-center items-center gap-6">
                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fd836bc04e55dbe967b5ae836684e63a0f07d903?width=316"
                      alt="Home screen with verification button"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[181px] h-[366px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/02260a4a871de5435f1c45edad615a3b594cc828?width=362"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/aa86a4628ad2d5e313469c3928fb0753eacabb7a?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[354px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1800dab35f90800c717d7474c62879f3c2e51e72?width=314"
                      alt="Bill type selection screen"
                      className="absolute left-[11px] top-[8px] w-[157px] h-[339px]"
                    />
                  </div>

                  <div className="relative w-[180px] h-[366px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-[182px] h-[367px] opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8a08b3d8dce17205f39d899f7148339414bc54de?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[355px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/15e413ae417636d835e0aa3b7cecb4e4e2176c42?width=316"
                      alt="Bill verification form"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8a08b3d8dce17205f39d899f7148339414bc54de?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[355px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/ed6647016a001c8d3ccc2700fbd82f873d0d35b7?width=316"
                      alt="Camera scanning interface"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>
                </div>

                {/* Mobile App Features Description */}
                <div className="border border-[#DFDFDF] rounded-lg p-4 w-full">
                  <ul className="space-y-3 pl-8">
                    <li className="text-[18px] leading-[27px] text-[#252525] list-disc">
                      Home screen with a large button to quickly verify payment slips.
                    </li>
                    <li className="text-[18px] leading-[27px] text-[#252525] list-disc">
                      Option to enter the payment slip code or scan it with the camera.
                    </li>
                  </ul>
                </div>

                {/* Mobile App Mockups - Second Set */}
                <div className="w-full p-12 bg-gradient-to-br from-[#F0F1F1] to-[#C3C6CC] rounded-2xl flex flex-wrap justify-center items-center gap-6 mt-8">
                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/6cc9a416a9efe6afa37ddfcc700d883eca8b6655?width=316"
                      alt="Verification success screen"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8a08b3d8dce17205f39d899f7148339414bc54de?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[355px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/0e67599e8a23cae522163c75453e69e4f0ea0705?width=316"
                      alt="Fraud warning screen"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8a08b3d8dce17205f39d899f7148339414bc54de?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[355px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b78f581c2572bc16d4d3734052d09231c459397e?width=316"
                      alt="Tips and guidance screen"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8a08b3d8dce17205f39d899f7148339414bc54de?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[355px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/87c8849937df122234002ae2796427371cf313d4?width=316"
                      alt="Help and support screen"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>
                </div>

                {/* Second Set Features Description */}
                <div className="border border-[#DFDFDF] rounded-lg p-4 w-full">
                  <ul className="space-y-3 pl-8">
                    <li className="text-[18px] leading-[27px] text-[#252525] list-disc">
                      Clear feedback for secure payment slips or potential fraud, along with appropriate guidance.
                    </li>
                    <li className="text-[18px] leading-[27px] text-[#252525] list-disc">
                      Help portal with tips on how to avoid fraud.
                    </li>
                  </ul>
                </div>

                {/* Dark Mode Mobile App Mockups */}
                <div className="w-full p-12 bg-gradient-to-br from-[#4F535A] to-[#1C1F24] rounded-2xl flex flex-wrap justify-center items-center gap-6 mt-8">
                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px] mix-blend-soft-light"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/000054244d110ec34dcb4f02d020361be2066f49?width=316"
                      alt="Dark mode home screen"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px] mix-blend-soft-light"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/15765764c34df66c34a6edc270884bafbdd85c33?width=316"
                      alt="Dark mode bill selection"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px] mix-blend-soft-light"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/ada8cece5f93131e164b260570848134a1a063bc?width=316"
                      alt="Dark mode verification form"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px] mix-blend-soft-light"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f13bdb60014932ee0f9d1b0ea08aa01a46d352ad?width=316"
                      alt="Dark mode camera scanning"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>
                </div>

                {/* Dark Mode Results */}
                <div className="w-full p-10 bg-gradient-to-br from-[#4F535A] to-[#1C1F24] rounded-2xl flex flex-wrap justify-center items-center gap-7 mt-8">
                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px] mix-blend-soft-light"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/84b6c03204b1faef6955233243626582a21bebbe?width=316"
                      alt="Dark mode verification success"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px] mix-blend-soft-light"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8fe186df1b2fda134de680d1f12d448f3cdb6184?width=316"
                      alt="Dark mode fraud warning"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px] mix-blend-soft-light"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/dfc2cd19527b6ec7ef57e6c1286fa816c25be84a?width=316"
                      alt="Dark mode tips and guidance"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>

                  <div className="relative w-[182px] h-[367px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5b1de9458b8a89232d08ac41c00cef2c254b6b31?width=364"
                      alt="Phone shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/44d579f5b6992c8fd2e76222699b219a46a9db2f?width=350"
                      alt="Phone frame"
                      className="absolute left-[3px] top-[1px] w-[175px] h-[356px] mix-blend-soft-light"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/71e85b129211a54eed5d137362c87360101f42ec?width=316"
                      alt="Dark mode help and support"
                      className="absolute left-[11px] top-[8px] w-[158px] h-[340px]"
                    />
                  </div>
                </div>
              </div>

              {/* Admin Module Section */}
              <div className="w-full flex flex-col justify-center items-start gap-6 mt-16">

                <h3 className="text-[32px] font-semibold leading-[38.4px] text-[#252525] w-full text-center">
                  Admin module
                </h3>

                {/* Admin Dashboard Mockups */}
                <div className="w-full h-[756px] bg-gradient-to-br from-[#F0F1F1] to-[#C3C6CC] rounded-2xl relative">

                  {/* First Tablet - Bottom Left */}
                  <div className="absolute left-[135px] top-[413px] w-[416px] h-[325px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f009e0a748efa1b57ed07cd7f5436f92e730d6c5?width=832"
                      alt="Tablet shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/88139885d3fc12ac3d7ab5486603bdacdc66ba05?width=798"
                      alt="Tablet frame"
                      className="absolute w-[399px] h-[306px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1060e2367e2b647532b0b7cabae14cc1e131d609?width=750"
                      alt="Bill types management interface"
                      className="absolute left-[12px] top-[12px] w-[375px] h-[281px]"
                    />
                  </div>

                  {/* Second Tablet - Top Left */}
                  <div className="absolute left-[68px] top-[38px] w-[462px] h-[360px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/88f4b12e177ccf3b2347cd8283585125c72a962a?width=924"
                      alt="Tablet shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/cf083a0279e1615e7932c56b2ffd2866f310ca87?width=886"
                      alt="Tablet frame"
                      className="absolute w-[443px] h-[340px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4e763e815836bb941848034b3a5e6caa045f7c11?width=832"
                      alt="Payment slips verification dashboard"
                      className="absolute left-[13px] top-[13px] w-[416px] h-[313px]"
                    />
                  </div>

                  {/* Main Tablet - Center Right */}
                  <div className="absolute left-[309px] top-[150px] w-[545px] h-[425px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/9d401cfc30243e36495dff5e03fe25dad06dfceb?width=1090"
                      alt="Tablet shadow"
                      className="absolute w-full h-full opacity-70"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c8c7979eb786ef1737f48ead3c011b193281d17c?width=1044"
                      alt="Tablet frame"
                      className="absolute w-[522px] h-[400px]"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/6cee257e1e02be092377a3f2c5d0f20a2950b30c?width=982"
                      alt="Admin dashboard with analytics and charts"
                      className="absolute left-[15px] top-[15px] w-[491px] h-[368px]"
                    />
                  </div>
                </div>

                {/* Admin Module Features Description */}
                <div className="border border-[#DFDFDF] rounded-lg p-4 w-full">
                  <ul className="space-y-3 pl-8">
                    <li className="text-[18px] leading-[27px] text-[#252525] list-disc">
                      Dashboard with key data: types of payment slips most commonly frauded and comparison between secure slips and frauds.
                    </li>
                    <li className="text-[18px] leading-[27px] text-[#252525] list-disc">
                      Comparison of access between web and app, along with a timeline graph to identify the most common months and types of fraud.
                    </li>
                    <li className="text-[18px] leading-[27px] text-[#252525] list-disc">
                      Page with individual access history for each verified payment slip.
                    </li>
                    <li className="text-[18px] leading-[27px] text-[#252525] list-disc">
                      Management of automated tips and FAQs.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Landing Page Section */}
              <div className="w-full flex flex-col justify-center items-start gap-6 mt-16">

                <h3 className="text-[32px] font-semibold leading-[38.4px] text-[#252525] w-full text-center">
                  Landing page
                </h3>

                {/* Landing Page Mockup */}
                <div className="w-full p-10 bg-gradient-to-br from-[#F0F1F1] to-[#C3C6CC] rounded-2xl flex justify-center items-center">
                  <div className="w-[688px] border border-[#DFDFDF] rounded-lg overflow-hidden">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f70eafc1ba0b47a67b91ef9497566b853daf59fe?width=1376"
                      alt="Complete landing page design showing verification tool, company information, partner logos, tips section, FAQ, and mobile app download"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
