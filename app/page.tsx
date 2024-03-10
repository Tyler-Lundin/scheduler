import SchedulerRoot from "./components/scheduler/Scheduler";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1 className="text-8xl font-black uppercase text-black/10">
        Scheduler
      </h1>
      <SchedulerRoot />
    </main>
  );
}


