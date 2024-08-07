import Nav from "./components/particles/Navbar";

function App() {
  return (
    <>
      <div className="relative flex h-screen w-screen flex-col items-center justify-start">
        <Nav />
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-start">
      </div>
    </>
  );
}

export default App;
