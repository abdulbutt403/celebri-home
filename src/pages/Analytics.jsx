// import React, { useEffect, useRef, useState } from "react";
// import AdminHeader from "../components/Admin/Header";
// import useResponsive from "../Hooks/responsive";
// import { DatePickIcon, TryFreeIcon, WhatIcon } from "../svgs";
// import axios from "axios";
// import { baseUrl } from "../constants";
// import jwtDecode from "jwt-decode";
// import { LoaderIcon } from "react-hot-toast";

// export default function Analytics() {
//   const token = localStorage.getItem("token");

//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   if (!token) {
//     window.location.href = "/login";
//   }

//   const userData = token ? jwtDecode(token) : {};

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const fetchUser = async () => {
//     try {
//       setIsLoading(true);
//       const userId = userData._id;
//       const response = await axios.get(`${baseUrl}/users/${userId}`);

//       // Set the user data in the state
//       const user = response.data.user;

//       setUser(user);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//       // Handle errors appropriately
//     }
//   };

//   return (
//     <div className="admin-panel">
//       <AdminHeader />
//       <main>
//         <div
//           style={{
//             paddingTop: 80,
//           }}
//         >
//           <LifetimeAnalytics user={user} isLoading={isLoading} />
//           <div
//             style={{
//               width: 640,
//               margin: "auto",
//               marginTop: 30,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <DateRangePicker />
//             <Banner />
//             <Activity />
//             {user && user.links && user.links?.length && (
//               <Performance links={user.links} />
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// const LifetimeAnalytics = ({ user, isLoading }) => {
//   return (
//     <div
//       data-static-el-id="lifetime-analytics"
//       className="sc-hJxCPi iXxaGy fFGAIg analytic-count-wrap md:rounded"
//     >
//       <p
//         className="sc-dwcuIR lbiOsr analytic-count-text jktQCG"
//         style={{ fontWeight: 600 }}
//       >
//         Lifetime Analytics
//       </p>
//       <div className=" sc-JAcuL diyeLd analytic-grid">
//         <AnalyticsBox
//           isLoading={isLoading}
//           title="Views"
//           count={user.views ? user.views : 0}
//           color={"rgb(0, 215, 117)"}
//         />
//         <AnalyticsBox
//           isLoading={isLoading}
//           title="Clicks"
//           count={user.clicks ? user.clicks : 0}
//           color={"rgb(124, 65, 255)"}
//         />
//         <AnalyticsBox
//           isLoading={isLoading}
//           title="CTR"
//           count={user.clicks && user.views ? `${((user.clicks / user.views) * 100).toFixed(2)} %` : 'N/A'}
//           color={"rgb(0, 182, 255)"}
//         />
//         <AnalyticsBox
//           isLoading={isLoading}
//           title="Revenue"
//           count="-"
//           color={"rgb(255, 124, 234)"}
//         />
//         <AnalyticsBox
//           isLoading={isLoading}
//           title="Subscribers"
//           count="0"
//           color={"orange"}
//         />
//       </div>
//     </div>
//   );
// };

// const AnalyticsBox = ({ isLoading, title, count, color }) => {
//   return (
//     <div className="iXxaGy fFGAIg analytic-box">
//       <div className="iXxaGy fFGAIg analytic-title">
//         <div style={{ backgroundColor: color }} className="esbyIi"></div>
//         <p
//           style={{ fontSize: 14, lineHeight: "20px", color: "rgba(0,0,0,0.6)" }}
//         >
//           {title}:
//         </p>
//       </div>

//       <p className=" analytic-count-text analytic-count">
//         {isLoading ? (
//           <div style={{ padding: 4 }}>
//             <LoaderIcon />
//           </div>
//         ) : (
//           count
//         )}
//       </p> 
//     </div>
//   );
// };

// const DateRangePicker = () => {
//   // Create a ref for the input element
//   const inputRef = useRef(null);

//   // Handle the click on the date-pick-wrap div
//   const handleDatePickWrapClick = (event) => {
//     event.stopPropagation();
//     if (inputRef.current) {
//       inputRef.current.click();
//     }
//   };

//   return (
//     <div
//       data-static-el-id="analytics-date-range-picker"
//       className="date-pick-wrap"
//       onClick={handleDatePickWrapClick}
//     >
//       <DatePickIcon />
//       {/* Attach the ref to the input element */}
//       <input ref={inputRef} className="date-input" type="date" />
//     </div>
//   );
// };

// const Banner = () => {
//   return (
//     <div className="section content-panel">
//       <div
//         className="relative flex max-w-[640px] rounded-lg bg-chartreuse px-8 pt-8"
//         style={{
//           backgroundColor: "rgb(80 34 116)",
//           borderRadius: "22px",
//           marginTop: 49,
//         }}
//       >
//         <div>
//           <h2
//             className="text-white text-md font-semibold leading-heading mb-2.5 !text-[24px] font-extrabold !text-forest"
//             style={{
//               color: "#fff",
//               fontSize: "24px",
//               fontWeight: "800",
//             }}
//           >
//             Unlock powerful <br /> insights
//           </h2>
//           <div className="flex-1" style={{ maxWidth: 279 }}>
//             <p
//               className="text-white text-md leading-5 mb-6 !text-[14px] !text-forest"
//               style={{
//                 color: "#fff",
//                 fontSize: "14px",
//                 marginBottom: "24px",
//               }}
//             >
//               Find out how your Linktree is <br /> performing with a Pro 7-day
//               free trial.
//               <br /> Cancel anytime.
//             </p>
//             <ul className="leading-5 mb-6 space-y-2">
//               <li
//                 className="flex items-start !text-forest"
//                 data-testid="ListItem"
//                 style={{ color: "#fff" }}
//               >
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2.5 mt-1 min-w-[12px] flex-shrink-0 "
//                   role="img"
//                   aria-hidden="false"
//                   aria-labelledby="ltclid33_title "
//                 >
//                   <title id="ltclid33_title">Check</title>
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M14.7016 2.5097L14.3893 2.90014L6.38929 12.9001L5.62515 12.92L1.62515 8.41997L1.29297 8.04627L2.04038 7.38191L2.37256 7.75561L5.97873 11.8126L13.6084 2.27544L13.9208 1.88501L14.7016 2.5097Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//                 <p
//                   className="text-white text-md !text-[14px] !text-forest"
//                   style={{ fontSize: "14px" }}
//                 >
//                   Showcase your brand with custom background images and videos
//                 </p>
//               </li>
//               <li
//                 className="flex items-start !text-forest"
//                 data-testid="ListItem"
//                 style={{ color: "#fff" }}
//               >
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2.5 mt-1 min-w-[12px] flex-shrink-0 "
//                   role="img"
//                   aria-hidden="false"
//                   aria-labelledby="ltclid34_title "
//                 >
//                   <title id="ltclid34_title">Check</title>
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M14.7016 2.5097L14.3893 2.90014L6.38929 12.9001L5.62515 12.92L1.62515 8.41997L1.29297 8.04627L2.04038 7.38191L2.37256 7.75561L5.97873 11.8126L13.6084 2.27544L13.9208 1.88501L14.7016 2.5097Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//                 <p
//                   className="text-white text-md !text-[14px] !text-forest"
//                   style={{ fontSize: "14px" }}
//                 >
//                   Pick your perfect font, theme and buttons
//                 </p>
//               </li>
//               <li
//                 className="flex items-start !text-forest"
//                 data-testid="ListItem"
//                 style={{ color: "#fff" }}
//               >
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2.5 mt-1 min-w-[12px] flex-shrink-0 "
//                   role="img"
//                   aria-hidden="false"
//                   aria-labelledby="ltclid35_title "
//                 >
//                   <title id="ltclid35_title">Check</title>
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M14.7016 2.5097L14.3893 2.90014L6.38929 12.9001L5.62515 12.92L1.62515 8.41997L1.29297 8.04627L2.04038 7.38191L2.37256 7.75561L5.97873 11.8126L13.6084 2.27544L13.9208 1.88501L14.7016 2.5097Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//                 <p
//                   className="text-white text-md !text-[14px] !text-forest"
//                   style={{ fontSize: "14px" }}
//                 >
//                   Remove the Linktree logo
//                 </p>
//               </li>
//             </ul>
//             <span
//               className="rounded-xl bg-black flex"
//               style={{ borderRadius: "9999px", overflow: "hidden" }}
//             >
//               <div className="w-full">
//                 <button
//                   className="relative transition duration-75 ease-out w-full h-2xl px-md rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-primary text-white !bg-forest font-semibold !text-chartreuse hover:!bg-forest/80 hover:bg-primary-alt active:bg-primary-alt"
//                   type="button"
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     height: 50,
//                     backgroundColor: "rgb(215 23 231 )",
//                     color: "white",
//                     fontSize: "16px",
//                     fontWeight: "600",
//                     borderRadius: "9999px",
//                     outline: "none",
//                     transition: "all 0.3s ease-out",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {/* <span className="flex items-center justify-center">
//                     <span className="block pr-xs">
//                       <TryFreeIcon />
//                     </span>
//                     <span
//                       className="block font-semibold text-md"
//                       style={{ marginLeft: 10 }}
//                     >
//                       Try Pro for free
//                     </span>
//                   </span> */}
//                 </button>
//               </div>
//             </span>
//             <p
//               className="text-white text-xs mt-2 pb-6 text-center !text-[10px] !text-forest"
//               style={{ fontSize: "10px" }}
//             >
//               $9 /month after
//             </p>
//           </div>
//         </div>
//         <div className="-ml-6 -mr-4 pb-4 hidden flex-1 items-center sm:flex">
//           <img
//             src="https://assets.production.linktr.ee/a2a25dcabceec65b813dd7869a31bc7ed7e5ca87/images/analytics-upgrade-banner.png"
//             alt="Upgrade Banner"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Activity = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         textAlign: "left",
//         marginTop: 50,
//         width: "100%",
//       }}
//     >
//       <div className="flex h-auto min-w-max items-center">
//         <h2 className="leading-heading mr-1.5 text-lg font-semibold">Activity</h2>
//         <WhatIcon />
//       </div>
//       <div className="sc-fodVxV sc-fFubgz gndtOw bjNVbG sc-fodVxV gndtOw empty">
//         <div className="sc-gsTCUz no-activity">
//           <div className="sc-gsTCUz sc-dlfnbm dUxpcY no-activity-col">
//             <img
//               src="https://assets.production.linktr.ee/a2a25dcabceec65b813dd7869a31bc7ed7e5ca87/images/analytics-no-data.png"
//               alt="There is no data available"
//               filter="none"
//               className="sc-fubCfw no-activity-img"
//             />
//             <p className="sc-bZSQDF no-activity-txt">No activity data</p>
//             <p className="sc-iUuytg jRmxBP">
//               No activity in selected time range.
//               <br />
//               Learn about{" "}
//               <a
//                 href="https://linktr.ee/help/linktree-ff524ba1864c/en/articles/5434136-sharing-your-linktree"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 sharing your Linktree
//               </a>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Performance = ({ links }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         textAlign: "left",
//         marginTop: 50,
//         marginBottom: 50,
//         width: "100%",
//       }}
//     >
//       <div className="flex h-auto min-w-max items-center">
//         <h2 className="leading-heading mr-1.5 text-lg font-semibold">
//           Top Performing Links
//         </h2>
//         <WhatIcon />
//       </div>
//       <div className="sc-fodVxV sc-fFubgz gndtOw bjNVbG sc-fodVxV gndtOw empty" style={{justifyContent:'start', padding: '12px 15px'}}>
//       <p style={{textAlign: 'right', color: 'gray', width: '100%'}}>clicks</p>
//         {links.map((x, i) => (
//           <LinkBox key={i} title={x.title} count={x.click || 0} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const LinkBox = ({ title, count }) => {
//   return (
//     <div className="sc-ljRboo sc-jmhFOf performance-txt fFGAIg">
//       <p style={{fontSize: 14, fontWeight: '500'}} >{title}</p>
//       <p className="sc-httYMd sc-kiYtDG sc-cKZHah jrzUKj performance-txt-2 f-600">
//         {count} 
//       </p>
//     </div>
//   );
// };
