import { trpc } from "@/app/trpc";

export default async function Home() {
  const response = await trpc.hello.query({ name : "test" });
  return <div>{ JSON.stringify(response)}</div>;
}
