import React, { useState } from "react";
import {
  AnalyticalIcon,
  AudienceIcon,
  CustomIcon,
  CustomIcon2,
  CustomIcon3,
  DeleteIcon,
  ExampleIcon,
  LockIcon,
  MoveIcon,
  SimpleIcon,
  StarIcon,
} from "../svgs";
import jwtDecode from "jwt-decode";
import { baseUrl } from "../constants";
import axios from "axios";
import toast from "react-hot-toast";

export default function LinkEditor({
  titleProp,
  urlProp,
  iconProp,
  idProp,
  fetchData,
}) {
  const [title, setTitle] = useState(titleProp);
  const [url, setUrl] = useState(urlProp);

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
  }

  const userData = token ? jwtDecode(token) : {};

  const userId = userData._id;
  const [editTitle, setEditTitle] = useState(false);
  const [editUrl, setEditUrl] = useState(false);

  const handleDeleteLink = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/${userId}/delete/${idProp}`,
        {}
      );

      console.log(response);

      fetchData();

      toast.success("Link deleted successfully");
    } catch (error) {
      toast.error(error.toString());
    }
  };

  const handleUpdateLink = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/${userId}/links/${idProp}`,
        {
          icon: iconProp,
          href: url,
          title,
        }
      );

      console.log(response)

      setEditTitle(false)
      setEditTitle(false)


      fetchData();

      toast.success("Link Updated successfully");
    } catch (error) {
      toast.error(error.toString());
    }
  };

  return (
    <div className="flex link-box">
      <div className="flex items-center justify-center border-[#d7dce1] w-8 h-auto">
        <MoveIcon />
      </div>
      <div className="flex-1 p-lg h-full relative">
        <form className="sc-dFJsGO sc-bsipQr fXfbKj fbzSf">
          <div className="w-full pr-3">
            <div>
              <div className="grid mb-1 w-full grid-cols-[minmax(0,_90%)] items-baseline">
                {editTitle && (
                  <div className="row-start-1 col-start-1 flex">
                    <input
                      type="text"
                      className="w-full h-5 text-sm border-none p-0 m-0 outline-none  font-semibold "
                      style={{
                        borderBottom: "1px solid rgba(0,0,0,0.3)",
                        maxWidth: "max-content",
                        marginRight: 10,
                      }}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div
                      onClick={() => setEditTitle(false)}
                      style={{ cursor: "pointer" }}
                    >
                      <LockIcon />
                    </div>
                  </div>
                )}
                {!editTitle && (
                  <div className="row-start-1 col-start-1 inline-flex">
                    <button
                      type="button"
                      className="flex items-center max-w-full rounded-[2px] outline-offset-2 outline-2 focus-visible:outline"
                    >
                      <p
                        data-testid="title_Input_V1Label"
                        className="text-black text-sm text-ellipsis max-w-full whitespace-nowrap overflow-hidden font-semibold"
                      >
                        {title.length ? title : `Enter a title`}
                      </p>
                      <span
                        className="flex ml-2"
                        onClick={() => setEditTitle(true)}
                      >
                        <ExampleIcon />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="grid mb-1 w-full grid-cols-[minmax(0,_90%)] items-baseline">
                {editUrl && (
                  <div className="row-start-1 col-start-1 flex">
                    <input
                      type="text"
                      className="w-full h-5 text-sm border-none p-0 m-0 outline-none  font-semibold "
                      style={{
                        borderBottom: "1px solid rgba(0,0,0,0.3)",
                        maxWidth: "max-content",
                        marginRight: 10,
                      }}
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                    <div
                      onClick={() => setEditUrl(false)}
                      style={{ cursor: "pointer" }}
                    >
                      <LockIcon />
                    </div>
                  </div>
                )}
                {!editUrl && (
                  <div className="row-start-1 col-start-1 inline-flex">
                    <button
                      type="button"
                      className="flex items-center max-w-full rounded-[2px] outline-offset-2 outline-2 focus-visible:outline"
                    >
                      <p
                        data-testid="title_Input_V1Label"
                        className="text-black text-sm text-ellipsis max-w-full whitespace-nowrap overflow-hidden font-semibold"
                      >
                        {url.length ? url : `Enter a url`}
                      </p>
                      <span
                        className="flex ml-2"
                        onClick={() => setEditUrl(true)}
                      >
                        <ExampleIcon />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            title="Uplaod an icon"
            style={{ opacity: 0.6, cursor: "pointer" }}
          >
            <button type={`button`} style={{ fontSize: 14 }}>
              Uplaod icon
            </button>
          </div>
        </form>
        <div
          style={{
            opacity: 0.6,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
            <CustomIcon3 />
            <StarIcon />
            <SimpleIcon />
            <LockIcon />
            <AnalyticalIcon />
          </div>
          <div style={buttons}>
            <button type="button" style={btn1} onClick={handleDeleteLink}>
              Delete <DeleteIcon />
            </button>
            <button type="button" style={btn2} onClick={handleUpdateLink}>
              Update <CustomIcon2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttons = {
  display: "flex",
  gap: 4,
  cursor: "pointer",
  alignItems: "center",
};

const btn1 = {
  display: "flex",
  gap: 4,
  cursor: "pointer",
  alignItems: "center",
  border: "2px solid red",
  padding: "2px 6px",
  borderRadius: 5,
  boxShadow: "0 0 3px 0 rgba(0,0,0,0.8)",
};

const btn2 = {
  display: "flex",
  gap: 4,
  cursor: "pointer",
  alignItems: "center",
  border: "2px solid green",
  padding: "2px 6px",
  borderRadius: 5,
  boxShadow: "0 0 3px 0 rgba(0,0,0,0.8)",
};
