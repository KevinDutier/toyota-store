import Model from '../components/Model';
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Model model={router.query.param} />
    </>
  )
}

