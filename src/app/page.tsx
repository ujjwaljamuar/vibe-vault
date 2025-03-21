import MusicTable from "./components/MusicTable/MusicTable";
import "./page.css";

export default function Home() {
    return (
        <div>
            <div>
                <h1 style={{ textAlign: "center"}}>VibeVault</h1>
            </div>
            <div
                style={{
                    height: "75dvh",
                    width: "85dvw",
                    // margin: 0,
                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                    border: "1px solid green",
                    overflow: "hidden",
                }}
            >
                <MusicTable />
            </div>
        </div>
    );
}
