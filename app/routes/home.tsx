import Promotion from "~/promotion/promotion";
import type { Route } from "./+types/home";
import Header from "~/components/header";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "3AM" },
    { name: "description", content: "Transforme sua ideia em projeto real com tecnologia de ponta" },
  ];
}

export default function Home() {
  return (<>
      <Promotion />
  </>);
}
