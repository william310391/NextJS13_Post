import { Suspense } from "react";
import ListOfPage from "./ListOfPage";

async function page({params}) {
  return (
    <section>
      <Suspense fallback={<p>CARGANDOOOOOOOO POSTSSSSSS...........</p>}>
        <ListOfPage />
      </Suspense>
    </section>
  );
}

export default page;
