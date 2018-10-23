const uuidv4 = require("uuid/v4");
const shuffleFisher = require("../../../../utilities/random").shuffleFisher;
const randomFromArray = require("../../../../utilities/random").randomFromArray;
const placeValue = require("../../../../utilities/math").placeValue;

const logic = {
  hundredThousands: [
    "100,000",
    "200,000",
    "300,000",
    "400,000",
    "500,000",
    "600,000",
    "700,000",
    "800,000",
    "900,000"
  ],
  tenThousands: [
    "10,000",
    "20,000",
    "30,000",
    "40,000",
    "50,000",
    "60,000",
    "70,000",
    "80,000",
    "90,000"
  ],
  thousands: [
    "1,000",
    "2,000",
    "3,000",
    "4,000",
    "5,000",
    "6,000",
    "7,000",
    "8,000",
    "9,000"
  ],
  hundreds: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  tens: ["10", "20", "30", "40", "50", "60", "70", "80", "90"],
  ones: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  thousandsQuestions() {
    const questions = [];

    for (var i = 0; i < this.thousands.length; i++) {
      for (var j = 0; j < this.hundreds.length; j++) {
        for (var k = 0; k < this.tens.length; k++) {
          for (var l = 0; l < this.ones.length; l++) {
            questions.push({
              expanded: `${this.thousands[i]} + ${this.hundreds[j]} + ${
                this.tens[k]
              } + ${this.ones[l]}`,
              correct: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.thousands[i].replace(/,/g, "")) +
                    Number(this.hundreds[j]) +
                    Number(this.tens[k]) +
                    Number(this.ones[l])
                )
              ),
              headers: [
                {
                  text: "Thousands",
                  value: "thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Hundreds",
                  value: "hundreds",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Tens",
                  value: "tens",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Ones",
                  value: "ones",
                  align: "center",
                  sortable: false
                }
              ],
              placeValues: [
                {
                  value: false,
                  thousands: placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  hundreds: placeValue(
                    Number(this.hundreds[j])
                  ).hundreds.toString(),
                  tens: placeValue(Number(this.tens[k])).tens.toString(),
                  ones: placeValue(Number(this.ones[l])).ones.toString()
                }
              ],
              answers: [
                {
                  number: this.thousands[i],
                  value: placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.thousands[i].replace(/,/g, ""))
                    ).thousands.toString(),
                    "thousands"
                  )
                },
                {
                  number: this.hundreds[j],
                  value: placeValue(
                    Number(this.hundreds[j])
                  ).hundreds.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.hundreds[j])).hundreds.toString(),
                    "hundreds"
                  )
                },
                {
                  number: this.tens[k],
                  value: placeValue(Number(this.tens[k])).tens.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.tens[k])).tens.toString(),
                    "tens"
                  )
                },
                {
                  number: this.ones[l],
                  value: placeValue(Number(this.ones[l])).ones.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.ones[l])).ones.toString(),
                    "ones"
                  )
                }
              ],
              thousands: true,
              id: uuidv4(),
              rating: 800
            });
          }
        }
      }
    }
    return questions;
  },
  thousandsZeroOnes() {
    const questions = [];

    for (var i = 0; i < this.thousands.length; i++) {
      for (var j = 0; j < this.hundreds.length; j++) {
        for (var k = 0; k < this.tens.length; k++) {
          questions.push({
            expanded: `${this.thousands[i]} + ${this.hundreds[j]} + ${
              this.tens[k]
            }`,
            correct: Intl.NumberFormat().format(
              Math.floor(
                Number(this.thousands[i].replace(/,/g, "")) +
                  Number(this.hundreds[j]) +
                  Number(this.tens[k])
              )
            ),
            headers: [
              {
                text: "Thousands",
                value: "thousands",
                align: "center",
                sortable: false
              },
              {
                text: "Hundreds",
                value: "hundreds",
                align: "center",
                sortable: false
              },
              {
                text: "Tens",
                value: "tens",
                align: "center",
                sortable: false
              },
              {
                text: "Ones",
                value: "ones",
                align: "center",
                sortable: false
              }
            ],
            placeValues: [
              {
                value: false,
                thousands: placeValue(
                  Number(this.thousands[i].replace(/,/g, ""))
                ).thousands.toString(),
                hundreds: placeValue(
                  Number(this.hundreds[j])
                ).hundreds.toString(),
                tens: placeValue(Number(this.tens[k])).tens.toString(),
                ones: "0"
              }
            ],
            answers: [
              {
                number: this.thousands[i],
                value: placeValue(
                  Number(this.thousands[i].replace(/,/g, ""))
                ).thousands.toString(),
                placeValue: this.toSingular(
                  placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  "thousands"
                )
              },
              {
                number: this.hundreds[j],
                value: placeValue(Number(this.hundreds[j])).hundreds.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.hundreds[j])).hundreds.toString(),
                  "hundreds"
                )
              },
              {
                number: this.tens[k],
                value: placeValue(Number(this.tens[k])).tens.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.tens[k])).tens.toString(),
                  "tens"
                )
              },
              {
                number: "0",
                value: "0",
                placeValue: "ones"
              }
            ],
            thousands: true,
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }
    return questions;
  },
  thousandsZeroTens() {
    const questions = [];

    for (var i = 0; i < this.thousands.length; i++) {
      for (var j = 0; j < this.hundreds.length; j++) {
        for (var l = 0; l < this.ones.length; l++) {
          questions.push({
            expanded: `${this.thousands[i]} + ${this.hundreds[j]} + ${
              this.ones[l]
            }`,
            correct: Intl.NumberFormat().format(
              Math.floor(
                Number(this.thousands[i].replace(/,/g, "")) +
                  Number(this.hundreds[j]) +
                  Number(this.ones[l])
              )
            ),
            headers: [
              {
                text: "Thousands",
                value: "thousands",
                align: "center",
                sortable: false
              },
              {
                text: "Hundreds",
                value: "hundreds",
                align: "center",
                sortable: false
              },
              {
                text: "Tens",
                value: "tens",
                align: "center",
                sortable: false
              },
              {
                text: "Ones",
                value: "ones",
                align: "center",
                sortable: false
              }
            ],
            placeValues: [
              {
                value: false,
                thousands: placeValue(
                  Number(this.thousands[i].replace(/,/g, ""))
                ).thousands.toString(),
                hundreds: placeValue(
                  Number(this.hundreds[j])
                ).hundreds.toString(),
                tens: "0",
                ones: placeValue(Number(this.ones[l])).ones.toString()
              }
            ],
            answers: [
              {
                number: this.thousands[i],
                value: placeValue(
                  Number(this.thousands[i].replace(/,/g, ""))
                ).thousands.toString(),
                placeValue: this.toSingular(
                  placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  "thousands"
                )
              },
              {
                number: this.hundreds[j],
                value: placeValue(Number(this.hundreds[j])).hundreds.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.hundreds[j])).hundreds.toString(),
                  "hundreds"
                )
              },
              {
                number: "0",
                value: "0",
                placeValue: "tens"
              },
              {
                number: this.ones[l],
                value: placeValue(Number(this.ones[l])).ones.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.ones[l])).ones.toString(),
                  "ones"
                )
              }
            ],
            thousands: true,
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }
    return questions;
  },
  thousandsZeroHundreds() {
    const questions = [];

    for (var i = 0; i < this.thousands.length; i++) {
      for (var k = 0; k < this.tens.length; k++) {
        for (var l = 0; l < this.ones.length; l++) {
          questions.push({
            expanded: `${this.thousands[i]} + ${this.tens[k]} + ${
              this.ones[l]
            }`,
            correct: Intl.NumberFormat().format(
              Math.floor(
                Number(this.thousands[i].replace(/,/g, "")) +
                  Number(this.tens[k]) +
                  Number(this.ones[l])
              )
            ),
            headers: [
              {
                text: "Thousands",
                value: "thousands",
                align: "center",
                sortable: false
              },
              {
                text: "Hundreds",
                value: "hundreds",
                align: "center",
                sortable: false
              },
              {
                text: "Tens",
                value: "tens",
                align: "center",
                sortable: false
              },
              {
                text: "Ones",
                value: "ones",
                align: "center",
                sortable: false
              }
            ],
            placeValues: [
              {
                value: false,
                thousands: placeValue(
                  Number(this.thousands[i].replace(/,/g, ""))
                ).thousands.toString(),
                hundreds: "0",
                tens: placeValue(Number(this.tens[k])).tens.toString(),
                ones: placeValue(Number(this.ones[l])).ones.toString()
              }
            ],
            answers: [
              {
                number: this.thousands[i],
                value: placeValue(
                  Number(this.thousands[i].replace(/,/g, ""))
                ).thousands.toString(),
                placeValue: this.toSingular(
                  placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  "thousands"
                )
              },
              {
                number: "0",
                value: "0",
                placeValue: "hundreds"
              },
              {
                number: this.tens[k],
                value: placeValue(Number(this.tens[k])).tens.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.tens[k])).tens.toString(),
                  "tens"
                )
              },
              {
                number: this.ones[l],
                value: placeValue(Number(this.ones[l])).ones.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.ones[l])).ones.toString(),
                  "ones"
                )
              }
            ],
            thousands: true,
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }
    return questions;
  },
  tenThousandsQuestions() {
    const questions = [];

    for (var h = 0; h < this.tenThousands.length; h++) {
      for (var i = 0; i < this.thousands.length; i++) {
        for (var j = 0; j < this.hundreds.length; j++) {
          for (var k = 0; k < this.tens.length; k++) {
            for (var l = 0; l < this.ones.length; l++) {
              questions.push({
                expanded: `${this.tenThousands[h]} + ${this.thousands[i]} + ${
                  this.hundreds[j]
                } + ${this.tens[k]} + ${this.ones[l]}`,
                correct: Intl.NumberFormat().format(
                  Math.floor(
                    Number(this.tenThousands[h].replace(/,/g, "")) +
                      Number(this.thousands[i].replace(/,/g, "")) +
                      Number(this.hundreds[j]) +
                      Number(this.tens[k]) +
                      Number(this.ones[l])
                  )
                ),
                headers: [
                  {
                    text: "Ten thousands",
                    value: "ten thousands",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Thousands",
                    value: "thousands",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Hundreds",
                    value: "hundreds",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Tens",
                    value: "tens",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Ones",
                    value: "ones",
                    align: "center",
                    sortable: false
                  }
                ],
                placeValues: [
                  {
                    value: false,
                    tenThousands: placeValue(
                      Number(this.tenThousands[h].replace(/,/g, ""))
                    ).tenThousands.toString(),
                    thousands: placeValue(
                      Number(this.thousands[i].replace(/,/g, ""))
                    ).thousands.toString(),
                    hundreds: placeValue(
                      Number(this.hundreds[j])
                    ).hundreds.toString(),
                    tens: placeValue(Number(this.tens[k])).tens.toString(),
                    ones: placeValue(Number(this.ones[l])).ones.toString()
                  }
                ],
                answers: [
                  {
                    number: this.tenThousands[h],
                    value: placeValue(
                      Number(this.tenThousands[h].replace(/,/g, ""))
                    ).tenThousands.toString(),
                    placeValue: this.toSingular(
                      placeValue(
                        Number(this.tenThousands[h].replace(/,/g, ""))
                      ).tenThousands.toString(),
                      "ten thousands"
                    )
                  },
                  {
                    number: this.thousands[i],
                    value: placeValue(
                      Number(this.thousands[i].replace(/,/g, ""))
                    ).thousands.toString(),
                    placeValue: this.toSingular(
                      placeValue(
                        Number(this.thousands[i].replace(/,/g, ""))
                      ).thousands.toString(),
                      "thousands"
                    )
                  },
                  {
                    number: this.hundreds[j],
                    value: placeValue(
                      Number(this.hundreds[j])
                    ).hundreds.toString(),
                    placeValue: this.toSingular(
                      placeValue(Number(this.hundreds[j])).hundreds.toString(),
                      "hundreds"
                    )
                  },
                  {
                    number: this.tens[k],
                    value: placeValue(Number(this.tens[k])).tens.toString(),
                    placeValue: this.toSingular(
                      placeValue(Number(this.tens[k])).tens.toString(),
                      "tens"
                    )
                  },
                  {
                    number: this.ones[l],
                    value: placeValue(Number(this.ones[l])).ones.toString(),
                    placeValue: this.toSingular(
                      placeValue(Number(this.ones[l])).ones.toString(),
                      "ones"
                    )
                  }
                ],
                tenThousands: true,
                id: uuidv4(),
                rating: 1200
              });
            }
          }
        }
      }
    }

    return questions;
  },
  tenThousandsZeroTens() {
    const questions = [];

    for (var h = 0; h < this.tenThousands.length; h++) {
      for (var i = 0; i < this.thousands.length; i++) {
        for (var j = 0; j < this.hundreds.length; j++) {
          for (var l = 0; l < this.ones.length; l++) {
            questions.push({
              expanded: `${this.tenThousands[h]} + ${this.thousands[i]} + ${
                this.hundreds[j]
              } + ${this.ones[l]}`,
              correct: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.tenThousands[h].replace(/,/g, "")) +
                    Number(this.thousands[i].replace(/,/g, "")) +
                    Number(this.hundreds[j]) +
                    Number(this.ones[l])
                )
              ),
              headers: [
                {
                  text: "Ten thousands",
                  value: "ten thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Thousands",
                  value: "thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Hundreds",
                  value: "hundreds",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Tens",
                  value: "tens",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Ones",
                  value: "ones",
                  align: "center",
                  sortable: false
                }
              ],
              placeValues: [
                {
                  value: false,
                  tenThousands: placeValue(
                    Number(this.tenThousands[h].replace(/,/g, ""))
                  ).tenThousands.toString(),
                  thousands: placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  hundreds: placeValue(
                    Number(this.hundreds[j])
                  ).hundreds.toString(),
                  tens: "0",
                  ones: placeValue(Number(this.ones[l])).ones.toString()
                }
              ],
              answers: [
                {
                  number: this.tenThousands[h],
                  value: placeValue(
                    Number(this.tenThousands[h].replace(/,/g, ""))
                  ).tenThousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.tenThousands[h].replace(/,/g, ""))
                    ).tenThousands.toString(),
                    "ten thousands"
                  )
                },
                {
                  number: this.thousands[i],
                  value: placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.thousands[i].replace(/,/g, ""))
                    ).thousands.toString(),
                    "thousands"
                  )
                },
                {
                  number: this.hundreds[j],
                  value: placeValue(
                    Number(this.hundreds[j])
                  ).hundreds.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.hundreds[j])).hundreds.toString(),
                    "hundreds"
                  )
                },
                {
                  number: "0",
                  value: "0",
                  placeValue: "tens"
                },
                {
                  number: this.ones[l],
                  value: placeValue(Number(this.ones[l])).ones.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.ones[l])).ones.toString(),
                    "ones"
                  )
                }
              ],
              tenThousands: true,
              id: uuidv4(),
              rating: 1200
            });
          }
        }
      }
    }

    return questions;
  },
  tenThousandsZeroTensHundreds() {
    const questions = [];

    for (var h = 0; h < this.tenThousands.length; h++) {
      for (var i = 0; i < this.thousands.length; i++) {
        for (var l = 0; l < this.ones.length; l++) {
          questions.push({
            expanded: `${this.tenThousands[h]} + ${this.thousands[i]} + ${
              this.ones[l]
            }`,
            correct: Intl.NumberFormat().format(
              Math.floor(
                Number(this.tenThousands[h].replace(/,/g, "")) +
                  Number(this.thousands[i].replace(/,/g, "")) +
                  Number(this.ones[l])
              )
            ),
            headers: [
              {
                text: "Ten thousands",
                value: "ten thousands",
                align: "center",
                sortable: false
              },
              {
                text: "Thousands",
                value: "thousands",
                align: "center",
                sortable: false
              },
              {
                text: "Hundreds",
                value: "hundreds",
                align: "center",
                sortable: false
              },
              {
                text: "Tens",
                value: "tens",
                align: "center",
                sortable: false
              },
              {
                text: "Ones",
                value: "ones",
                align: "center",
                sortable: false
              }
            ],
            placeValues: [
              {
                value: false,
                tenThousands: placeValue(
                  Number(this.tenThousands[h].replace(/,/g, ""))
                ).tenThousands.toString(),
                thousands: placeValue(
                  Number(this.thousands[i].replace(/,/g, ""))
                ).thousands.toString(),
                hundreds: "0",
                tens: "0",
                ones: placeValue(Number(this.ones[l])).ones.toString()
              }
            ],
            answers: [
              {
                number: this.tenThousands[h],
                value: placeValue(
                  Number(this.tenThousands[h].replace(/,/g, ""))
                ).tenThousands.toString(),
                placeValue: this.toSingular(
                  placeValue(
                    Number(this.tenThousands[h].replace(/,/g, ""))
                  ).tenThousands.toString(),
                  "ten thousands"
                )
              },
              {
                number: this.thousands[i],
                value: placeValue(
                  Number(this.thousands[i].replace(/,/g, ""))
                ).thousands.toString(),
                placeValue: this.toSingular(
                  placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  "thousands"
                )
              },
              {
                number: "0",
                value: "0",
                placeValue: "hundreds"
              },
              {
                number: "0",
                value: "0",
                placeValue: "tens"
              },
              {
                number: this.ones[l],
                value: placeValue(Number(this.ones[l])).ones.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.ones[l])).ones.toString(),
                  "ones"
                )
              }
            ],
            tenThousands: true,
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    return questions;
  },
  tenThousandsZeroTensThousands() {
    const questions = [];

    for (var h = 0; h < this.tenThousands.length; h++) {
      for (var j = 0; j < this.hundreds.length; j++) {
        for (var l = 0; l < this.ones.length; l++) {
          questions.push({
            expanded: `${this.tenThousands[h]} + ${this.hundreds[j]} + ${
              this.ones[l]
            }`,
            correct: Intl.NumberFormat().format(
              Math.floor(
                Number(this.tenThousands[h].replace(/,/g, "")) +
                  Number(this.hundreds[j]) +
                  Number(this.ones[l])
              )
            ),
            headers: [
              {
                text: "Ten thousands",
                value: "ten thousands",
                align: "center",
                sortable: false
              },
              {
                text: "Thousands",
                value: "thousands",
                align: "center",
                sortable: false
              },
              {
                text: "Hundreds",
                value: "hundreds",
                align: "center",
                sortable: false
              },
              {
                text: "Tens",
                value: "tens",
                align: "center",
                sortable: false
              },
              {
                text: "Ones",
                value: "ones",
                align: "center",
                sortable: false
              }
            ],
            placeValues: [
              {
                value: false,
                tenThousands: placeValue(
                  Number(this.tenThousands[h].replace(/,/g, ""))
                ).tenThousands.toString(),
                thousands: "0",
                hundreds: placeValue(
                  Number(this.hundreds[j])
                ).hundreds.toString(),
                tens: "0",
                ones: placeValue(Number(this.ones[l])).ones.toString()
              }
            ],
            answers: [
              {
                number: this.tenThousands[h],
                value: placeValue(
                  Number(this.tenThousands[h].replace(/,/g, ""))
                ).tenThousands.toString(),
                placeValue: this.toSingular(
                  placeValue(
                    Number(this.tenThousands[h].replace(/,/g, ""))
                  ).tenThousands.toString(),
                  "ten thousands"
                )
              },
              {
                number: "0",
                value: "0",
                placeValue: "thousands"
              },
              {
                number: this.hundreds[j],
                value: placeValue(Number(this.hundreds[j])).hundreds.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.hundreds[j])).hundreds.toString(),
                  "hundreds"
                )
              },
              {
                number: "0",
                value: "0",
                placeValue: "tens"
              },
              {
                number: this.ones[l],
                value: placeValue(Number(this.ones[l])).ones.toString(),
                placeValue: this.toSingular(
                  placeValue(Number(this.ones[l])).ones.toString(),
                  "ones"
                )
              }
            ],
            tenThousands: true,
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    return questions;
  },
  hundredThousandsQuestions() {
    const questions = [];

    for (var g = 0; g < this.hundredThousands.length; g++) {
      for (var h = 0; h < this.tenThousands.length; h++) {
        for (var i = 0; i < this.thousands.length; i++) {
          for (var j = 0; j < this.hundreds.length; j++) {
            for (var k = 0; k < this.tens.length; k++) {
              for (var l = 0; l < this.ones.length; l++) {
                questions.push({
                  expanded: `${this.hundredThousands[g]} + ${
                    this.tenThousands[h]
                  } + ${this.thousands[i]} + ${this.hundreds[j]} + ${
                    this.tens[k]
                  } + ${this.ones[l]}`,
                  correct: Intl.NumberFormat().format(
                    Math.floor(
                      Number(this.hundredThousands[g].replace(/,/g, "")) +
                        Number(this.tenThousands[h].replace(/,/g, "")) +
                        Number(this.thousands[i].replace(/,/g, "")) +
                        Number(this.hundreds[j]) +
                        Number(this.tens[k]) +
                        Number(this.ones[l])
                    )
                  ),
                  headers: [
                    {
                      text: "Hundred thousands",
                      value: "hundred thousands",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Ten thousands",
                      value: "ten thousands",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Thousands",
                      value: "thousands",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Hundreds",
                      value: "hundreds",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Tens",
                      value: "tens",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Ones",
                      value: "ones",
                      align: "center",
                      sortable: false
                    }
                  ],
                  placeValues: [
                    {
                      value: false,
                      hundredThousands: placeValue(
                        Number(this.hundredThousands[g].replace(/,/g, ""))
                      ).hundredThousands.toString(),
                      tenThousands: placeValue(
                        Number(this.tenThousands[h].replace(/,/g, ""))
                      ).tenThousands.toString(),
                      thousands: placeValue(
                        Number(this.thousands[i].replace(/,/g, ""))
                      ).thousands.toString(),
                      hundreds: placeValue(
                        Number(this.hundreds[j])
                      ).hundreds.toString(),
                      tens: placeValue(Number(this.tens[k])).tens.toString(),
                      ones: placeValue(Number(this.ones[l])).ones.toString()
                    }
                  ],
                  answers: [
                    {
                      number: this.hundredThousands[g],
                      value: placeValue(
                        Number(this.hundredThousands[g].replace(/,/g, ""))
                      ).hundredThousands.toString(),
                      placeValue: this.toSingular(
                        placeValue(
                          Number(this.hundredThousands[g].replace(/,/g, ""))
                        ).hundredThousands.toString(),
                        "hundred thousands"
                      )
                    },
                    {
                      number: this.tenThousands[h],
                      value: placeValue(
                        Number(this.tenThousands[h].replace(/,/g, ""))
                      ).tenThousands.toString(),
                      placeValue: this.toSingular(
                        placeValue(
                          Number(this.tenThousands[h].replace(/,/g, ""))
                        ).tenThousands.toString(),
                        "ten thousands"
                      )
                    },
                    {
                      number: this.thousands[i],
                      value: placeValue(
                        Number(this.thousands[i].replace(/,/g, ""))
                      ).thousands.toString(),
                      placeValue: this.toSingular(
                        placeValue(
                          Number(this.thousands[i].replace(/,/g, ""))
                        ).thousands.toString(),
                        "thousands"
                      )
                    },
                    {
                      number: this.hundreds[j],
                      value: placeValue(
                        Number(this.hundreds[j])
                      ).hundreds.toString(),
                      placeValue: this.toSingular(
                        placeValue(
                          Number(this.hundreds[j])
                        ).hundreds.toString(),
                        "hundreds"
                      )
                    },
                    {
                      number: this.tens[k],
                      value: placeValue(Number(this.tens[k])).tens.toString(),
                      placeValue: this.toSingular(
                        placeValue(Number(this.tens[k])).tens.toString(),
                        "tens"
                      )
                    },
                    {
                      number: this.ones[l],
                      value: placeValue(Number(this.ones[l])).ones.toString(),
                      placeValue: this.toSingular(
                        placeValue(Number(this.ones[l])).ones.toString(),
                        "ones"
                      )
                    }
                  ],
                  hundredThousands: true,
                  id: uuidv4(),
                  rating: 1800
                });
              }
            }
          }
        }
      }
    }

    return questions;
  },
  hundredThousandsZeroTensHundreds() {
    const questions = [];

    for (var g = 0; g < this.hundredThousands.length; g++) {
      for (var h = 0; h < this.tenThousands.length; h++) {
        for (var i = 0; i < this.thousands.length; i++) {
          for (var l = 0; l < this.ones.length; l++) {
            questions.push({
              expanded: `${this.hundredThousands[g]} + ${
                this.tenThousands[h]
              } + ${this.thousands[i]} + ${this.ones[l]}`,
              correct: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.hundredThousands[g].replace(/,/g, "")) +
                    Number(this.tenThousands[h].replace(/,/g, "")) +
                    Number(this.thousands[i].replace(/,/g, "")) +
                    Number(this.ones[l])
                )
              ),
              headers: [
                {
                  text: "Hundred thousands",
                  value: "hundred thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Ten thousands",
                  value: "ten thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Thousands",
                  value: "thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Hundreds",
                  value: "hundreds",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Tens",
                  value: "tens",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Ones",
                  value: "ones",
                  align: "center",
                  sortable: false
                }
              ],
              placeValues: [
                {
                  value: false,
                  hundredThousands: placeValue(
                    Number(this.hundredThousands[g].replace(/,/g, ""))
                  ).hundredThousands.toString(),
                  tenThousands: placeValue(
                    Number(this.tenThousands[h].replace(/,/g, ""))
                  ).tenThousands.toString(),
                  thousands: placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  hundreds: "0",
                  tens: "0",
                  ones: placeValue(Number(this.ones[l])).ones.toString()
                }
              ],
              answers: [
                {
                  number: this.hundredThousands[g],
                  value: placeValue(
                    Number(this.hundredThousands[g].replace(/,/g, ""))
                  ).hundredThousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.hundredThousands[g].replace(/,/g, ""))
                    ).hundredThousands.toString(),
                    "hundred thousands"
                  )
                },
                {
                  number: this.tenThousands[h],
                  value: placeValue(
                    Number(this.tenThousands[h].replace(/,/g, ""))
                  ).tenThousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.tenThousands[h].replace(/,/g, ""))
                    ).tenThousands.toString(),
                    "ten thousands"
                  )
                },
                {
                  number: this.thousands[i],
                  value: placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.thousands[i].replace(/,/g, ""))
                    ).thousands.toString(),
                    "thousands"
                  )
                },
                {
                  number: "0",
                  value: "0",
                  placeValue: "hundreds"
                },
                {
                  number: "0",
                  value: "0",
                  placeValue: "tens"
                },
                {
                  number: this.ones[l],
                  value: placeValue(Number(this.ones[l])).ones.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.ones[l])).ones.toString(),
                    "ones"
                  )
                }
              ],
              hundredThousands: true,
              id: uuidv4(),
              rating: 1800
            });
          }
        }
      }
    }

    return questions;
  },
  hundredThousandsZeroTensThousands() {
    const questions = [];

    for (var g = 0; g < this.hundredThousands.length; g++) {
      for (var h = 0; h < this.tenThousands.length; h++) {
        for (var j = 0; j < this.hundreds.length; j++) {
          for (var l = 0; l < this.ones.length; l++) {
            questions.push({
              expanded: `${this.hundredThousands[g]} + ${
                this.tenThousands[h]
              } + ${this.hundreds[j]} + ${this.ones[l]}`,
              correct: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.hundredThousands[g].replace(/,/g, "")) +
                    Number(this.tenThousands[h].replace(/,/g, "")) +
                    Number(this.hundreds[j]) +
                    Number(this.ones[l])
                )
              ),
              headers: [
                {
                  text: "Hundred thousands",
                  value: "hundred thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Ten thousands",
                  value: "ten thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Thousands",
                  value: "thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Hundreds",
                  value: "hundreds",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Tens",
                  value: "tens",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Ones",
                  value: "ones",
                  align: "center",
                  sortable: false
                }
              ],
              placeValues: [
                {
                  value: false,
                  hundredThousands: placeValue(
                    Number(this.hundredThousands[g].replace(/,/g, ""))
                  ).hundredThousands.toString(),
                  tenThousands: placeValue(
                    Number(this.tenThousands[h].replace(/,/g, ""))
                  ).tenThousands.toString(),
                  thousands: "0",
                  hundreds: placeValue(
                    Number(this.hundreds[j])
                  ).hundreds.toString(),
                  tens: "0",
                  ones: placeValue(Number(this.ones[l])).ones.toString()
                }
              ],
              answers: [
                {
                  number: this.hundredThousands[g],
                  value: placeValue(
                    Number(this.hundredThousands[g].replace(/,/g, ""))
                  ).hundredThousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.hundredThousands[g].replace(/,/g, ""))
                    ).hundredThousands.toString(),
                    "hundred thousands"
                  )
                },
                {
                  number: this.tenThousands[h],
                  value: placeValue(
                    Number(this.tenThousands[h].replace(/,/g, ""))
                  ).tenThousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.tenThousands[h].replace(/,/g, ""))
                    ).tenThousands.toString(),
                    "ten thousands"
                  )
                },
                {
                  number: "0",
                  value: "0",
                  placeValue: "thousands"
                },
                {
                  number: this.hundreds[j],
                  value: placeValue(
                    Number(this.hundreds[j])
                  ).hundreds.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.hundreds[j])).hundreds.toString(),
                    "hundreds"
                  )
                },
                {
                  number: "0",
                  value: "0",
                  placeValue: "tens"
                },
                {
                  number: this.ones[l],
                  value: placeValue(Number(this.ones[l])).ones.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.ones[l])).ones.toString(),
                    "ones"
                  )
                }
              ],
              hundredThousands: true,
              id: uuidv4(),
              rating: 1800
            });
          }
        }
      }
    }

    return questions;
  },
  hundredThousandsZeroHundredsTenthousands() {
    const questions = [];

    for (var g = 0; g < this.hundredThousands.length; g++) {
      for (var i = 0; i < this.thousands.length; i++) {
        for (var k = 0; k < this.tens.length; k++) {
          for (var l = 0; l < this.ones.length; l++) {
            questions.push({
              expanded: `${this.hundredThousands[g]} + ${this.thousands[i]} + ${
                this.tens[k]
              } + ${this.ones[l]}`,
              correct: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.hundredThousands[g].replace(/,/g, "")) +
                    Number(this.thousands[i].replace(/,/g, "")) +
                    Number(this.tens[k]) +
                    Number(this.ones[l])
                )
              ),
              headers: [
                {
                  text: "Hundred thousands",
                  value: "hundred thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Ten thousands",
                  value: "ten thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Thousands",
                  value: "thousands",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Hundreds",
                  value: "hundreds",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Tens",
                  value: "tens",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Ones",
                  value: "ones",
                  align: "center",
                  sortable: false
                }
              ],
              placeValues: [
                {
                  value: false,
                  hundredThousands: placeValue(
                    Number(this.hundredThousands[g].replace(/,/g, ""))
                  ).hundredThousands.toString(),
                  tenThousands: "0",
                  thousands: placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  hundreds: "0",
                  tens: placeValue(Number(this.tens[k])).tens.toString(),
                  ones: placeValue(Number(this.ones[l])).ones.toString()
                }
              ],
              answers: [
                {
                  number: this.hundredThousands[g],
                  value: placeValue(
                    Number(this.hundredThousands[g].replace(/,/g, ""))
                  ).hundredThousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.hundredThousands[g].replace(/,/g, ""))
                    ).hundredThousands.toString(),
                    "hundred thousands"
                  )
                },
                {
                  number: "0",
                  value: "0",
                  placeValue: "ten thousands"
                },
                {
                  number: this.thousands[i],
                  value: placeValue(
                    Number(this.thousands[i].replace(/,/g, ""))
                  ).thousands.toString(),
                  placeValue: this.toSingular(
                    placeValue(
                      Number(this.thousands[i].replace(/,/g, ""))
                    ).thousands.toString(),
                    "thousands"
                  )
                },
                {
                  number: "0",
                  value: "0",
                  placeValue: "hundreds"
                },
                {
                  number: this.tens[k],
                  value: placeValue(Number(this.tens[k])).tens.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.tens[k])).tens.toString(),
                    "tens"
                  )
                },
                {
                  number: this.ones[l],
                  value: placeValue(Number(this.ones[l])).ones.toString(),
                  placeValue: this.toSingular(
                    placeValue(Number(this.ones[l])).ones.toString(),
                    "ones"
                  )
                }
              ],
              hundredThousands: true,
              id: uuidv4(),
              rating: 1800
            });
          }
        }
      }
    }

    return questions;
  },
  toSingular(value, string) {
    return value === "1" ? string.slice(0, -1) : string;
  },
  dealer(variation, numberOfExercises, shuffleFisher, randomFromArray) {
    const shuffled = shuffleFisher(variation);

    return randomFromArray(shuffled, numberOfExercises);
  },
  all() {
    return this.dealer(
      this.thousandsQuestions(),
      200,
      shuffleFisher,
      randomFromArray
    ).concat(
      this.dealer(
        this.thousandsZeroOnes(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.thousandsZeroTens(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.thousandsZeroHundreds(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.tenThousandsQuestions(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.tenThousandsZeroTens(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.tenThousandsZeroTensHundreds(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.tenThousandsZeroTensThousands(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.hundredThousandsQuestions(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.hundredThousandsZeroTensHundreds(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.hundredThousandsZeroTensThousands(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.dealer(
        this.hundredThousandsZeroHundredsTenthousands(),
        200,
        shuffleFisher,
        randomFromArray
      )
    );
  }
};
