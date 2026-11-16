import Card from "./components/Card";
import "./App.css";

function App() {
    let myObj = {
        username: "csw",
        age: 19
    };

    return (
        <>
            <h1 className="bg-green-400 text-black p-4 rounded-xl">
                Tailwind Test
            </h1>

            <Card channel="chaiaurcode" someObj={myObj} />

            <Card username="csw" text="hello" />
        </>
    );
}

export default App;