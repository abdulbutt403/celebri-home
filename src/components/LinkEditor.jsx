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
import Tippy from "@tippy.js/react";

export default function LinkEditor({
  titleProp,
  urlProp,
  iconProp,
  idProp,
  fetchData,
}) {
  const [title, setTitle] = useState(titleProp);
  const [url, setUrl] = useState(urlProp);
  const [choosed, setChoosed] = useState(false);
  const [selectedImage, setSelectedImage] = useState(iconProp ? `${baseUrl}/uploads/${iconProp}` : null);
  const [selection, setSelection] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];


    // Check if a file is selected and it is a PNG file
    if (file && file.type === "image/png") {
      setChoosed(true)
      setSelection(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        // Set the selected image and update the state
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      // Clear the selected image if the file is not a PNG
      setSelectedImage(null);
      alert("Please select a valid PNG image.");
    }
  };

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
      const formData = new FormData();
      formData.append("href", url);
      formData.append("title", title);

      // Check if selectedImage is a valid File object
      if (selection instanceof File) {
        formData.append("icon", selection);
      }
      else{
        formData.append("noIcon", true);
      }

      const response = await axios.post(
        `${baseUrl}/users/${userId}/links/${idProp}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);

      setEditTitle(false);
      setEditTitle(false);

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
      {selectedImage && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "60px" , objectFit: 'cover'}}
          />
        </div>
      )}
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
            {(!selectedImage) && (
              <Tippy content={<span>Attach Icon</span>}>
                <button
                  type="button"
                  style={{ ...btn, position: "relative" }}
                  onClick={() => {}}
                >
                  <input
                    type="file"
                    style={{
                      position: "absolute",
                      width: "100%",
                      left: 0,
                      opacity: "0",
                    }}
                    accept=".png" // Allow only PNG files
                    onChange={handleFileChange}
                  />
                  <CustomIcon3 />
                </button>
              </Tippy>
            )}
            {selectedImage && (
              <Tippy content={<span>Remove Icon</span>}>
                <button
                  type="button"
                  style={{ ...btn, position: "relative" }}
                  onClick={() => setSelectedImage(null)}
                >
                  <i
                    className="fa fa-times"
                    style={{
                      fontSize: 24,
                      fontWeight: "300",
                      color: "red",
                      transform: "translateY(-5px)",
                    }}
                  />
                </button>
              </Tippy>
            )}
            <StarIcon />
            <SimpleIcon />
            <LockIcon />
            <AnalyticalIcon />
          </div>
          <div style={buttons}>
            <Tippy content={<span>Delete</span>}>
              <button type="button" style={btn} onClick={handleDeleteLink}>
                <DeleteIcon />
              </button>
            </Tippy>

            <Tippy content={<span>Update</span>}>
              <button
                type="button"
                title="Update"
                style={btn}
                onClick={handleUpdateLink}
              >
                <CustomIcon2 />
              </button>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttons = {
  display: "flex",
  gap: 10,
  transform: "translateY(10px)",
  cursor: "pointer",
  alignItems: "center",
};

const btn = {
  border: "none",
  outline: "none",
  cursor: "pointer",
};
