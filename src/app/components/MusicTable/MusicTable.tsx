"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./MusicTable.css";

const MusicTable = () => {
    const [musicItems, setMusicItems] = useState([]);

    useEffect(() => {
        fetch("https://ujjwaljamuar.github.io/JSONsAPIs/All_Liked_Songs.json")
            .then((response) => response.json())
            .then((data) => setMusicItems(data["items"]))
            .catch((error) =>
                console.log(`Error fetching music API.\n ${error}`)
            );
    });

    return (
        <div
            className="maintable"
            style={{
                height: "100%",
                width: "95dvw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
                alignContent: "center",
                // margin: "20px",
                // padding: "20px",

                border: "1px solid purple",
            }}
        >
            <div>
                <input
                    type="search"
                    style={{
                        width: "60%",
                        border: "1px solid black",
                        marginTop: "2px",
                        marginBottom: "5px",
                        padding: "10px",
                    }}
                ></input>
            </div>
            <div
                style={{
                    overflowX: "auto",
                    overflowY: "scroll",
                    height: "100%",
                    width: "90dvw",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <table>
                    <thead>
                        <tr>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Duration</th>
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
                                <td className="tabledata">{item["title"]}</td>
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
