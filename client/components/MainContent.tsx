import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: "security-payment",
    title: "Security and payment",
    description: "Application and Landing page to prevent payment fraud",
    images: [
      {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/24f5044eba770904edfeb7aaa0b12401dad12056?width=194",
        alt: "Security app mobile",
        className: "w-[97px] h-[218px] rounded-t left-[26px] top-[40px]"
      },
      {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/ea2474eb082631851f17aead640f2b0e2df3bf4d?width=555",
        alt: "Security app desktop",
        className: "w-[278px] h-[218px] rounded-t left-[140px] top-[40px]"
      }
    ]
  },
  {
    id: "solar-energy",
    title: "Solar energy",
    description: "Solar panels monitoring platform",
    images: [
      {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/213eec2b0445668468a7c4df60f40c9628747054?width=824",
        alt: "Solar monitoring platform",
        className: "w-[412px] h-[222px] rounded-tl left-[32px] top-[36px]"
      }
    ]
  },
  {
    id: "recycling",
    title: "Recycling",
    description: "Application for managing daily waste",
    images: [
      {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/81fdb5fab06a246e41fc89dfde0203228fc81b91?width=249",
        alt: "Recycling app mobile 1",
        className: "w-[125px] h-[196px] rounded-t left-[16px] top-[62px]"
      },
      {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/666f58a2d82174c071c40d2e1a115405ca23a497?width=249",
        alt: "Recycling app mobile 2",
        className: "w-[125px] h-[232px] rounded-t left-[160px] top-[26px]"
      },
      {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/c5b4cfa74d7ecf6606a10a1447e4f0a2dd094cde?width=249",
        alt: "Recycling app mobile 3",
        className: "w-[125px] h-[196px] rounded-t left-[303px] top-[62px]"
      }
    ]
  },
  {
    id: "recruitment-payroll",
    title: "Recruitment and payroll",
    description: "Human resources platform",
    images: [
      {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/6f63600c9fa5aecd4452f986fab1c3fc70fdcfeb?width=748",
        alt: "HR platform",
        className: "w-[374px] h-[234px] rounded-tl left-[70px] top-[24px]"
      }
    ]
  }
];

const tabs = [
  {
    id: "cases",
    label: "UX/UI and Product Design Cases",
    icon: (
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9993 26.968C14.1933 25.718 12.1103 24.926 9.93028 24.66C8.37728 24.341 6.79528 24.19 5.21028 24.209C4.99928 24.222 4.78828 24.19 4.59228 24.114C4.39528 24.037 4.21728 23.919 4.07128 23.767C3.92428 23.615 3.81328 23.433 3.74428 23.233C3.67528 23.034 3.65028 22.822 3.67128 22.612L3.67028 8.09203C3.67028 7.70603 3.82328 7.33703 4.09628 7.06403C4.36828 6.79103 4.73828 6.63803 5.12328 6.63803C6.73628 6.60303 8.34828 6.74403 9.93028 7.06003C12.1133 7.33503 14.1963 8.13703 15.9993 9.39803M15.9993 26.968V9.39803M15.9993 26.968C17.8003 25.697 19.8833 24.884 22.0693 24.601C23.6213 24.282 25.2043 24.131 26.7893 24.15C26.9943 24.163 27.2003 24.132 27.3923 24.059C27.5843 23.986 27.7593 23.873 27.9043 23.727C28.0503 23.582 28.1633 23.407 28.2363 23.215C28.3093 23.022 28.3403 22.817 28.3273 22.612V8.17803C28.3393 7.98003 28.3113 7.78203 28.2433 7.59603C28.1753 7.40903 28.0703 7.23903 27.9343 7.09503C27.7983 6.95003 27.6343 6.83503 27.4523 6.75703C27.2703 6.67903 27.0743 6.63803 26.8753 6.63803C25.2633 6.60303 23.6513 6.74403 22.0693 7.06003C19.8863 7.33503 17.8033 8.13703 15.9993 9.39803M7.49128 11.78H9.16128M7.49128 19.794H9.93728M7.70328 15.788H12.1703" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: "ui-design",
    label: "UI Design",
    icon: (
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.166 2.89152C7.337 2.96952 7.483 3.09352 7.586 3.25052C7.69 3.40752 7.747 3.59052 7.751 3.77852C7.779 5.01852 8.221 5.80153 8.741 6.60853L8.885 6.82853C9.375 7.57153 10.001 8.52153 10.001 9.80153C10.002 10.3795 9.877 10.9505 9.635 11.4755C9.393 12.0005 9.041 12.4665 8.601 12.8415C8.956 13.2085 9.216 13.6385 9.406 14.0805C9.913 15.2555 10.001 16.6825 10.001 17.8075C10.001 19.6515 9.713 22.7155 9.186 25.3305C8.923 26.6335 8.591 27.8805 8.18 28.8245C7.977 29.2925 7.73 29.7435 7.42 30.0935C7.116 30.4375 6.643 30.8015 6.004 30.8015C5.364 30.8015 4.891 30.4375 4.587 30.0935C4.278 29.7435 4.031 29.2935 3.827 28.8245C3.416 27.8815 3.082 26.6345 2.819 25.3305C2.291 22.7165 2.001 19.6515 2.001 17.8075C2.001 16.6815 2.091 15.2545 2.599 14.0785C2.789 13.6385 3.049 13.2095 3.404 12.8435C2.964 12.4675 2.611 12.0015 2.368 11.4765C2.126 10.9515 2 10.3795 2 9.80153C2 8.86653 2.118 7.87952 2.743 6.74152C3.348 5.63852 4.393 4.45853 6.111 3.03152C6.256 2.91152 6.431 2.83452 6.618 2.80952C6.804 2.78452 6.995 2.81352 7.166 2.89152ZM4.497 7.70153C4.084 8.45453 4.001 9.07852 4.001 9.80052C4.001 10.3305 4.212 10.8395 4.587 11.2145C4.962 11.5895 5.471 11.8005 6.001 11.8005C6.531 11.8005 7.04 11.5895 7.415 11.2145C7.79 10.8395 8.001 10.3305 8.001 9.80052C8.001 9.14252 7.705 8.68553 7.159 7.84253L7.062 7.69252C6.716 7.15852 6.337 6.53452 6.076 5.74452C5.277 6.52652 4.794 7.16153 4.497 7.70153ZM4.435 14.8715C4.099 15.6505 4 16.7265 4 17.8085C4 19.5085 4.274 22.4395 4.778 24.9365C5.032 26.1885 5.332 27.2755 5.659 28.0265C5.787 28.3195 5.904 28.5275 6.003 28.6665C6.138 28.4655 6.253 28.2505 6.345 28.0265C6.672 27.2765 6.972 26.1895 7.225 24.9365C7.727 22.4395 8 19.5085 8 17.8085C8 16.7245 7.903 15.6485 7.569 14.8735C7.408 14.5005 7.212 14.2435 6.988 14.0795C6.774 13.9235 6.472 13.8025 6.003 13.8025C5.534 13.8025 5.231 13.9225 5.016 14.0805C4.792 14.2455 4.595 14.5015 4.434 14.8745M10.984 7.48453C11.975 7.01153 13.062 6.77753 14.16 6.80253C15.257 6.82753 16.333 7.11053 17.301 7.62753C18.269 8.14553 19.102 8.88353 19.732 9.78253C20.362 10.6805 20.772 11.7145 20.929 12.8015H17.501C16.308 12.8015 15.163 13.2755 14.319 14.1195C13.476 14.9625 13.001 16.1075 13.001 17.3005V20.7305C12.448 20.6505 11.906 20.5045 11.388 20.2965C11.333 20.9825 11.263 21.6665 11.179 22.3495C11.771 22.5445 12.382 22.6765 13.001 22.7455V25.3015C13.001 26.4945 13.475 27.6395 14.319 28.4835C15.163 29.3275 16.308 29.8015 17.501 29.8015H25.501C26.695 29.8015 27.839 29.3275 28.683 28.4835C29.527 27.6395 30.001 26.4945 30.001 25.3015V17.3015C30.001 16.1075 29.527 14.9635 28.683 14.1195C27.839 13.2755 26.695 12.8015 25.501 12.8015H22.946C22.785 11.3605 22.279 9.97952 21.47 8.77653C20.661 7.57353 19.573 6.58353 18.299 5.89153C17.025 5.19953 15.603 4.82553 14.153 4.80053C12.704 4.77653 11.27 5.10252 9.973 5.75152L10 5.79352L10.136 5.99852C10.372 6.35152 10.706 6.85352 10.986 7.48152M25.5 14.8015C26.163 14.8015 26.799 15.0645 27.268 15.5335C27.737 16.0025 28 16.6385 28 17.3015V25.3015C28 25.9645 27.737 26.6005 27.268 27.0695C26.799 27.5385 26.163 27.8015 25.5 27.8015H17.5C16.837 27.8015 16.201 27.5385 15.732 27.0695C15.263 26.6005 15 25.9645 15 25.3015V22.7465C17.029 22.5195 18.92 21.6085 20.364 20.1655C21.807 18.7215 22.718 16.8305 22.945 14.8015H25.5ZM15 20.7315V17.3015C15 16.6385 15.263 16.0025 15.732 15.5335C16.201 15.0645 16.837 14.8015 17.5 14.8015H20.93C20.714 16.2975 20.02 17.6835 18.951 18.7525C17.882 19.8215 16.496 20.5155 15 20.7315Z" fill="currentColor"/>
      </svg>
    )
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: {
      duration: 0.5
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -50,
    transition: {
      duration: 0.5
    }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const slideInFromRight = {
  hidden: { 
    opacity: 0, 
    x: 50,
    transition: {
      duration: 0.5
    }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const galleryItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("cases");

  return (
    <div className="flex-1 ml-[242px] min-h-screen bg-white">
      <div className="flex justify-center pt-12">
        <motion.div 
          className="w-[920px] px-8 flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title Section */}
          <motion.div 
            className="flex justify-between items-center mb-6 flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.div 
              className="flex flex-col items-start gap-[15px]"
              variants={slideInFromLeft}
            >
              <h1 className="text-[32px] font-semibold leading-[38.4px] text-[#252525]">
                Welcome to my Portfolio! ✍️
              </h1>
              <p className="text-[24px] leading-[28.8px] text-[#414141]">
                Take a look at my recents jobs.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col justify-center items-end gap-2"
              variants={slideInFromRight}
            >
              {/* Contact Link */}
              <a href="#" className="flex items-center gap-1 py-1 group">
                <span className="text-[16px] leading-[19.2px] text-[#0066CC] group-hover:underline">
                  Contact me!
                </span>
              </a>

              {/* Available Status */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-[30px] bg-[rgba(84,202,177,0.16)]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#008A6C]"></div>
                <span className="text-[16px] leading-[19.2px] text-[#008A6C]">
                  Available for work
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Tabs */}
          <motion.div 
            className="flex items-start gap-4 mb-6 border-b border-gray-200"
            variants={itemVariants}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-[10px] px-4 py-2 transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-[#252525] border-b-2 border-[#252525]'
                    : 'text-[#777777] hover:text-[#252525]'
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {tab.icon}
                </div>
                <span className="text-[16px] font-semibold leading-6 font-inter">
                  {tab.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {activeTab === "cases" && (
            <motion.div 
              className="flex flex-col gap-12 pb-20"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* First Row */}
              <motion.div
                className="flex gap-8"
                variants={itemVariants}
              >
                <motion.div variants={cardVariants} className="w-full max-w-[444px] grow-0">
                  <ProjectCard {...projectsData[0]} buttonType="available" />
                </motion.div>
                <motion.div variants={cardVariants} className="w-full max-w-[444px] grow-0">
                  <ProjectCard {...projectsData[1]} buttonType="available" />
                </motion.div>
              </motion.div>
              
              {/* Second Row */}
              <motion.div
                className="flex gap-8 justify-center"
                variants={itemVariants}
              >
                <motion.div variants={cardVariants} className="w-full">
                  <ProjectCard {...projectsData[2]} buttonType="available" />
                </motion.div>
                <motion.div variants={cardVariants} className="w-full">
                  <ProjectCard {...projectsData[3]} buttonType="in-progress" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "ui-design" && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {/* Full Width Image 1 - Brown Background */}
              <motion.div 
                className="flex flex-col justify-start w-full items-center px-6" 
                style={{ backgroundColor: '#8b4b23' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img 
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F668fea8171d441e58a2dcc34f7cf3bd2?width=800"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '1.41' }}
                  />
                </div>
              </motion.div>

              {/* Full Width Image 2 - Gray Background */}
              <motion.div 
                className="flex flex-col justify-start w-full items-center px-6" 
                style={{ backgroundColor: '#e8e8e8' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img 
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F48535ad1024c4dfb992875ea080ef5f8?width=800"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '1.41' }}
                  />
                </div>
              </motion.div>

              {/* Two Column Layout 1 */}
              <motion.div 
                className="flex flex-col relative mt-5"
                variants={galleryItemVariants}
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: '#e8e8e8' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img 
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2Ffd883a9ab01045adb095c5c9bdf7a764?width=400"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6 bg-black">
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img 
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F9e9bfc15f789483b9e82821b4df7f23c?width=400"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Two Column Layout - Black/Black */}
              <motion.div
                className="flex flex-col relative mt-5"
                variants={galleryItemVariants}
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6 bg-black">
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F4f00f65e72134114a8b1734a5c938fc0"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6 bg-black">
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F94e64b67206e496f9498a2cc0f0174f8"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Full Width Image - Purple Background */}
              <motion.div
                className="flex flex-col justify-start w-full items-center px-6"
                style={{ backgroundColor: 'rgba(63, 0, 95, 1)' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F48c75a6dff6c40cfa933c557432afbd2"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '1.41' }}
                  />
                </div>
              </motion.div>

              {/* Continue with more gallery items */}
              <motion.div 
                className="flex flex-col justify-start w-full items-center px-6" 
                style={{ backgroundColor: 'rgba(63, 0, 95, 1)' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img 
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F8eb9dd6a16d7465aacde561461f8b139?width=800"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '1.41' }}
                  />
                </div>
              </motion.div>

              {/* Final Full Width Image - Light Green Background */}
              <motion.div 
                className="flex flex-col justify-start w-full items-center px-6" 
                style={{ backgroundColor: 'rgba(234, 240, 235, 1)' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img 
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F2cd9610f9f6f43e397e8a48867d1430d?width=800"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '2' }}
                  />
                </div>
              </motion.div>

              {/* Two Column - Teal (208,224,224) */}
              <motion.div
                className="flex flex-col relative mt-5"
                variants={galleryItemVariants}
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: 'rgba(208, 224, 224, 1)' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2Fda63f7e5f77d4683a53ad923fe40a65f"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: 'rgba(208, 224, 224, 1)' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2Fd641c3c690ae444e99e06be5a00986ce"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Two Column - Teal (again) */}
              <motion.div
                className="flex flex-col relative mt-5"
                variants={galleryItemVariants}
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: 'rgba(208, 224, 224, 1)' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2Ffa749a59e7604a7a951ee74121d9a939"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: 'rgba(208, 224, 224, 1)' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2Ff56748a826ec4253a684316b9647d2af"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Two Column - Gray (206,206,206) */}
              <motion.div
                className="flex flex-col relative mt-5"
                variants={galleryItemVariants}
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: 'rgba(206, 206, 206, 1)' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F978092a9425642e6ae4655a2494ce2ba"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: 'rgba(206, 206, 206, 1)' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F0e87d73bc14341678059d1262d9738b7"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Full Width - Black */}
              <motion.div
                className="flex flex-col justify-start w-full items-center px-6"
                style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F94704a7036d74b539104bcfe9a0dce74"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '1.41' }}
                  />
                </div>
              </motion.div>

              {/* Full Width - Blue */}
              <motion.div
                className="flex flex-col justify-start w-full items-center px-6"
                style={{ backgroundColor: '#23628A' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2Faa3b0612f58d410488205da145e03f91"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '1.41' }}
                  />
                </div>
              </motion.div>

              {/* Full Width - Blue 2 */}
              <motion.div
                className="flex flex-col justify-start w-full items-center px-6"
                style={{ backgroundColor: '#23628A' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F35a5da573d53437ebfe8d6baeb154fdd"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '1.41' }}
                  />
                </div>
              </motion.div>

              {/* Full Width - Blue 3 */}
              <motion.div
                className="flex flex-col justify-start w-full items-center px-6"
                style={{ backgroundColor: '#23628A' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F4bd4c58a91774be68932c6f1a5c87097"
                    className="w-full h-auto object-cover object-center overflow-hidden"
                    style={{ aspectRatio: '1.41' }}
                  />
                </div>
              </motion.div>

              {/* Two Column - Blue */}
              <motion.div
                className="flex flex-col relative mt-5"
                variants={galleryItemVariants}
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: '#23628A' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2Ffe526e53d53f4405b217419e6fa3b7d7"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: '#23628A' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F05e7b291ddc34de0aee7ec174d503c73"
                          className="w-full h-auto object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Two Column - Mixed Blue/Gray with explicit heights */}
              <motion.div
                className="flex flex-col relative mt-5"
                variants={galleryItemVariants}
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: '#23628A' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F04ebe4a23f0c4525a2dbbce8954a5695"
                          className="w-full object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47', height: '572.3px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: '#e6e6e6' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F5c7c3afbdf60475dad5a042b112eba78"
                          className="w-full object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47', height: '571.3px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Two Column - Gray with explicit heights */}
              <motion.div
                className="flex flex-col relative mt-5"
                variants={galleryItemVariants}
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-1/2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: '#e6e6e6' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F5f4ca463aebc47a7887aaae4cf0ae37e"
                          className="w-full object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47', height: '534px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col justify-start w-full items-center px-6" style={{ backgroundColor: '#e6e6e6' }}>
                      <div className="flex flex-row relative mt-5 w-full pb-8 justify-center items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2Fbcd95ce149ba4b3eae3fed0da050d28f"
                          className="w-full object-cover object-center overflow-hidden max-w-[300px]"
                          style={{ aspectRatio: '0.47', height: '534px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Full Width - Dark Green with fixed height */}
              <motion.div
                className="flex flex-col justify-start w-full items-center px-6"
                style={{ backgroundColor: 'rgba(18, 100, 80, 1)' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F12dfd70208bd4afc87e5ca1606d779b1"
                    className="w-full object-cover object-center overflow-hidden"
                    style={{ height: '454px' }}
                  />
                </div>
              </motion.div>

              {/* Full Width - Dark Green 2 with fixed height */}
              <motion.div
                className="flex flex-col justify-start w-full items-center px-6"
                style={{ backgroundColor: 'rgba(18, 100, 80, 1)' }}
                variants={galleryItemVariants}
              >
                <div className="flex flex-col relative mt-5 h-auto w-full pb-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F7f4c07f0a70b49a4bdb25298a14385d9%2F2cd9610f9f6f43e397e8a48867d1430d"
                    className="w-full object-cover object-center overflow-hidden"
                    style={{ height: '402px' }}
                  />
                </div>
              </motion.div>

            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
