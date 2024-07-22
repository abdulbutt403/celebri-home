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
  IconVideo,
} from "../svgs";
import { MdOndemandVideo } from "react-icons/md";

import jwtDecode from "jwt-decode";
import { baseUrl } from "../constants";
import axios from "axios";
import toast from "react-hot-toast";
import Tippy from "@tippy.js/react";
import { HexColorPicker } from "react-colorful";

export default function LinkEditor({
  titleProp,
  urlProp,
  iconProp,
  link,
  idProp,
  key,
  fetchData,
  UserPlan,
  backgroundProp,
}) {
  const [title, setTitle] = useState(titleProp);
  const [url, setUrl] = useState(urlProp);
  const [choosed, setChoosed] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [fav, setFav] = useState(link?.star ? link?.star : false);
  const [selectedImage, setSelectedImage] = useState(
    iconProp ? `${iconProp}` : null
  );
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectionVideo, setSelectionVideo] = useState(null);
  const [selection, setSelection] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected and it is a PNG file
    if (file && file.type === "image/png") {
      setChoosed(true);
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
  const handleVideoFileChange = (event) => {
    debugger;
    const file = event.target.files[0];

    // Check if a file is selected and it is a PNG file
    if (file && file.type === "video/mp4") {
      setChoosed(true);
      setSelectionVideo(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        // Set the selected image and update the state
        setSelectedVideo(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      // Clear the selected image if the file is not a PNG
      setSelectedVideo(null);
      alert("Please select a valid video file.");
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

  const addFav = (link, index) => {};
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

  const [color, setColor] = useState(backgroundProp);
  const [show, setShow] = useState(false);

  const handleUpdateStar = async (fav, key) => {
    console.log("title");
    try {
      const formData = new FormData();
      formData.append("href", url);
      formData.append("title", title);
      formData.append("background", color);
      formData.append("star", fav);

      // Check if selectedImage is a valid File object
      if (selection instanceof File) {
        formData.append("icon", selection);
      } else {
        if (removed) formData.append("noIcon", true);
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

      fetchData();

      toast.success("Add Favorite successfully");
    } catch (error) {
      toast.error(error.toString());
    }
  };
  const handleUpdateLink = async () => {
    try {
      const formData = new FormData();
      formData.append("href", url);
      formData.append("title", title);
      formData.append("background", color);
      formData.append("star", fav);

      // Check if selectedImage is a valid File object
      if (selection instanceof File) {
        formData.append("icon", selection);
      } else {
        if (removed) formData.append("noIcon", true);
      }

      if (selectionVideo instanceof File) {
        formData.append("video", selectionVideo);
      } else {
        if (removed) formData.append("noIcon", true);
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
            style={{ width: "60px", objectFit: "cover" }}
          />
        </div>
      )}
      {selectedVideo && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100px",
            height: "137px",
          }}
        >
    
          <video>
            <source src={selectedVideo} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="flex-1 p-lg h-full relative">
        <form className="sc-dFJsGO sc-bsipQr fXfbKj fbzSf">
          <div className="w-full pr-3">
            <div>
              <div className="grid mb-1 w-full grid-cols-[minmax(0,_90%)] items-baseline">
                {editTitle && (
                  <div className="row-start-1 col-start-1 flex">
                    <div
                      style={{
                        height: 10,
                        width: 10,
                        border: "1px solid black",
                        background: color,
                      }}
                    ></div>
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
                    <div
                      style={{
                        height: 13,
                        width: 13,
                        border: "1px solid rgba(0,0,0,0.5)",
                        marginRight: 10,
                        transform: "translateY(3.8px)",
                        background: color,
                      }}
                    ></div>
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
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
            {!selectedImage && UserPlan !== "user" && (
              <Tippy content={<span>Attach Icon</span>}>
                <button
                  type="button"
                  style={{
                    ...btn,
                    position: "relative",
                    transform: "translateY(-5px)",
                  }}
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
                  onClick={() => {
                    setSelectedImage(null);
                    setSelection(null);
                    setRemoved(true);
                  }}
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

            <Tippy content={<span>Pick Color</span>}>
              <button
                type="button"
                style={{ ...btn, position: "relative" }}
                onClick={() => setShow((x) => !x)}
              >
                <i
                  className="fa fa-tint"
                  style={{
                    fontSize: 22,
                    fontWeight: "300",
                    color: "gray",
                    transform: "translateY(-2px)",
                  }}
                />
              </button>
            </Tippy>

            {UserPlan !== "user" && link.star && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer" }}
                onClick={() => handleUpdateStar(false)}
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            )}
            {UserPlan !== "user" && !link.star && (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleUpdateStar(true, key)}
              >
                <StarIcon />
              </div>
            )}
            {!selectedVideo && UserPlan !== "user" && (
              <Tippy content={<span>Attach Video</span>}>
                <button
                  type="button"
                  style={{
                    ...btn,
                    position: "relative",
                    transform: "translateY(-5px)",
                  }}
                >
                  <input
                    type="file"
                    style={{
                      position: "absolute",
                      width: "100%",
                      left: 0,
                      opacity: "0",
                    }}
                    accept=".video/mp4" // Allow only PNG files
                    onChange={handleVideoFileChange}
                  />
                  <MdOndemandVideo
                    style={{ cursor: "pointer", width: "15px", height: "15px" }}
                  />
                </button>
              </Tippy>
            )}

            {selectedVideo && (
              <Tippy content={<span>Remove Video</span>}>
                <button
                  type="button"
                  style={{ ...btn, position: "relative" }}
                  onClick={() => {
                    setSelectedVideo(null);
                    setSelectionVideo(null);
                    setRemoved(true);
                  }}
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
            {/* <SimpleIcon /> */}
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
        {show && (
          <div style={{ position: "absolute", left: 60 }}>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        )}
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
