export default {
  skills: {
    "first-grade": {
      math: [
        {
          img: "numbers1.svg",
          to: "first-grade/numbers"
        },
        // {
        //   img: "mixOp1.svg",
        //   to: "first-grade/mixed-operations"
        // }
      ]
      // language: [
      //   {
      //     img: "bigo.svg",
      //     to: "first-grade/some-skill"
      //   }
      // ]
    },
    "second-grade": {
      math: [
        {
          img: "time2.svg",
          to: "second-grade/time-skill"
        }
      ]
    },
    "third-grade": {
      math: [
        {
          img: "additions3.svg",
          to: "third-grade/additions"
        },
        {
          img: "multiplications3.svg",
          to: "third-grade/multiplications"
        }
      ]
    },
    "fourth-grade": {
      math: [
        {
          img: "numbers4.svg",
          to: "fourth-grade/numbers"
        }
      ]
    },
    "fifth-grade": {
      math: [
        {
          img: "2dShapes5.svg",
          to: "fifth-grade/2d-shapes"
        }
      ]
    },
    "sixth-grade": {
      math: [
        {
          img: "numbers6.svg",
          to: "sixth-grade/numbers"
        },
        {
          img: "decimals6.svg",
          to: "sixth-grade/decimals"
        }
      ]
    }
  },
  lessons: {
    "first-grade": {
      math: {
        // prettier-ignore
        "numbers": {
          skillName: "Numbers",
          img: "numbersCard1.svg",
          lessons: [
            {
              lesson: "More or less",
              img: "uno1.svg",
              to: "numbers/more-or-less",
              page: "more-or-less",
              exercises: [
                {
                  exercise: "more-or-less-e", // único id para la database
                  exerciseName: "More or less",
                  img: "moreLess1.svg",
                  to: "more-or-less/more-or-less-e"
                }
              ]
            },
            // {
            //   lesson: "Comparing numbers", // Igual que ejercicio Texto
            //   img: "uno2.svg",
            //   to: "numbers/comparing-numbers",
            //   page: "comparing-numbers", // para la navegación del libro.
            //   exercises: [
            //     {
            //       exercise: "comparing-numbers-e", // único id para la database
            //       exerciseName: "Comparing numbers",
            //       img: "compNum1.svg",
            //       to:
            //         "comparing-numbers/comparing-numbers-e"
            //     }
            //   ]
            // }
          ]
        },
        "mixed-operations": {
          skillName: "Mixed operations",
          img: "mixOpCard1.svg",
          lessons: [
            {
              lesson: "\"+\" and \"-\" symbols",
              img: "uno1.svg",
              to: "mixed-operations/plus-and-minus-symbols",
              page: "plus-and-minus-symbols",
              exercises: [
                {
                  exercise: "plus-and-minus-symbols-e",
                  exerciseName: "\"+\" and \"-\" symbols",
                  img: "plusMinus1.svg",
                  to:
                    "plus-and-minus-symbols/plus-and-minus-symbols-e"
                }
              ]
            }
          ]
        }
      }
    },
    "second-grade": {
      math: {
        "time-skill": {
          skillName: "Time",
          img: "timeCard2.svg",
          lessons: [
            {
              lesson: "Days of the week",
              img: "uno1.svg",
              to: "time-skill/days-of-the-week",
              page: "days-of-the-week",
              exercises: [
                {
                  exercise: "days-of-the-week-e", // -e
                  exerciseName: "Days of the week",
                  img: "daysWeek2.svg",
                  to: "days-of-the-week/days-of-the-week-e"
                }
              ]
            }
          ]
        }
      }
    },
    "third-grade": {
      math: {
        "additions": {
          skillName: "Additions",
          img: "addCard3.svg",
          lessons: [
            {
              lesson: "Two-digit additions",
              img: "uno1.svg",
              to: "additions/two-digit-additions",
              page: "two-digit-additions",
              exercises: [
                {
                  exercise: "two-digit-additions-e", // -e
                  exerciseName: "Two-digit additions",
                  img: "2digitAdds3.svg",
                  to:
                    "two-digit-additions/two-digit-additions-e"
                }
              ]
            }
          ]
        },
        "multiplications": {
          skillName: "Multiplications",
          img: "multiCard3.svg",
          lessons: [
            {
              lesson: "2, 3, 4, 5 and 10 times tables",
              img: "uno1.svg",
              to: "multiplications/2-3-4-5-and-10-times-tables",
              page: "2-3-4-5-and-10-times-tables",
              exercises: [
                {
                  exercise: "2-3-4-5-and-10-times-tables-e", // -e
                  exerciseName: "2, 3, 4, 5 and 10 times tables",
                  img: "234TimesTables3.svg",
                  to:
                    "2-3-4-5-and-10-times-tables/2-3-4-5-and-10-times-tables-e"
                }
              ]
            }
          ]
        }

      }
    },
    "fourth-grade": {
      math: {
        numbers: {
          skillName: "Numbers",
          img: "numbersCard4.svg",
          lessons: [
            {
              lesson: "Expanded to standard form",
              img: "uno1.svg",
              to: "numbers/expanded-to-standard-form",
              page: "expanded-to-standard-form",
              exercises: [
                {
                  exercise: "expanded-to-standard-form-e",
                  exerciseName: "Expanded to standard form",
                  img: "expandToStd4.svg",
                  to:
                    "expanded-to-standard-form/expanded-to-standard-form-e"
                }
              ]
            }
          ]
        }
      }
    },
    "fifth-grade": {
      math: {
        "2d-shapes": {
          skillName: "2D shapes",
          img: "2dShapesCard5.svg",
          lessons: [
            {
              lesson: "Parallels, secants and perpendicular lines",
              img: "uno1.svg",
              to: "2d-shapes/parallels-secants-and-perpendicular-lines",
              page: "parallels-secants-and-perpendicular-lines",
              exercises: [
                {
                  exercise: "parallels-secants-and-perpendicular-lines-e",
                  exerciseName: "Parallels, secants and perpendicular lines",
                  img: "parSecPerp5.svg",
                  to:
                    "parallels-secants-and-perpendicular-lines/parallels-secants-and-perpendicular-lines-e"
                }
              ]
            }
          ]
        }
      }
    },
    "sixth-grade": {
      math: {
        "numbers": {
          skillName: "Numbers",
          img: "numbersCard6.svg",
          lessons: [
            {
              lesson: "Comparing numbers",
              img: "uno1.svg",
              to: "numbers/comparing-numbers",
              page: "comparing-numbers",
              exercises: [
                {
                  exercise: "comparing-numbers-e",
                  exerciseName: "Comparing numbers",
                  img: "compNum6.svg",
                  to:
                    "comparing-numbers/comparing-numbers-e"
                }
              ]
            }
          ]
        },
        "decimals": {
          skillName: "Decimals",
          img: "decimalsCard6.svg",
          lessons: [
            {
              lesson: "Decimals additions and subtractions",
              img: "uno1.svg",
              to: "decimals/decimals-additions-and-subtractions",
              page: "decimals-additions-and-subtractions",
              exercises: [
                {
                  exercise: "decimals-additions-and-subtractions-e",
                  exerciseName: "Decimals additions and subtractions",
                  img: "addSubDecimals6.svg",
                  to:
                    "decimals-additions-and-subtractions/decimals-additions-and-subtractions-e"
                }
              ]
            }
          ]
        }
      }
    }
  }
};
