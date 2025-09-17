import Promotion from "~/promotion/promotion";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sell Services" },
    { name: "description", content: "Promote your services with ease!" },
  ];
}

export default function Home() {
  return <Promotion />;
}
