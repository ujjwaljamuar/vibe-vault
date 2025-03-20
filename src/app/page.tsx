import MusicTable from "./components/MusicTable/MusicTable";
// import "./page.css";

export default function Home() {
    return (
        <div
            style={{
                height: "75dvh",
                width: "95dvw",
                // margin: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                backgroundColor: "#f5f5f5",
                border: "1px solid green",
                overflow: "hidden"
            }}
        >
            <MusicTable />
        </div>
    );
}
