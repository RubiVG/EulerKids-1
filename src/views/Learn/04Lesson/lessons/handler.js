import Practice from "../../../../components/Cards/CardPractica";
import Progress from "../../../../components/Cards/CardProgreso";
import Info from "../../../../components/Cards/CardInfo";
import Spinner from "../../../../components/Spinners/Spinner";

const components = {
  "euler-practice": Practice,
  "euler-progress": Progress,
  spinner: Spinner,
  "euler-info": Info
};

const MathFirstGrade = {
  // "comparacion-de-cantidades-1": () =>
  //   import("./primero/matematicas/numeros/CompDeCant"),
  // "quien-tiene-mas-1": () =>
  //   import("./primero/matematicas/numeros/QuienTieneMas")
};

export const lessons = Object.assign({}, components, MathFirstGrade);
