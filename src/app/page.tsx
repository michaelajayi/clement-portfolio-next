import CreativeJourney from "./components/CreativeJourney";
import Experience from "./components/Experience";
import Header from "./components/Header";
import JobTitle from "./components/JobTitle";
import MyClients from "./components/MyClients";
import SelectedWork from "./components/SelectedWork";

export default function Home() {
  return (
    <main className='flex flex-col min-w-screen w-screen overflow-x-hidden'>
      <Header />
      <JobTitle />
      <Experience />
      <CreativeJourney />
      <SelectedWork />
      <MyClients />
    </main>
  );
}
