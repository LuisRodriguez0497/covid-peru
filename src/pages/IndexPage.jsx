import { lazy, Suspense } from "react";
import PantallaDeCarga from "../components/PantallaDeCarga";
const DatosMundiales = lazy(() => import("../components/DatosMundiales"));
const DatosCountry = lazy(() => import("../components/DatosCountry"));
const DatosRegionesPeru = lazy(() => import("../components/DatosRegionesPeru"));

function IndexPage(params) {
  return (
    <>
      <Suspense fallback={<PantallaDeCarga />}>
        <DatosMundiales />
        <DatosCountry />
        <DatosRegionesPeru />
      </Suspense>
    </>
  );
}

export default IndexPage;
