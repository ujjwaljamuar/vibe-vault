"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

import "./MusicTable.css";

const MusicTable = () => {
    const sessionStoragekeys = {
        PlayList: "musicItems",
    };
    const [musicItems, setMusicItems] = useState([]);

    useEffect(() => {
        const cachedItems = sessionStorage.getItem(
            sessionStoragekeys["PlayList"]
        );

        if (cachedItems) {
            console.log("Found data in session storage");
            setMusicItems(JSON.parse(cachedItems));
        } else {
            console.log("Data not found in session storage");
            fetch(
                "https://ujjwaljamuar.github.io/JSONsAPIs/All_Liked_Songs.json"
            )
                .then((response) => response.json())
                .then((data) => {
                    setMusicItems(data["items"]);
                    sessionStorage.setItem(
                        sessionStoragekeys["PlayList"],
                        JSON.stringify(data["items"])
                    );
                })
                .catch((error) =>
                    console.log(`Error fetching music API.\n ${error}`)
                );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className="maintable"
            style={{
                height: "100%",
                // width: "95dvw",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                // alignContent: "center",
                border: "1px solid red",
            }}
        >
            <div
                style={{
                    height: "10%",
                    border: "1px solid pink",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.1em",
                    padding: "0.3em",
                    backgroundColor: "white",
                    justifyContent: "space-between"
                }}
            >
                <div
                    style={{
                        height: "95%",
                        border: "1px solid pink",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.1em",
                        padding: "0.3em",
                        backgroundColor: "white",
                    }}
                >
                    <input
                        type="search"
                        style={{
                            width: "60%",
                            height: "100%",
                            border: "2px solid black",
                            margin: ".2em",
                            // marginTop: "2px",
                            // marginBottom: "5px",
                            padding: "1rem",
                            borderRadius: "5px",
                            backgroundColor: "#F3F3F3",
                        }}
                    ></input>
                    <button
                        style={{
                            width: "3%",
                            height: "100%",
                            border: "2px solid grey",
                            padding: ".5em",
                            backgroundColor: "white",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                        // className="btn-98"
                    >
                        <FiSearch />
                    </button>
                </div>
                <div>
                    <FaFilter />
                </div>
            </div>
            <div
                style={{
                    overflowX: "auto",
                    overflowY: "scroll",
                    height: "90%",
                    width: "100%",
                    // display: "flex",
                    // alignItems: "center",
                }}
            >
                <table style={{ borderCollapse: "collapse" }}>
                    <thead
                        style={{
                            position: "sticky",
                            top: "0",
                            zIndex: "100",
                            backgroundColor: "white",
                            // border: "5px solid red",
                            height: "5vh",
                        }}
                    >
                        <tr>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Duration</th>
                            {/* <th>Play</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {musicItems.map((item) => (
                            <tr key={item["videoId"]}>
                                <td>
                                    <Image
                                        src={item["thumbnail"]}
                                        alt=""
                                        width={50}
                                        height={50}
                                        style={{
                                            objectFit: "contain",
                                        }}
                                    />
                                </td>
                                <td className="tabledata" style={{}}>
                                    {item["title"]}
                                </td>
                                <td className="tabledata">{item["artist"]}</td>
                                <td className="tabledata">{item["album"]}</td>
                                <td className="tabledata">
                                    {item["duration"]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MusicTable;
