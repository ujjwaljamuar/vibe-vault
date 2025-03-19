"use client"
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
            style={{ border: "1px", borderColor: "black", height: "100%" }}
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
                            <td
                                style={{
                                    height: "50px",
                                    width: "50px",
                                    objectFit: "contain",
                                }}
                            >
                                <Image src={item["thumbnail"]} alt="" />
                            </td>
                            <td>{item["title"]}</td>
                            <td>{item["artist"]}</td>
                            <td>{item["album"]}</td>
                            <td>{item["duration"]}</td>
                            <td>IN</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MusicTable;
