const components = {
  spinner: Spinner,
  "card-info": CardInfo
};

import Spinner from "../../../components/Spinners/Spinner";
import CardInfo from "../../../components/Cards/CardInfo";
import MathFirstGrade from "./math/firstGrade";
import MathSecondGrad from "./math/secondGrade";
import MathThirdGrade from "./math/thirdGrade";
import MathFourthGrade from "./math/fourthGrade";
import MathFifthGrade from "./math/fifthGrade";
import MathSixthGrade from "./math/sixthGrade";

export const exercises = Object.assign(
  {},
  components,
  MathFirstGrade,
  MathSecondGrad,
  MathThirdGrade,
  MathFourthGrade,
  MathFifthGrade,
  MathSixthGrade
);
