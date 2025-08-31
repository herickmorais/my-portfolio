import Sidebar from "@/components/Sidebar";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 ml-[242px] min-h-screen bg-white">
        <div className="flex justify-center pt-12">
          <div className="w-[920px] px-8 flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex flex-col items-start">
                <h1 className="text-[32px] font-medium leading-[38.4px] text-[#252525]">
                  About me
                </h1>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-start gap-[72px] w-full">
              {/* Stats Section */}
              <div className="flex w-full justify-between items-center flex-wrap gap-8">
                {/* Worked Projects */}
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="flex items-center">
                    <div className="flex flex-col items-start">
                      <div className="text-[48px] font-semibold leading-[57.6px] text-[#252525]">
                        +10
                      </div>
                    </div>
                  </div>
                  <div className="text-[16px] leading-[19.2px] text-[#414141]">
                    Worked Projects
                  </div>
                </div>

                {/* Design Experience */}
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="flex items-center gap-2">
                    <div className="text-[48px] font-semibold leading-[57.6px] text-[#252525]">
                      +4
                    </div>
                    <div className="text-[20px] font-medium leading-[24px] text-[#414141]">
                      Years
                    </div>
                  </div>
                  <div className="text-[16px] leading-[19.2px] text-[#414141]">
                    Design Experience
                  </div>
                </div>

                {/* University Degree */}
                <div className="flex flex-col items-start gap-7 flex-1 max-w-md">
                  <div className="text-[24px] font-semibold leading-[28.8px] text-[#252525]">
                    Systems Analysis and Development
                  </div>
                  <div className="text-[16px] leading-[19.2px] text-[#414141]">
                    University Degree
                  </div>
                </div>
              </div>

              {/* Biography Section */}
              <div className="flex w-full flex-col items-start">
                <div className="flex flex-col items-start w-full space-y-6">
                  <p className="text-[16px] leading-[24px] text-[#252525]">
                    I'm Herick Morais, a brazilian designer who discovered my
                    passion for design as a child when I created my birthday
                    invitations using PowerPoint on Windows XP. As I progressed,
                    I embraced Photoshop and worked as a Graphic Designer for
                    local businesses. Despite enjoying Visual Identity work, I
                    yearned for the logical problem-solving aspects of product
                    development, leading me to study Systems Analysis and
                    Development.
                  </p>

                  <p className="text-[16px] leading-[24px] text-[#252525]">
                    I started working as a developer Front End and QA, for an
                    insurance company in Australia, and although I used to like
                    all the logical problem solving aspects involved, I found
                    myself longing for Product Study and Definitions Aspects
                    related Graphic Design role. It was when I got to know the
                    area of UX Design and all the others Product Team roles, and
                    I immediately started studying and delving deeper into the
                    subject.
                  </p>

                  <p className="text-[16px] leading-[24px] text-[#252525]">
                    Through Courses and Mentoring, I became a UX/UI Designer
                    that seeks to learn and improve every day using Heuristics
                    and Information Architecture, together with Flows,
                    Technology and Business Goals.
                  </p>
                </div>
              </div>

              {/* Companies Section */}
              <div className="flex w-full flex-col items-start gap-6">
                <h2 className="text-[20px] font-medium leading-[24px] text-[#252525]">
                  Companies I've been to
                </h2>

                <div className="flex justify-between items-center flex-wrap gap-8 w-full">
                  {/* Produtalk */}
                  <div className="flex justify-center items-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8cabd5b8dc8e6e61b43d8657460c82e716bd6ced?width=304"
                      alt="Produtalk"
                      className="h-[34px] object-contain"
                    />
                  </div>

                  {/* BraxDesign */}
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/7adc67636a111aab40e9e0d19dae9094b3dc6c44?width=68"
                      alt="BraxDesign Logo"
                      className="w-[34px] h-[34px] rounded object-contain"
                    />
                    <span className="text-[16px] font-semibold leading-[24px] text-[#16273B]">
                      BraxDesign
                    </span>
                  </div>

                  {/* Solarview */}
                  <div className="flex justify-center items-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c555a3e768a6fe61acf171260f5fa4c5d9feb351?width=342"
                      alt="Solarview"
                      className="h-[34px] object-contain"
                    />
                  </div>

                  {/* Lacrei Saúde */}
                  <div className="flex justify-center items-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/bfc4eabc3b07ee5c0f672284b56c93557acb79a7?width=214"
                      alt="Lacrei Saúde"
                      className="h-[30px] object-contain"
                    />
                  </div>

                  {/* Simbiose */}
                  <div className="flex justify-center items-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/7ec9ff66812ffb2e542b015d7f33413e039d0f5b?width=344"
                      alt="Simbiose"
                      className="h-[30px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Two Column Section: Courses and Languages */}
              <div className="flex w-full items-start gap-[120px] flex-wrap">
                {/* Left Column: Courses and Certificates */}
                <div className="flex flex-col items-start gap-6 min-w-[400px] flex-1">
                  <h2 className="text-[20px] font-medium leading-[24px] text-[#252525]">
                    Courses and Certificates
                  </h2>

                  <div className="flex flex-col items-start gap-6 w-full">
                    {/* Course 1 */}
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                        Technologist Degree Systems Analysis and Development
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        Maringá University 2020 - 2022
                      </p>
                    </div>

                    {/* Course 2 */}
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                        Bootcamp UX/UI
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        Cubos Academy 2022
                      </p>
                    </div>

                    {/* Course 3 */}
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                        UX Metrics for Digital Products
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        The Starter 2023
                      </p>
                    </div>

                    {/* Course 4 */}
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                        UI Design & FIGMA - Professional Training
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        UX Unicórnio 2023
                      </p>
                    </div>

                    {/* Course 5 */}
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                        Design Thinking
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        Echos Desirable Futures 2022
                      </p>
                    </div>

                    {/* Course 6 */}
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[16px] font-medium leading-[19.2px] text-[#252525]">
                        UX Writing
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        Plurix 2022
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Languages */}
                <div className="flex flex-col items-start gap-6 bg-white">
                  <h2 className="text-[20px] font-medium leading-[24px] text-[#252525]">
                    Languages
                  </h2>

                  <div className="flex flex-col items-start gap-8">
                    {/* English */}
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2">
                        <svg
                          width="24"
                          height="19"
                          viewBox="0 0 24 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1814_116520)">
                            <mask
                              id="mask0_1814_116520"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="19"
                            >
                              <path
                                d="M0 0.898438H24V18.8984H0V0.898438Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_1814_116520)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0.898438H24V18.8984H0V0.898438Z"
                                fill="#E31D1C"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 2.39844V3.89844H24V2.39844H0ZM0 5.39844V6.89844H24V5.39844H0ZM0 9.89844V8.39844H24V9.89844H0ZM0 11.3984V12.8984H24V11.3984H0ZM0 15.8984V14.3984H24V15.8984H0ZM0 18.8984V17.3984H24V18.8984H0Z"
                                fill="#F7FCFF"
                              />
                              <path
                                d="M0 0.898438H13.5V11.3984H0V0.898438Z"
                                fill="#2E42A5"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.563 4.15929L2.3574 3.60609L2.9742 4.05009H2.6262L3.3318 4.67409L3.0918 5.55009H2.7198L2.3562 4.74609L2.0478 5.55009H1.125L1.8318 6.17409L1.563 7.15929L2.3574 6.60609L2.9742 7.05009H2.6262L3.3318 7.67409L3.0918 8.55009H2.7198L2.3562 7.74609L2.0478 8.55009H1.125L1.8318 9.17409L1.563 10.1593L2.3574 9.60609L3.1266 10.1593L2.8878 9.17529L3.5058 8.55009H3.219L3.8562 8.10609L4.473 8.55009H4.125L4.8306 9.17409L4.5618 10.1593L5.3562 9.60609L6.1254 10.1593L5.8866 9.17529L6.5046 8.55009H6.219L6.8562 8.10609L7.473 8.55009H7.125L7.8306 9.17409L7.5618 10.1593L8.3562 9.60609L9.1254 10.1593L8.8866 9.17529L9.5046 8.55009H9.219L9.8562 8.10609L10.473 8.55009H10.125L10.8306 9.17409L10.5618 10.1593L11.3562 9.60609L12.1254 10.1593L11.8866 9.17529L12.5046 8.55009H11.7186L11.355 7.74609L11.0466 8.55009H10.599L10.3866 7.67409L11.0046 7.05009H10.719L11.3562 6.60609L12.1254 7.15929L11.8866 6.17529L12.5046 5.55009H11.7186L11.355 4.74609L11.0466 5.55009H10.599L10.3866 4.67409L11.0046 4.05009H10.719L11.3562 3.60609L12.1254 4.15929L11.8866 3.17529L12.5046 2.55009H11.7186L11.355 1.74609L11.0466 2.55009H10.1238L10.8306 3.17409L10.5906 4.05009H10.2186L9.855 3.24609L9.5466 4.05009H9.099L8.8866 3.17409L9.5046 2.55009H8.7186L8.355 1.74609L8.0466 2.55009H7.1238L7.8306 3.17409L7.5906 4.05009H7.2186L6.855 3.24609L6.5466 4.05009H6.099L5.8866 3.17409L6.5046 2.55009H5.7186L5.355 1.74609L5.0466 2.55009H4.1238L4.8306 3.17409L4.5906 4.05009H4.2186L3.855 3.24609L3.5466 4.05009H3.099L2.8866 3.17409L3.5046 2.55009H2.7186L2.355 1.74609L2.0466 2.55009H1.125L1.8318 3.17409L1.563 4.15929ZM10.593 7.05009L10.8318 6.17409L10.125 5.55009H10.4742L9.8574 5.10609L9.2214 5.55009H9.5058L8.8878 6.17409L9.1002 7.05009H9.5478L9.8562 6.24609L10.2198 7.05009H10.593ZM8.9742 7.05009L8.3574 6.60609L7.7214 7.05009H8.0058L7.3878 7.67409L7.6002 8.55009H8.0478L8.3562 7.74609L8.7198 8.55009H9.0918L9.3318 7.67409L8.625 7.05009H8.9742ZM6.3318 7.67409L6.0918 8.55009H5.7198L5.3562 7.74609L5.0478 8.55009H4.599L4.3866 7.67409L5.0046 7.05009H4.719L5.3562 6.60609L5.973 7.05009H5.625L6.3306 7.67409H6.3318ZM6.5478 7.05009H6.099L5.8866 6.17409L6.5046 5.55009H6.219L6.8562 5.10609L7.473 5.55009H7.125L7.8306 6.17409L7.5906 7.05009H7.2186L6.855 6.24609L6.5478 7.05009ZM4.5918 7.05009L4.8318 6.17409L4.125 5.55009H4.4742L3.8574 5.10609L3.2214 5.55009H3.5058L2.8878 6.17409L3.1002 7.05009H3.5478L3.8562 6.24609L4.2198 7.05009H4.5918ZM9.3318 4.67409L9.0918 5.55009H8.7198L8.3562 4.74609L8.0478 5.55009H7.599L7.3866 4.67409L8.0046 4.05009H7.719L8.3562 3.60609L8.973 4.05009H8.625L9.3306 4.67409H9.3318ZM5.9742 4.05009L5.3574 3.60609L4.7214 4.05009H5.0058L4.3878 4.67409L4.6002 5.55009H5.0478L5.3562 4.74609L5.7198 5.55009H6.0918L6.3318 4.67409L5.625 4.05009H5.9742Z"
                                fill="#F7FCFF"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_1814_116520">
                              <rect
                                width="24"
                                height="18"
                                fill="white"
                                transform="translate(0 0.898438)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-[20px] font-medium leading-[24px] text-[#252525]">
                          English
                        </span>
                      </div>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        Advanced
                      </p>
                    </div>

                    {/* Portuguese */}
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2">
                        <svg
                          width="24"
                          height="19"
                          viewBox="0 0 24 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1814_116547)">
                            <mask
                              id="mask0_1814_116547"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="19"
                            >
                              <path
                                d="M0 0.898438H24V18.8984H0V0.898438Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_1814_116547)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0.898438V18.8984H24V0.898438H0Z"
                                fill="#009933"
                              />
                              <mask
                                id="mask1_1814_116547"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="19"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0 0.898438V18.8984H24V0.898438H0Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask1_1814_116547)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.9482 3.67578L21.0994 10.0538L11.8234 16.0262L2.85938 9.93018L11.9482 3.67578Z"
                                  fill="#FFD221"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 13.7969C12.9946 13.7969 13.9484 13.4018 14.6517 12.6985C15.3549 11.9953 15.75 11.0414 15.75 10.0469C15.75 9.05231 15.3549 8.09849 14.6517 7.39522C13.9484 6.69196 12.9946 6.29688 12 6.29688C11.0054 6.29688 10.0516 6.69196 9.34835 7.39522C8.64509 8.09849 8.25 9.05231 8.25 10.0469C8.25 11.0414 8.64509 11.9953 9.34835 12.6985C10.0516 13.4018 11.0054 13.7969 12 13.7969Z"
                                  fill="#2E42A5"
                                />
                                <mask
                                  id="mask2_1814_116547"
                                  style={{ maskType: "luminance" }}
                                  maskUnits="userSpaceOnUse"
                                  x="8"
                                  y="6"
                                  width="8"
                                  height="8"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 13.7969C12.9946 13.7969 13.9484 13.4018 14.6517 12.6985C15.3549 11.9953 15.75 11.0414 15.75 10.0469C15.75 9.05231 15.3549 8.09849 14.6517 7.39522C13.9484 6.69196 12.9946 6.29688 12 6.29688C11.0054 6.29688 10.0516 6.69196 9.34835 7.39522C8.64509 8.09849 8.25 9.05231 8.25 10.0469C8.25 11.0414 8.64509 11.9953 9.34835 12.6985C10.0516 13.4018 11.0054 13.7969 12 13.7969Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask2_1814_116547)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.7853 11.8225L10.6173 11.9113L10.6497 11.7241L10.5141 11.5921L10.7013 11.5645L10.7853 11.3953L10.8693 11.5645L11.0553 11.5921L10.9197 11.7241L10.9521 11.9113L10.7853 11.8225ZM12.2853 11.8225L12.1173 11.9113L12.1497 11.7241L12.0141 11.5921L12.2013 11.5645L12.2853 11.3953L12.3693 11.5645L12.5553 11.5921L12.4197 11.7241L12.4521 11.9113L12.2853 11.8225ZM12.2853 12.7225L12.1173 12.8113L12.1497 12.6241L12.0141 12.4921L12.2013 12.4645L12.2853 12.2953L12.3693 12.4645L12.5553 12.4921L12.4197 12.6241L12.4521 12.8113L12.2853 12.7225ZM11.5353 9.57251L11.3673 9.66131L11.3997 9.47411L11.2641 9.34211L11.4513 9.31451L11.5353 9.14531L11.6193 9.31451L11.8053 9.34211L11.6697 9.47411L11.7021 9.66131L11.5353 9.57251ZM11.5353 11.0725L11.3673 11.1613L11.3997 10.9741L11.2641 10.8421L11.4513 10.8145L11.5353 10.6453L11.6193 10.8145L11.8053 10.8421L11.6697 10.9741L11.7021 11.1613L11.5353 11.0725ZM10.4853 10.3225L10.3173 10.4113L10.3497 10.2241L10.2141 10.0921L10.4013 10.0645L10.4853 9.89531L10.5693 10.0645L10.7553 10.0921L10.6197 10.2241L10.6521 10.4113L10.4853 10.3225ZM9.43406 10.9225L9.26606 11.0113L9.29966 10.8241L9.16406 10.6921L9.35126 10.6645L9.43526 10.4953L9.51926 10.6645L9.70526 10.6921L9.56966 10.8241L9.60206 11.0113L9.43406 10.9225ZM12.8853 8.37251L12.7173 8.46131L12.7497 8.27411L12.6141 8.14211L12.8013 8.11451L12.8853 7.94531L12.9693 8.11451L13.1553 8.14211L13.0197 8.27411L13.0521 8.46131L12.8853 8.37251Z"
                                    fill="#F7FCFF"
                                  />
                                  <path
                                    d="M7.44531 9.14364L7.55811 7.64844C11.1569 7.91964 13.9973 9.10284 16.0421 11.2076L14.9669 12.2528C13.1945 10.4288 10.6985 9.38844 7.44531 9.14364Z"
                                    fill="#F7FCFF"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_1814_116547">
                              <rect
                                width="24"
                                height="18"
                                fill="white"
                                transform="translate(0 0.898438)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-[20px] font-medium leading-[24px] text-[#252525]">
                          Portuguese
                        </span>
                      </div>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        Native
                      </p>
                    </div>

                    {/* Spanish */}
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/7fbc45e8771a508758dd3cba74763d143f3a5415?width=48"
                          alt="Spanish Flag"
                          className="w-6 h-[18px] object-contain"
                        />
                        <span className="text-[20px] font-medium leading-[24px] text-[#252525]">
                          Spanish
                        </span>
                      </div>
                      <p className="text-[16px] leading-[19.2px] text-[#414141]">
                        Basic
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Spacer */}
              <div className="w-full h-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
