import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
                  Contact me!
                </h1>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-start gap-[72px] w-full">
              {/* Contact Cards */}
              <div className="flex flex-col items-center gap-12 w-full">
                <div className="flex justify-between items-center w-full max-w-[920px] flex-wrap gap-8">
                  {/* LinkedIn Card */}
                  <div className="flex w-[240px] flex-col justify-center items-start gap-6 bg-white">
                    {/* LinkedIn Icon */}
                    <div className="w-10 h-10">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1815_53330)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.444 40H35.556C36.7346 40 37.865 39.5318 38.6984 38.6984C39.5318 37.865 40 36.7346 40 35.556V4.444C40 3.26538 39.5318 2.13503 38.6984 1.30162C37.865 0.468206 36.7346 0 35.556 0L4.444 0C3.26538 0 2.13503 0.468206 1.30162 1.30162C0.468206 2.13503 0 3.26538 0 4.444L0 35.556C0 36.7346 0.468206 37.865 1.30162 38.6984C2.13503 39.5318 3.26538 40 4.444 40Z" fill="#007EBB"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M34.4437 34.4427H28.5077V24.3327C28.5077 21.5617 27.4547 20.0127 25.2607 20.0127C22.8737 20.0127 21.6267 21.6247 21.6267 24.3327V34.4427H15.9067V15.1837H21.6267V17.7777C21.6267 17.7777 23.3467 14.5957 27.4337 14.5957C31.5187 14.5957 34.4437 17.0897 34.4437 22.2497V34.4427ZM9.08169 12.6627C7.13369 12.6627 5.55469 11.0707 5.55469 9.10769C5.55469 7.14569 7.13369 5.55469 9.08169 5.55469C11.0307 5.55469 12.6087 7.14469 12.6087 9.10769C12.6087 11.0707 11.0307 12.6627 9.08169 12.6627ZM6.12869 34.4417H12.0937V15.1837H6.12869V34.4437V34.4417Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1815_53330">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[20px] font-medium leading-[24px] text-[#252525]">
                        /herick-morais
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#404040]">
                        Linkedin
                      </p>
                    </div>

                    <a 
                      href="https://linkedin.com/in/herick-morais" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex px-4 py-3 flex-col justify-center items-center rounded-lg bg-[#007EBB] hover:bg-[#005a85] transition-colors"
                    >
                      <span className="text-white text-[16px] font-semibold leading-[19.2px]">
                        Check my profile
                      </span>
                    </a>
                  </div>

                  {/* WhatsApp Card */}
                  <div className="flex w-[240px] flex-col justify-center items-start gap-6 bg-white">
                    {/* WhatsApp Icon */}
                    <div className="w-10 h-10">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1815_53352)">
                          <path d="M32 0H8C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8L0 32C0 34.1217 0.842855 36.1566 2.34315 37.6569C3.84344 39.1571 5.87827 40 8 40H32C34.1217 40 36.1566 39.1571 37.6569 37.6569C39.1571 36.1566 40 34.1217 40 32V8C40 5.87827 39.1571 3.84344 37.6569 2.34315C36.1566 0.842855 34.1217 0 32 0Z" fill="#1BD741"/>
                          <path d="M6.01562 34.0021L7.97463 27.0431C6.71289 24.8983 6.04886 22.4545 6.05162 19.9661C6.05162 12.2631 12.3186 5.99609 20.0216 5.99609C27.7246 5.99609 33.9916 12.2631 33.9916 19.9661C33.9916 27.6691 27.7246 33.9361 20.0216 33.9361C17.6216 33.9361 15.2716 33.3221 13.1916 32.1551L6.01562 34.0021ZM13.5586 29.6131L13.9866 29.8751C15.8045 30.9829 17.8927 31.568 20.0216 31.5661C26.4176 31.5661 31.6216 26.3621 31.6216 19.9661C31.6216 13.5691 26.4186 8.36609 20.0216 8.36609C13.6246 8.36609 8.42163 13.5691 8.42163 19.9661C8.42163 22.1951 9.05462 24.3591 10.2526 26.2251L10.5406 26.6731L9.41263 30.6811L13.5586 29.6131Z" fill="white"/>
                          <path d="M16.0913 13.4658L15.1853 13.4158C14.9005 13.3999 14.6206 13.4956 14.4053 13.6828C13.9663 14.0638 13.2633 14.8028 13.0483 15.7628C12.7263 17.1968 13.2233 18.9528 14.5103 20.7078C15.7983 22.4628 18.1973 25.2718 22.4403 26.4718C23.8063 26.8578 24.8823 26.5978 25.7113 26.0668C26.0359 25.8566 26.3156 25.5842 26.5343 25.2653C26.753 24.9464 26.9062 24.5873 26.9853 24.2088L27.1293 23.5328C27.1516 23.4285 27.1379 23.3198 27.0903 23.2244C27.0427 23.129 26.964 23.0526 26.8673 23.0078L23.8033 21.5958C23.7066 21.5512 23.5977 21.5408 23.4943 21.5662C23.3909 21.5917 23.2993 21.6514 23.2343 21.7358L22.0323 23.2948C21.9881 23.3523 21.9269 23.3944 21.8574 23.415C21.7879 23.4357 21.7137 23.4338 21.6453 23.4098C20.8213 23.1198 18.0623 21.9648 16.5493 19.0498C16.5166 18.9881 16.5033 18.918 16.5109 18.8487C16.5186 18.7793 16.5469 18.7138 16.5923 18.6608L17.7423 17.3308C17.7996 17.2642 17.837 17.1829 17.8505 17.0961C17.8639 17.0093 17.8528 16.9205 17.8183 16.8398L16.4983 13.7498C16.4637 13.6692 16.4073 13.5999 16.3353 13.5497C16.2634 13.4995 16.1789 13.4704 16.0913 13.4658Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1815_53352">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[20px] font-medium leading-[24px] text-[#252525]">
                        Herick Morais
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#404040]">
                        Whatsapp
                      </p>
                    </div>

                    <a 
                      href="https://wa.me/your-whatsapp-number" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex px-4 py-3 flex-col justify-center items-center rounded-lg bg-[#3BAB51] hover:bg-[#2e8a3e] transition-colors"
                    >
                      <span className="text-white text-[16px] font-semibold leading-[19.2px]">
                        Send me a message
                      </span>
                    </a>
                  </div>

                  {/* Resume Card */}
                  <div className="flex w-[240px] flex-col justify-center items-start gap-6 bg-white">
                    {/* Resume Icon */}
                    <div className="w-10 h-10">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1815_53373)">
                          <path d="M32 0H8C3.58172 0 0 3.58172 0 8V32C0 36.4183 3.58172 40 8 40H32C36.4183 40 40 36.4183 40 32V8C40 3.58172 36.4183 0 32 0Z" fill="white"/>
                          <path d="M8.79744 29.5216H7.39844H8.79844H8.79744ZM10.1984 14.4016C10.1984 14.0303 10.0509 13.6742 9.78839 13.4116C9.52584 13.1491 9.16974 13.0016 8.79844 13.0016C8.42714 13.0016 8.07104 13.1491 7.80849 13.4116C7.54594 13.6742 7.39844 14.0303 7.39844 14.4016H10.1984ZM17.1984 4.60156C16.8271 4.60156 16.471 4.74906 16.2085 5.01161C15.9459 5.27417 15.7984 5.63026 15.7984 6.00156C15.7984 6.37287 15.9459 6.72896 16.2085 6.99151C16.471 7.25407 16.8271 7.40156 17.1984 7.40156V4.60156ZM14.3984 18.6016C14.0271 18.6016 13.671 18.7491 13.4085 19.0116C13.1459 19.2742 12.9984 19.6303 12.9984 20.0016C12.9984 20.3729 13.1459 20.729 13.4085 20.9915C13.671 21.2541 14.0271 21.4016 14.3984 21.4016V18.6016ZM25.5984 21.4016C25.9697 21.4016 26.3258 21.2541 26.5884 20.9915C26.8509 20.729 26.9984 20.3729 26.9984 20.0016C26.9984 19.6303 26.8509 19.2742 26.5884 19.0116C26.3258 18.7491 25.9697 18.6016 25.5984 18.6016V21.4016ZM22.7984 13.0016C22.4271 13.0016 22.071 13.1491 21.8085 13.4116C21.5459 13.6742 21.3984 14.0303 21.3984 14.4016C21.3984 14.7729 21.5459 15.129 21.8085 15.3915C22.071 15.6541 22.4271 15.8016 22.7984 15.8016V13.0016ZM25.5984 15.8016C25.9697 15.8016 26.3258 15.6541 26.5884 15.3915C26.8509 15.129 26.9984 14.7729 26.9984 14.4016C26.9984 14.0303 26.8509 13.6742 26.5884 13.4116C26.3258 13.1491 25.9697 13.0016 25.5984 13.0016V15.8016ZM14.3984 24.2016C14.0271 24.2016 13.671 24.3491 13.4085 24.6116C13.1459 24.8742 12.9984 25.2303 12.9984 25.6016C12.9984 25.9729 13.1459 26.329 13.4085 26.5915C13.671 26.8541 14.0271 27.0016 14.3984 27.0016V24.2016ZM25.5984 27.0016C25.9697 27.0016 26.3258 26.8541 26.5884 26.5915C26.8509 26.329 26.9984 25.9729 26.9984 25.6016C26.9984 25.2303 26.8509 24.8742 26.5884 24.6116C26.3258 24.3491 25.9697 24.2016 25.5984 24.2016V27.0016ZM13.2784 35.4016H26.7184V32.6016H13.2784V35.4016ZM32.5984 29.5216V10.4816H29.7984V29.5216H32.5984ZM32.5984 10.4816C32.5984 9.72056 32.5984 9.06556 32.5554 8.52856C32.5104 7.97456 32.4104 7.42456 32.1404 6.89456L29.6454 8.16556C29.6814 8.23556 29.7334 8.37556 29.7654 8.75656C29.7974 9.15356 29.7984 9.67456 29.7984 10.4816H32.5984ZM26.7184 7.40156C27.5254 7.40156 28.0464 7.40256 28.4434 7.43556C28.8234 7.46556 28.9644 7.51856 29.0334 7.55456L30.3054 5.05956C29.7754 4.78956 29.2254 4.68956 28.6714 4.64456C28.1344 4.60056 27.4794 4.60156 26.7184 4.60156V7.40156ZM32.1404 6.89456C31.7378 6.10453 31.0955 5.46219 30.3054 5.05956L29.0334 7.55456C29.2968 7.68854 29.511 7.90242 29.6454 8.16556L32.1404 6.89456ZM26.7184 35.4016C27.4784 35.4016 28.1344 35.4026 28.6714 35.3586C29.2244 35.3136 29.7754 35.2136 30.3054 34.9436L29.0334 32.4486C28.9644 32.4846 28.8234 32.5366 28.4434 32.5686C28.0464 32.6006 27.5254 32.6016 26.7184 32.6016V35.4016ZM29.7984 29.5216C29.7984 30.3286 29.7974 30.8496 29.7644 31.2466C29.7344 31.6266 29.6814 31.7676 29.6454 31.8366L32.1404 33.1086C32.4104 32.5786 32.5104 32.0286 32.5554 31.4746C32.5994 30.9376 32.5984 30.2826 32.5984 29.5216H29.7984ZM30.3054 34.9436C31.0955 34.5409 31.7378 33.8986 32.1404 33.1086L29.6454 31.8376C29.511 32.1007 29.2968 32.3146 29.0334 32.4486L30.3054 34.9436ZM13.2784 32.6016C12.4714 32.6016 11.9494 32.6006 11.5534 32.5676C11.1734 32.5376 11.0314 32.4846 10.9634 32.4486L9.69144 34.9436C10.2214 35.2136 10.7714 35.3136 11.3254 35.3586C11.8624 35.4026 12.5174 35.4016 13.2784 35.4016V32.6016ZM7.39844 29.5216C7.39844 30.2826 7.39744 30.9376 7.44144 31.4746C7.48644 32.0276 7.58644 32.5786 7.85644 33.1086L10.3504 31.8376C10.3154 31.7676 10.2624 31.6276 10.2314 31.2466C10.1994 30.8496 10.1984 30.3286 10.1984 29.5216H7.39844ZM10.9624 32.4486C10.6991 32.3146 10.4848 32.1007 10.3504 31.8376L7.85644 33.1086C8.25889 33.899 8.90125 34.5407 9.69144 34.9436L10.9624 32.4486ZM7.39844 14.4016V29.5216H10.1984V14.4016H7.39844ZM26.7184 4.60156H17.1984V7.40156H26.7184V4.60156ZM10.0274 15.1526L17.9494 7.23056L15.9694 5.25056L8.04744 13.1726L10.0274 15.1526ZM9.13644 15.8016H15.7984V13.0016H9.13644V15.8016ZM18.5984 13.0016V6.33956H15.7984V13.0016H18.5984ZM15.7984 15.8016C16.541 15.8016 17.2532 15.5066 17.7783 14.9815C18.3034 14.4564 18.5984 13.7442 18.5984 13.0016H15.7984V15.8016ZM17.9494 7.23056C17.1564 8.02456 15.7984 7.46256 15.7984 6.33956H18.5984C18.5984 4.96756 16.9404 4.27956 15.9694 5.25056L17.9494 7.23056ZM8.04844 13.1726C7.07844 14.1426 7.76544 15.8016 9.13744 15.8016V13.0016C10.2594 13.0016 10.8214 14.3586 10.0274 15.1526L8.04744 13.1726H8.04844ZM14.3984 21.4016H25.5984V18.6016H14.3984V21.4016ZM22.7984 15.8016H25.5984V13.0016H22.7984V15.8016ZM14.3984 27.0016H25.5984V24.2016H14.3984V27.0016Z" fill="#252525"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1815_53373">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-[20px] font-medium leading-[24px] text-[#252525]">
                        Herick Morais
                      </h3>
                      <p className="text-[16px] leading-[19.2px] text-[#404040]">
                        Resume
                      </p>
                    </div>

                    <a 
                      href="/resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex px-4 py-3 flex-col justify-center items-center rounded-lg bg-[#252525] hover:bg-[#1a1a1a] transition-colors"
                    >
                      <span className="text-white text-[16px] font-semibold leading-[19.2px]">
                        See my resume
                      </span>
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="flex p-5 flex-col items-start gap-6 rounded-lg border border-[#DFDFDF] w-full">
                  {/* Form Header */}
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-[20px] font-medium leading-[24px] text-[#252525]">
                      Send me a message
                    </h2>
                    <span className="text-[20px] leading-[24px] text-[#252525]">
                      herickmoraisdesign@gmail.com
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full space-y-6">
                    {/* Name and Email Row */}
                    <div className="flex justify-center items-center gap-6 w-full">
                      {/* Name Field */}
                      <div className="flex flex-col items-start gap-[10px] flex-1">
                        <label className="text-[#414141] font-medium text-[12px] leading-[14.4px]">
                          Name
                        </label>
                        <div className="flex h-10 flex-col justify-center items-start rounded-[10px] bg-[rgba(187,187,187,0.15)] w-full relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name.."
                            className="flex px-3 justify-center items-start flex-1 w-full bg-transparent text-[14px] leading-normal text-[#252525] placeholder-[#999] outline-none border border-[rgba(136,136,136,0.10)] rounded-[10px]"
                            required
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="flex flex-col items-start gap-[10px] flex-1">
                        <label className="text-[#414141] font-medium text-[12px] leading-[14.4px]">
                          Email
                        </label>
                        <div className="flex h-10 flex-col justify-center items-start rounded-[10px] bg-[rgba(187,187,187,0.15)] w-full relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="flex px-3 justify-center items-start flex-1 w-full bg-transparent text-[14px] leading-normal text-[#252525] placeholder-[#999] outline-none border border-[rgba(136,136,136,0.10)] rounded-[10px]"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col items-start gap-[10px] w-full">
                      <label className="text-[#414141] font-medium text-[12px] leading-[14.4px]">
                        Message
                      </label>
                      <div className="flex min-h-[100px] flex-col items-start rounded-[10px] bg-[rgba(187,187,187,0.15)] w-full relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Insert your message.."
                          rows={5}
                          className="w-full min-h-[100px] px-3 py-3 bg-transparent text-[14px] leading-[16.8px] text-[#252525] placeholder-[#999] outline-none border border-[rgba(136,136,136,0.10)] rounded-[10px] resize-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex h-10 flex-col justify-center items-start w-full">
                      <button
                        type="submit"
                        className="flex py-[10.59px] px-[422.66px] justify-center items-center flex-1 rounded-[10px] bg-[#252525] hover:bg-[#1a1a1a] transition-colors w-full"
                      >
                        <span className="text-white font-semibold text-[14px] leading-[16.8px]">
                          Send
                        </span>
                      </button>
                    </div>
                  </form>
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
