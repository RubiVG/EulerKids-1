import CardPractica from "../../../../components/Cards/CardPractica";
import CardProgreso from "../../../../components/Cards/CardProgreso";
import CardInfo from "../../../../components/Cards/CardInfo";
import Spinner from "../../../../components/Spinners/Spinner";

const components = {
  "app-card-practica": CardPractica,
  "app-progreso": CardProgreso,
  spinner: Spinner,
  "card-info": CardInfo
};

const MathFirstGrade = {
  // "comparacion-de-cantidades-1": () =>
  //   import("./primero/matematicas/numeros/CompDeCant"),
  // "quien-tiene-mas-1": () =>
  //   import("./primero/matematicas/numeros/QuienTieneMas")
};

export const lessons = Object.assign({}, components, MathFirstGrade);
