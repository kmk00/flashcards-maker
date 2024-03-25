import DocumentComponent from "./components/DocumentComponent";
import ExamplePage from "./components/ExamplePage";

export default function Home() {
  return (
    <main className="flex-1 hidden lg:flex lg:ml-4 h-full justify-center items-center">
      <ExamplePage />
    </main>
  );
}
