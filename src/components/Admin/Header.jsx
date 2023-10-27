import { useEffect, useState } from "react";
import useResponsive from "../../Hooks/responsive";
import {
    AccountIcon,
    AnalyticsIcon,
    ApperanceIcon,
    BillingIcon,
    CookieIcon,
    LinksIcon,
    Logo,
    SettingsIcon,
    ShareIcon,
    SpeakerIcon,
    TryFreeIcon,
  } from "../../svgs";
import jwtDecode from "jwt-decode";
import { baseUrl } from "../../constants";
import axios from "axios";

const AdminHeader = () => {
    const isMobile = useResponsive()
    return (
      <div
        className="flex flex-col-reverse w-full md:w-auto md:flex-row fixed md:right-2 md:left-2 md:top-2 bg-white md:rounded-full md:items-center items-stretch border-b border-sand"
        style={{ boxShadow: "0 0 2px 0 rgba(0,0,0,0.05)", zIndex: '1000', maxWidth: isMobile ? "100vw" : "99vw" }}
      >
        <a className="inline-block w-8 h-8 hidden md:flex md:mx-6">
          <Logo />
        </a>
        <div className="flex flex-grow overflow-x-auto h-16 gap-4 items-center" style={isMobile ? {maxWidth: '100vw'} : {}}>
          {/* Links */}
  
          <NavItem Icon={LinksIcon} text={"Links"} selected={true} link={'/admin'} />
          <NavItem Icon={ApperanceIcon} text={"Appearance"}  link={'/admin/appearance'} selected={false} />
          <NavItem Icon={AnalyticsIcon} text={"Analytics"} link={'/admin/analytics'}  selected={false} />
         {!isMobile && <NavItem Icon={SettingsIcon} text={"Settings"} link={'/admin/settings'}  selected={false} />}
  
          <a
            href="/admin/more"
            className="inline-block flex focus:outline-none outline-transparent group items-center justify-center relative text-center py-3 flex-1 md:flex-none md:hidden"
            data-testid="Route"
          >
            {/* Your SVG content */}
            <span>More</span>
          </a>
        </div>
        <div className="flex items-center justify-end border-b md:border-none border-marble h-14">
          <MenuButtons />
        </div>
      </div>
    );
  };
  
  const NavItem = ({ Icon, text, selected , link}) => {
    return (
      <a
        href={link}
        className={`inline-block flex focus:outline-none outline-transparent group items-center justify-center relative text-center py-3 flex-1 md:flex-none after:absolute after:bg-black after:h-[1px] after:rounded-[4px] after:bottom-0 after:left-0 after:right-0 after:md:hidden ${
          selected ? "hover-navitem-selected" : "hover-navitem"
        }`}
        style={{ opacity: selected ? 1 : 0.6, height: 38, borderRadius: 8 }}
      >
        <span
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
          className="flex-col md:flex-row text-xs md:text-sm duration-75 ease-out font-semibold md:group-hover:bg-marble md:px-xs rounded-sm transition-background-color group-focus-visible:ring-2 group-focus-visible:ring-black -tracking-[0.35px] xl:tracking-[0px] flex items-center h-auto md:h-full text-black"
        >
          <span aria-hidden="true" className="p-1 md:pr-2 md:pl-0">
            <Icon />
          </span>
          <span>{text}</span>
        </span>
      </a>
    );
  };
  
  const MenuButtons = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const token = localStorage.getItem('token')

    if(!token){
      window.location.href= '/login'
    }
   
  const userData = token ?  jwtDecode(token) : {}
  const [url, setUrl] = useState(null);


  useEffect(() => {
    fetchUser()
   }, [])
   
   const fetchUser = async () => {
     try {
       const userId = userData._id;
       const response = await axios.get(`${baseUrl}/users/${userId}`);
 
       // Set the user data in the state
       const user = response.data.user
  
       if(user.profilePic){
       setUrl(`${baseUrl}/uploads/${user.profilePic}`)
       }
  
     } catch (error) {
       console.error(error);
       // Handle errors appropriately
     }
   };

    return (
      <div className="flex-shrink-0 flex items-center mx-2 gap-x-2 md:mx-3 relative">
        <button
          className="bg-gg relative transition duration-75 ease-out w-full h-2xl px-md rounded-xl outline-none focus-visible:ring-2 h-10 px-3 focus-visible:ring-offset-2 focus-visible:ring-black antialiased text-primary sidebar__icons--beemer hidden md:block px-3 py-2 max-h-10 relative text-black bg-white hover:bg-chalk active:bg-chalk border border-none w-fit beamer_beamerSelector"
          type="button"
          style={{ width: 50, borderRadius: 999 }}
        >
          <span className="flex items-center justify-center">
            <span className="block">
              <SpeakerIcon />
            </span>
            <span className="block font-semibold text-md hidden">Updates</span>
          </span>
        </button>
        <button
          className="relative transition duration-75 ease-out w-full h-2xl px-md rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased text-black !pr-4 !pl-3 min-w-max max-h-10 border-none hover:bg-sand bg-marble active:bg-sand focus-visible:bg-sand focus-visible:outline-none duration-75 ease-out transition bg-white border border-sand bg-gr h-10 px-3"
          type="button"
          style={{ borderRadius: 999, width: 120 }}
        >
          <span className="flex items-center justify-center">
            <span className="block pr-xs">
              <TryFreeIcon />
            </span>
            <span
              className="block font-semibold text-md"
              style={{ marginLeft: 10 }}
            >
              Try Pro for free
            </span>
          </span>
        </button>
        <button
          className="relative transition duration-75 ease-out h-10 px-md rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased text-black px-sm bg-white border border-sand hover:bg-chalk hover:border-chalk active:bg-chalk active:border-chalk"
          type="button"
          style={{ borderRadius: 999, width: 105 }}
        >
          <span className="flex items-center justify-center">
            <ShareIcon />
            <span className="font-semibold text-md" style={{ marginLeft: 10 }}>
              Share
            </span>
          </span>
        </button>
        <div>
          <span aria-hidden="true" onClick={toggleDropdown}>
            <div className="avt" style={{overflow: 'hidden'}}>
              {url? <img src={url} style={{objectFit: 'cover'}}/> : <span>H</span>}
            </div>
          </span>
  
          {isDropdownOpen && (
            <div className="dropdown-content">
              {/* Your dropdown content here */}
              <DropdownContent />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const DropdownContent = () => {
    return (
      <div
        className="w-[340px] md:max-h-[calc(100vh-80px)] px-6 pt-2 pb-0 absolute right-0 top-11 shadow-max-elevation-light text-left bg-white rounded-t-lg md:rounded-lg overflow-auto opacity-100 translate-y-0"
        style={{
          minWidth: 340,
          transform: "translate(-2px, 2px)",
          boxShadow: "0 0 40px 0 rgba(0,0,0,0.2)",
          borderRadius: "1.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          overflowX: 'hidden'
        }}
      >
        <div
          className="mb-3"
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1.5rem",
          }}
        >
          <div className="my-6 mx-4 md:my-0 md:mx-0">
            <div className="rounded-lg bg-white md:-mx-4 md:rounded-md">
              <div className="pointer-events-none">
                <span className="flex p-md items-center hover:bg-chalk rounded-lg md:rounded-md w-full outline-none justify-between transition duration-75 ease-out focus-visible:ring-2 focus-visible:ring-black group-focus-visible:ring-2 group-focus-visible:ring-black">
                  <span className="flex items-center min-w-0">
                    <span
                      className="shrink-0 rounded-sm flex items-center justify-center mr-md"
                      aria-hidden="true"
                    >
                      <div>
                        <div
                          className="sc-bdfBwQ sc-dQppl kZZDKQ jmdZRm"
                          style={{ paddingRight: 16 }}
                        >
                          <span aria-hidden="true">
                            <div className="avt bv">
                              <span>H</span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </span>
                    <span className="text-left min-w-0">
                      <p className="text-black text-md font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
                        @hafiz402
                      </p>
                      <p className="text-concrete text-xs mt-[2px] text-ellipsis whitespace-nowrap overflow-hidden">
                        http://localhost:3000/hafiz402
                      </p>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 mx-4 md:my-0 md:mx-0">
          <div className="text-concrete text-sm mb-3 font-semibold">Account</div>
          <div className="rounded-lg bg-white md:-mx-4 md:rounded-md">
            {/* My account */}
  
              <div className="rounded-lg bg-white md:-mx-4 md:rounded-md pl-4">
                <ul>
                  <DropdownItem Icon={AccountIcon} text={"My account"} />
                  <DropdownItem Icon={BillingIcon} text={"Billing"} />
                  <DropdownItem Icon={CookieIcon} text={"Cookie preference"} />
                </ul>
            </div>
            <hr className="border-sand w-[calc(100%-32px)] my-0.5 mx-4 md:border-transparent" />
          </div>
        </div>
        <div className="my-6 mx-4 md:my-0 md:mx-0">
          <div className="text-concrete text-sm mb-3 font-semibold">Support</div>
          <div className="rounded-lg bg-white md:-mx-4 md:rounded-md">
          <div className="rounded-lg bg-white md:-mx-4 md:rounded-md pl-4">
                <ul>
                  <DropdownItem Icon={AccountIcon} text={"My account"} />
                  <DropdownItem Icon={BillingIcon} text={"Billing"} />
                  <DropdownItem Icon={CookieIcon} text={"Logout"} />
                </ul>
            </div>
          </div>
        </div>
        <div className="my-6 mx-4 md:my-0 md:mx-0">
          <div className="rounded-lg bg-white md:-mx-4 md:rounded-md">
            <ul>
              {/* Sign out */}
              <li>
                <a
                  className="flex w-full items-center relative transition duration-75 ease-out w-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-black antialiased bg-white hover:bg-chalk active:bg-chalk border border-none p-4 md:py-3 md:rounded-md"
                  href="/logout"
                  aria-label="Sign out"
                >
                  {/* Sign out content */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export const DropdownItem = ({ Icon, text }) => {
    const logout = () => {
      localStorage.removeItem('token')
      window.location.href='/login'
    }
    const navig = () => window.location.href="/admin/account"
    return (
      <li className="cursor-pointer" style={{cursor: 'pointer'}} onClick={text.toLowerCase() === 'logout' ? logout :navig}>
        <a className="flex w-full items-center relative transition duration-75 ease-out w-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-black antialiased bg-white hover:bg-chalk active:bg-chalk border border-none p-4 md:py-3 md:rounded-md">
          <Icon />
          <p className="text-sm truncate ml-4">{text}</p>
        </a>
        <hr className="border-sand w-[calc(100%-32px)] my-0.5 mx-4 md:border-transparent"></hr>
      </li>
    );
  };
  

  export default AdminHeader;
  