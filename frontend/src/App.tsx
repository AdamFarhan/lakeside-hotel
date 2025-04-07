import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Button variant={"default"}>Click here</Button>
      <Button variant={"secondary"}>Click here</Button>
      <Button variant={"ghost"}>Click here</Button>
      <Button variant={"outline"}>Click here</Button>
    </div>
  );
}

export default App;
