import CV from "./components/CV";

export default function App() {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center gap-4">
      <div className="min-h-screen w-1/2 flex justify-end items-center">
        left
      </div>
      <div className="min-h-screen w-1/2 flex justify-center items-center bg-red-300">
        <CV name='Mateusz' surname='Karpiński' email='mateusz.karpinski29@gmail.com' birth='15.10.2003' country='Poland' />
      </div>
    </div>
  );
}

