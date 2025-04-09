import React from "react";
import vitelogo from "./assets/react.svg";

const ProfileCard = ({ profileLst }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "20px",
                fontWeight: "normal",
                backgroundColor:"lavender",
                color: "black",
                boxSizing: "border-box",
                width: "500px",
                height: "400px",
                padding: "10px",
                borderRadius: "5px",
                fontStyle: "normal",
            }}
        >
            <img
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid black",
                }}
                src={vitelogo}
                alt="Profile Logo"
            />
            <span>Name: {profileLst.name}</span>
            <span>Department: {profileLst.Department}</span>
            <span>Year: {profileLst.year}</span>
            <span>Mobile: {profileLst.mobile}</span>
            <span>Address: {profileLst.address}</span>
            <a href="https://www.linkedin.com/in/parvathi-devi-g-7bbaa62a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                LinkedIn Profile
            </a>
        </div>
    );
};

export default ProfileCard;
