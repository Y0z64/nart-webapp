import Hero from "./components/pages/Hero";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Hero />
      <div className="flex h-screen w-screen flex-col items-center justify-start">
        <Button variant={"outline"}>SEX</Button>
      </div>
    </>
  );
}

export default App;
