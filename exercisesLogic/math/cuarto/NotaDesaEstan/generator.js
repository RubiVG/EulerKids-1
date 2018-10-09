const uuidv4 = require("uuid/v4");
const fs = require("fs");
const shuffleFisher = require("../../../../utilities/random").shuffleFisher;
const randomFromArray = require("../../../../utilities/random").randomFromArray;

const logic = {
  centenasMillar: [
    "200,000",
    "300,000",
    "400,000",
    "500,000",
    "600,000",
    "700,000",
    "800,000",
    "900,000"
  ],
  decenasMillar: [
    "20,000",
    "30,000",
    "40,000",
    "50,000",
    "60,000",
    "70,000",
    "80,000",
    "90,000"
  ],
  unidadesMillar: [
    "2,000",
    "3,000",
    "4,000",
    "5,000",
    "6,000",
    "7,000",
    "8,000",
    "9,000"
  ],
  centenas: ["200", "300", "400", "500", "600", "700", "800", "900"],
  decenas: ["20", "30", "40", "50", "60", "70", "80", "90"],
  unidades: ["2", "3", "4", "5", "6", "7", "8", "9"],
  unidadesEs: ["1"],
  cero: ["0"],
  son: "son",
  es: "es",
  unidadesMillarSon() {
    const preguntas = [];

    for (var i = 0; i < this.unidadesMillar.length; i++) {
      for (var j = 0; j < this.centenas.length; j++) {
        for (var k = 0; k < this.decenas.length; k++) {
          for (var l = 0; l < this.unidades.length; l++) {
            preguntas.push({
              //6,000 + 800 + 50 + 7
              escribe: `${this.unidadesMillar[i]} + ${this.centenas[j]} + ${
                this.decenas[k]
              } + ${this.unidades[l]}`,
              correcta: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.unidadesMillar[i].replace(/,/g, "")) +
                    Number(this.centenas[j]) +
                    Number(this.decenas[k]) +
                    Number(this.unidades[l])
                )
              ),
              headers: [
                {
                  text: "Unidades de Millar",
                  value: "unidadesMillar",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Centenas",
                  value: "centenas",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Decenas",
                  value: "decenas",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Unidades",
                  value: "unidades",
                  align: "center",
                  sortable: false
                }
              ],
              valores: [
                {
                  value: false,
                  unidadesMillar: this.valorPosicional(
                    Number(this.unidadesMillar[i].replace(/,/g, ""))
                  ).millares.toString(),
                  centenas: this.valorPosicional(
                    Number(this.centenas[j])
                  ).centenas.toString(),
                  decenas: this.valorPosicional(
                    Number(this.decenas[k])
                  ).decenas.toString(),
                  unidades: this.valorPosicional(
                    Number(this.unidades[l])
                  ).unidades.toString()
                }
              ],
              respuestas: [
                {
                  numero: this.unidadesMillar[i],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.unidadesMillar[i].replace(/,/g, ""))
                  ).millares.toString(),
                  unidad: "unidades de millar"
                },
                {
                  numero: this.centenas[j],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.centenas[j])
                  ).centenas.toString(),
                  unidad: "centenas"
                },
                {
                  numero: this.decenas[k],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.decenas[k])
                  ).decenas.toString(),
                  unidad: "decenas"
                },
                {
                  numero: this.unidades[l],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.unidades[l])
                  ).unidades.toString(),
                  unidad: "unidades"
                }
              ],
              unidadesMillar: true,
              id: uuidv4(),
              rating: 800
            });
          }
        }
      }
    }
    return preguntas;
  },
  unidadesMillarUnoUnidades() {
    const preguntas = [];

    for (var i = 0; i < this.unidadesMillar.length; i++) {
      for (var j = 0; j < this.centenas.length; j++) {
        for (var k = 0; k < this.decenas.length; k++) {
          for (var l = 0; l < this.unidadesEs.length; l++) {
            preguntas.push({
              escribe: `${this.unidadesMillar[i]} + ${this.centenas[j]} + ${
                this.decenas[k]
              } + ${this.unidadesEs[l]}`,
              correcta: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.unidadesMillar[i].replace(/,/g, "")) +
                    Number(this.centenas[j]) +
                    Number(this.decenas[k]) +
                    Number(this.unidadesEs[l])
                )
              ),
              headers: [
                {
                  text: "Unidades de Millar",
                  value: "unidadesMillar",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Centenas",
                  value: "centenas",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Decenas",
                  value: "decenas",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Unidades",
                  value: "unidades",
                  align: "center",
                  sortable: false
                }
              ],
              valores: [
                {
                  value: false,
                  unidadesMillar: this.valorPosicional(
                    Number(this.unidadesMillar[i].replace(/,/g, ""))
                  ).millares.toString(),
                  centenas: this.valorPosicional(
                    Number(this.centenas[j])
                  ).centenas.toString(),
                  decenas: this.valorPosicional(
                    Number(this.decenas[k])
                  ).decenas.toString(),
                  unidades: this.valorPosicional(
                    Number(this.unidadesEs[l])
                  ).unidades.toString()
                }
              ],
              respuestas: [
                {
                  numero: this.unidadesMillar[i],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.unidadesMillar[i].replace(/,/g, ""))
                  ).millares.toString(),
                  unidad: "unidades de millar"
                },
                {
                  numero: this.centenas[j],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.centenas[j])
                  ).centenas.toString(),
                  unidad: "centenas"
                },
                {
                  numero: this.decenas[k],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.decenas[k])
                  ).decenas.toString(),
                  unidad: "decenas"
                },
                {
                  numero: this.unidadesEs[l],
                  verbo: "es",
                  valor: this.valorPosicional(
                    Number(this.unidadesEs[l])
                  ).unidades.toString(),
                  unidad: "unidad"
                }
              ],
              unidadesMillar: true,
              id: uuidv4(),
              rating: 800
            });
          }
        }
      }
    }
    return preguntas;
  },
  unidadesMillarCeroDecenas() {
    const preguntas = [];

    for (var i = 0; i < this.unidadesMillar.length; i++) {
      for (var j = 0; j < this.centenas.length; j++) {
        for (var k = 0; k < this.cero.length; k++) {
          for (var l = 0; l < this.unidades.length; l++) {
            preguntas.push({
              escribe: `${this.unidadesMillar[i]} + ${this.centenas[j]} + ${
                this.unidades[l]
              }`,
              correcta: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.unidadesMillar[i].replace(/,/g, "")) +
                    Number(this.centenas[j]) +
                    Number(this.unidades[l])
                )
              ),
              headers: [
                {
                  text: "Unidades de Millar",
                  value: "unidadesMillar",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Centenas",
                  value: "centenas",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Decenas",
                  value: "decenas",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Unidades",
                  value: "unidades",
                  align: "center",
                  sortable: false
                }
              ],
              valores: [
                {
                  value: false,
                  unidadesMillar: this.valorPosicional(
                    Number(this.unidadesMillar[i].replace(/,/g, ""))
                  ).millares.toString(),
                  centenas: this.valorPosicional(
                    Number(this.centenas[j])
                  ).centenas.toString(),
                  decenas: this.valorPosicional(
                    Number(this.cero[k])
                  ).decenas.toString(),
                  unidades: this.valorPosicional(
                    Number(this.unidades[l])
                  ).unidades.toString()
                }
              ],
              respuestas: [
                {
                  numero: this.unidadesMillar[i],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.unidadesMillar[i].replace(/,/g, ""))
                  ).millares.toString(),
                  unidad: "unidades de millar"
                },
                {
                  numero: this.centenas[j],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.centenas[j])
                  ).centenas.toString(),
                  unidad: "centenas"
                },
                {
                  numero: "",
                  verbo: "Hay",
                  valor: "0",
                  unidad: "decenas"
                },
                {
                  numero: this.unidades[l],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.unidades[l])
                  ).unidades.toString(),
                  unidad: "unidades"
                }
              ],
              unidadesMillar: true,
              id: uuidv4(),
              rating: 1200
            });
          }
        }
      }
    }
    return preguntas;
  },
  unidadesMillarCeroCentenas() {
    const preguntas = [];

    for (var i = 0; i < this.unidadesMillar.length; i++) {
      for (var j = 0; j < this.cero.length; j++) {
        for (var k = 0; k < this.decenas.length; k++) {
          for (var l = 0; l < this.unidades.length; l++) {
            preguntas.push({
              //6,000 + 800 + 50 + 7
              escribe: `${this.unidadesMillar[i]} + ${this.decenas[k]} + ${
                this.unidades[l]
              }`,
              correcta: Intl.NumberFormat().format(
                Math.floor(
                  Number(this.unidadesMillar[i].replace(/,/g, "")) +
                    Number(this.decenas[k]) +
                    Number(this.unidades[l])
                )
              ),
              headers: [
                {
                  text: "Unidades de Millar",
                  value: "unidadesMillar",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Centenas",
                  value: "centenas",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Decenas",
                  value: "decenas",
                  align: "center",
                  sortable: false
                },
                {
                  text: "Unidades",
                  value: "unidades",
                  align: "center",
                  sortable: false
                }
              ],
              valores: [
                {
                  value: false,
                  unidadesMillar: this.valorPosicional(
                    Number(this.unidadesMillar[i].replace(/,/g, ""))
                  ).millares.toString(),
                  centenas: this.valorPosicional(
                    Number(this.cero[j])
                  ).centenas.toString(),
                  decenas: this.valorPosicional(
                    Number(this.decenas[k])
                  ).decenas.toString(),
                  unidades: this.valorPosicional(
                    Number(this.unidades[l])
                  ).unidades.toString()
                }
              ],
              respuestas: [
                {
                  numero: this.unidadesMillar[i],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.unidadesMillar[i].replace(/,/g, ""))
                  ).millares.toString(),
                  unidad: "unidades de millar"
                },
                {
                  numero: "",
                  verbo: "Hay",
                  valor: "0",
                  unidad: "centenas"
                },
                {
                  numero: this.decenas[k],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.decenas[k])
                  ).decenas.toString(),
                  unidad: "decenas"
                },
                {
                  numero: this.unidades[l],
                  verbo: "son",
                  valor: this.valorPosicional(
                    Number(this.unidades[l])
                  ).unidades.toString(),
                  unidad: "unidades"
                }
              ],
              unidadesMillar: true,
              id: uuidv4(),
              rating: 1200
            });
          }
        }
      }
    }
    return preguntas;
  },
  decenasMillarSon() {
    const preguntas = [];

    for (var h = 0; h < this.decenasMillar.length; h++) {
      for (var i = 0; i < this.unidadesMillar.length; i++) {
        for (var j = 0; j < this.centenas.length; j++) {
          for (var k = 0; k < this.decenas.length; k++) {
            for (var l = 0; l < this.unidades.length; l++) {
              preguntas.push({
                //6,000 + 800 + 50 + 7
                escribe: `${this.decenasMillar[h]} + ${
                  this.unidadesMillar[i]
                } + ${this.centenas[j]} + ${this.decenas[k]} + ${
                  this.unidades[l]
                }`,
                correcta: Intl.NumberFormat().format(
                  Math.floor(
                    Number(this.decenasMillar[h].replace(/,/g, "")) +
                      Number(this.unidadesMillar[i].replace(/,/g, "")) +
                      Number(this.centenas[j]) +
                      Number(this.decenas[k]) +
                      Number(this.unidades[l])
                  )
                ),
                headers: [
                  {
                    text: "Decenas de Millar",
                    value: "decenasMillar",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Unidades de Millar",
                    value: "unidadesMillar",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Centenas",
                    value: "centenas",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Decenas",
                    value: "decenas",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Unidades",
                    value: "unidades",
                    align: "center",
                    sortable: false
                  }
                ],
                valores: [
                  {
                    value: false,
                    decenasMillar: this.valorPosicional(
                      Number(this.decenasMillar[h].replace(/,/g, ""))
                    ).diezmillares.toString(),
                    unidadesMillar: this.valorPosicional(
                      Number(this.unidadesMillar[i].replace(/,/g, ""))
                    ).millares.toString(),
                    centenas: this.valorPosicional(
                      Number(this.centenas[j])
                    ).centenas.toString(),
                    decenas: this.valorPosicional(
                      Number(this.decenas[k])
                    ).decenas.toString(),
                    unidades: this.valorPosicional(
                      Number(this.unidades[l])
                    ).unidades.toString()
                  }
                ],
                respuestas: [
                  {
                    numero: this.decenasMillar[h],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.decenasMillar[h].replace(/,/g, ""))
                    ).diezmillares.toString(),
                    unidad: "decenas de millar"
                  },
                  {
                    numero: this.unidadesMillar[i],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.unidadesMillar[i].replace(/,/g, ""))
                    ).millares.toString(),
                    unidad: "unidades de millar"
                  },
                  {
                    numero: this.centenas[j],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.centenas[j])
                    ).centenas.toString(),
                    unidad: "centenas"
                  },
                  {
                    numero: this.decenas[k],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.decenas[k])
                    ).decenas.toString(),
                    unidad: "decenas"
                  },
                  {
                    numero: this.unidades[l],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.unidades[l])
                    ).unidades.toString(),
                    unidad: "unidades"
                  }
                ],
                decenasMillar: true,
                id: uuidv4(),
                rating: 1200
              });
            }
          }
        }
      }
    }

    return preguntas;
  },
  decenasMillarCeroCentenas() {
    const preguntas = [];

    for (var h = 0; h < this.decenasMillar.length; h++) {
      for (var i = 0; i < this.unidadesMillar.length; i++) {
        for (var j = 0; j < this.cero.length; j++) {
          for (var k = 0; k < this.decenas.length; k++) {
            for (var l = 0; l < this.unidades.length; l++) {
              preguntas.push({
                //6,000 + 800 + 50 + 7
                escribe: `${this.decenasMillar[h]} + ${
                  this.unidadesMillar[i]
                } + ${this.decenas[k]} + ${this.unidades[l]}`,
                correcta: Intl.NumberFormat().format(
                  Math.floor(
                    Number(this.decenasMillar[h].replace(/,/g, "")) +
                      Number(this.unidadesMillar[i].replace(/,/g, "")) +
                      Number(this.decenas[k]) +
                      Number(this.unidades[l])
                  )
                ),
                headers: [
                  {
                    text: "Decenas de Millar",
                    value: "decenasMillar",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Unidades de Millar",
                    value: "unidadesMillar",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Centenas",
                    value: "centenas",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Decenas",
                    value: "decenas",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Unidades",
                    value: "unidades",
                    align: "center",
                    sortable: false
                  }
                ],
                valores: [
                  {
                    value: false,
                    decenasMillar: this.valorPosicional(
                      Number(this.decenasMillar[h].replace(/,/g, ""))
                    ).diezmillares.toString(),
                    unidadesMillar: this.valorPosicional(
                      Number(this.unidadesMillar[i].replace(/,/g, ""))
                    ).millares.toString(),
                    centenas: this.valorPosicional(
                      Number(this.cero[j])
                    ).centenas.toString(),
                    decenas: this.valorPosicional(
                      Number(this.decenas[k])
                    ).decenas.toString(),
                    unidades: this.valorPosicional(
                      Number(this.unidades[l])
                    ).unidades.toString()
                  }
                ],
                respuestas: [
                  {
                    numero: this.decenasMillar[h],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.decenasMillar[h].replace(/,/g, ""))
                    ).diezmillares.toString(),
                    unidad: "decenas de millar"
                  },
                  {
                    numero: this.unidadesMillar[i],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.unidadesMillar[i].replace(/,/g, ""))
                    ).millares.toString(),
                    unidad: "unidades de millar"
                  },
                  {
                    numero: "",
                    verbo: "Hay",
                    valor: "0",
                    unidad: "centenas"
                  },
                  {
                    numero: this.decenas[k],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.decenas[k])
                    ).decenas.toString(),
                    unidad: "decenas"
                  },
                  {
                    numero: this.unidades[l],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.unidades[l])
                    ).unidades.toString(),
                    unidad: "unidades"
                  }
                ],
                decenasMillar: true,
                id: uuidv4(),
                rating: 1800
              });
            }
          }
        }
      }
    }

    return preguntas;
  },
  decenasMillarCeroMillares() {
    const preguntas = [];

    for (var h = 0; h < this.decenasMillar.length; h++) {
      for (var i = 0; i < this.cero.length; i++) {
        for (var j = 0; j < this.centenas.length; j++) {
          for (var k = 0; k < this.decenas.length; k++) {
            for (var l = 0; l < this.unidades.length; l++) {
              preguntas.push({
                //6,000 + 800 + 50 + 7
                escribe: `${this.decenasMillar[h]} + ${this.centenas[j]} + ${
                  this.decenas[k]
                } + ${this.unidades[l]}`,
                correcta: Intl.NumberFormat().format(
                  Math.floor(
                    Number(this.decenasMillar[h].replace(/,/g, "")) +
                      Number(this.centenas[j]) +
                      Number(this.decenas[k]) +
                      Number(this.unidades[l])
                  )
                ),
                headers: [
                  {
                    text: "Decenas de Millar",
                    value: "decenasMillar",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Unidades de Millar",
                    value: "unidadesMillar",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Centenas",
                    value: "centenas",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Decenas",
                    value: "decenas",
                    align: "center",
                    sortable: false
                  },
                  {
                    text: "Unidades",
                    value: "unidades",
                    align: "center",
                    sortable: false
                  }
                ],
                valores: [
                  {
                    value: false,
                    decenasMillar: this.valorPosicional(
                      Number(this.decenasMillar[h].replace(/,/g, ""))
                    ).diezmillares.toString(),
                    unidadesMillar: this.valorPosicional(
                      Number(this.cero[i].replace(/,/g, ""))
                    ).millares.toString(),
                    centenas: this.valorPosicional(
                      Number(this.centenas[j])
                    ).centenas.toString(),
                    decenas: this.valorPosicional(
                      Number(this.decenas[k])
                    ).decenas.toString(),
                    unidades: this.valorPosicional(
                      Number(this.unidades[l])
                    ).unidades.toString()
                  }
                ],
                respuestas: [
                  {
                    numero: this.decenasMillar[h],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.decenasMillar[h].replace(/,/g, ""))
                    ).diezmillares.toString(),
                    unidad: "decenas de millar"
                  },
                  {
                    numero: "",
                    verbo: "Hay",
                    valor: "0",
                    unidad: "unidades de millar"
                  },
                  {
                    numero: this.centenas[j],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.centenas[j])
                    ).centenas.toString(),
                    unidad: "centenas"
                  },
                  {
                    numero: this.decenas[k],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.decenas[k])
                    ).decenas.toString(),
                    unidad: "decenas"
                  },
                  {
                    numero: this.unidades[l],
                    verbo: "son",
                    valor: this.valorPosicional(
                      Number(this.unidades[l])
                    ).unidades.toString(),
                    unidad: "unidades"
                  }
                ],
                decenasMillar: true,
                id: uuidv4(),
                rating: 1800
              });
            }
          }
        }
      }
    }

    return preguntas;
  },
  centenasMillarSon() {
    const preguntas = [];

    for (var g = 0; g < this.centenasMillar.length; g++) {
      for (var h = 0; h < this.decenasMillar.length; h++) {
        for (var i = 0; i < this.unidadesMillar.length; i++) {
          for (var j = 0; j < this.centenas.length; j++) {
            for (var k = 0; k < this.decenas.length; k++) {
              for (var l = 0; l < this.unidades.length; l++) {
                preguntas.push({
                  escribe: `${this.centenasMillar[g]} + ${
                    this.decenasMillar[h]
                  } + ${this.unidadesMillar[i]} + ${this.centenas[j]} + ${
                    this.decenas[k]
                  } + ${this.unidades[l]}`,
                  correcta: Intl.NumberFormat().format(
                    Math.floor(
                      Number(this.centenasMillar[g].replace(/,/g, "")) +
                        Number(this.decenasMillar[h].replace(/,/g, "")) +
                        Number(this.unidadesMillar[i].replace(/,/g, "")) +
                        Number(this.centenas[j]) +
                        Number(this.decenas[k]) +
                        Number(this.unidades[l])
                    )
                  ),
                  headers: [
                    {
                      text: "Centenas de Millar",
                      value: "centenasMillar",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Decenas de Millar",
                      value: "decenasMillar",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Unidades de Millar",
                      value: "unidadesMillar",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Centenas",
                      value: "centenas",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Decenas",
                      value: "decenas",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Unidades",
                      value: "unidades",
                      align: "center",
                      sortable: false
                    }
                  ],
                  valores: [
                    {
                      value: false,
                      centenasMillar: this.valorPosicional(
                        Number(this.centenasMillar[g].replace(/,/g, ""))
                      ).cienmillares.toString(),
                      decenasMillar: this.valorPosicional(
                        Number(this.decenasMillar[h].replace(/,/g, ""))
                      ).diezmillares.toString(),
                      unidadesMillar: this.valorPosicional(
                        Number(this.unidadesMillar[i].replace(/,/g, ""))
                      ).millares.toString(),
                      centenas: this.valorPosicional(
                        Number(this.centenas[j])
                      ).centenas.toString(),
                      decenas: this.valorPosicional(
                        Number(this.decenas[k])
                      ).decenas.toString(),
                      unidades: this.valorPosicional(
                        Number(this.unidades[l])
                      ).unidades.toString()
                    }
                  ],
                  respuestas: [
                    {
                      numero: this.centenasMillar[g],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.centenasMillar[g].replace(/,/g, ""))
                      ).cienmillares.toString(),
                      unidad: "centenas de millar"
                    },
                    {
                      numero: this.decenasMillar[h],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.decenasMillar[h].replace(/,/g, ""))
                      ).diezmillares.toString(),
                      unidad: "decenas de millar"
                    },
                    {
                      numero: this.unidadesMillar[i],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.unidadesMillar[i].replace(/,/g, ""))
                      ).millares.toString(),
                      unidad: "unidades de millar"
                    },
                    {
                      numero: this.centenas[j],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.centenas[j])
                      ).centenas.toString(),
                      unidad: "centenas"
                    },
                    {
                      numero: this.decenas[k],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.decenas[k])
                      ).decenas.toString(),
                      unidad: "decenas"
                    },
                    {
                      numero: this.unidades[l],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.unidades[l])
                      ).unidades.toString(),
                      unidad: "unidades"
                    }
                  ],
                  centenasMillar: true,
                  id: uuidv4(),
                  rating: 1800
                });
              }
            }
          }
        }
      }
    }

    return preguntas;
  },
  centenasMillarCeroMillaresYDecenas() {
    const preguntas = [];

    for (var g = 0; g < this.centenasMillar.length; g++) {
      for (var h = 0; h < this.decenasMillar.length; h++) {
        for (var i = 0; i < this.cero.length; i++) {
          for (var j = 0; j < this.centenas.length; j++) {
            for (var k = 0; k < this.cero.length; k++) {
              for (var l = 0; l < this.unidades.length; l++) {
                preguntas.push({
                  escribe: `${this.centenasMillar[g]} + ${
                    this.decenasMillar[h]
                  } + ${this.centenas[j]} + ${this.unidades[l]}`,
                  correcta: Intl.NumberFormat().format(
                    Math.floor(
                      Number(this.centenasMillar[g].replace(/,/g, "")) +
                        Number(this.decenasMillar[h].replace(/,/g, "")) +
                        Number(this.centenas[j]) +
                        Number(this.unidades[l])
                    )
                  ),
                  headers: [
                    {
                      text: "Centenas de Millar",
                      value: "centenasMillar",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Decenas de Millar",
                      value: "decenasMillar",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Unidades de Millar",
                      value: "unidadesMillar",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Centenas",
                      value: "centenas",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Decenas",
                      value: "decenas",
                      align: "center",
                      sortable: false
                    },
                    {
                      text: "Unidades",
                      value: "unidades",
                      align: "center",
                      sortable: false
                    }
                  ],
                  valores: [
                    {
                      value: false,
                      centenasMillar: this.valorPosicional(
                        Number(this.centenasMillar[g].replace(/,/g, ""))
                      ).cienmillares.toString(),
                      decenasMillar: this.valorPosicional(
                        Number(this.decenasMillar[h].replace(/,/g, ""))
                      ).diezmillares.toString(),
                      unidadesMillar: this.valorPosicional(
                        Number(this.cero[i].replace(/,/g, ""))
                      ).millares.toString(),
                      centenas: this.valorPosicional(
                        Number(this.centenas[j])
                      ).centenas.toString(),
                      decenas: this.valorPosicional(
                        Number(this.cero[k])
                      ).decenas.toString(),
                      unidades: this.valorPosicional(
                        Number(this.unidades[l])
                      ).unidades.toString()
                    }
                  ],
                  respuestas: [
                    {
                      numero: this.centenasMillar[g],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.centenasMillar[g].replace(/,/g, ""))
                      ).cienmillares.toString(),
                      unidad: "centenas de millar"
                    },
                    {
                      numero: this.decenasMillar[h],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.decenasMillar[h].replace(/,/g, ""))
                      ).diezmillares.toString(),
                      unidad: "decenas de millar"
                    },
                    {
                      numero: "",
                      verbo: "Hay",
                      valor: "0",
                      unidad: "unidades de millar"
                    },
                    {
                      numero: this.centenas[j],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.centenas[j])
                      ).centenas.toString(),
                      unidad: "centenas"
                    },
                    {
                      numero: "",
                      verbo: "Hay",
                      valor: "0",
                      unidad: "decenas"
                    },
                    {
                      numero: this.unidades[l],
                      verbo: "son",
                      valor: this.valorPosicional(
                        Number(this.unidades[l])
                      ).unidades.toString(),
                      unidad: "unidades"
                    }
                  ],
                  centenasMillar: true,
                  id: uuidv4(),
                  rating: 1800
                });
              }
            }
          }
        }
      }
    }

    return preguntas;
  },
  valorPosicional(numero) {
    var unidades = numero % 10;
    var decenas = Math.floor((numero / 10) % 10);
    var centenas = Math.floor((numero / 100) % 10);
    var millares = Math.floor((numero / 1000) % 10);
    var diezmillares = Math.floor((numero / 10000) % 10);
    var cienmillares = Math.floor((numero / 100000) % 10);
    return {
      unidades: unidades,
      decenas: decenas,
      centenas: centenas,
      millares: millares,
      diezmillares: diezmillares,
      cienmillares: cienmillares
    };
  },
  repartidor(variante, NumeroEjercicios, shuffleFisher, randomFromArray) {
    const shuffled = shuffleFisher(variante);

    return randomFromArray(shuffled, NumeroEjercicios);
  },
  all() {
    return this.repartidor(
      this.unidadesMillarSon(),
      200,
      shuffleFisher,
      randomFromArray
    ).concat(
      this.repartidor(
        this.unidadesMillarUnoUnidades(),
        100,
        shuffleFisher,
        randomFromArray
      ),
      this.repartidor(
        this.unidadesMillarCeroDecenas(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.repartidor(
        this.unidadesMillarCeroCentenas(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.repartidor(
        this.decenasMillarSon(),
        100,
        shuffleFisher,
        randomFromArray
      ),
      this.repartidor(
        this.decenasMillarCeroCentenas(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.repartidor(
        this.decenasMillarCeroMillares(),
        200,
        shuffleFisher,
        randomFromArray
      ),
      this.repartidor(
        this.centenasMillarSon(),
        100,
        shuffleFisher,
        randomFromArray
      ),
      this.repartidor(
        this.centenasMillarCeroMillaresYDecenas(),
        200,
        shuffleFisher,
        randomFromArray
      )
    );
  }
};

// console.log(
//   // logic.all().map(e => {
//   //   return e.respuestas;
//   // })
// );
const isEqual = require("lodash.isequal");
const uniqWith = require("lodash.uniqwith");
const uniqBy = require("lodash.uniqby");
// let ejercicio = logic.all();
// console.log(uniqWith(ejercicio, isEqual).length);
// console.log(uniqBy(ejercicio, "id").length);
// let string = JSON.stringify(ejercicio);

// fs.writeFile("NotacionDesarrolladaEstandar.json", string, function(err) {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
// });
