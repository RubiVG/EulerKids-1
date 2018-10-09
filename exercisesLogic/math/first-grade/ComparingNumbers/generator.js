const uuidv4 = require("uuid/v4");
const fs = require("fs");
const katex = require("katex");

const logic = {
  Uno() {
    const cuatro = katex.renderToString("4");
    const seis = katex.renderToString("6");

    return {
      operacion: `
        <div>
          Javier y Rosita fueron a la tienda de dulces, cada uno compró una bolsa diferente.
        </div>
        <div>
          ¿Quién compró la bolsa con <b><span class="blue--text darken--1--text">más</span></b>
          dulces?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            <div>
              Notemos que la bolsa de Rosita está más llena.
            </div>
            <div >
              Cuando contamos los dulces de cada bolsa podemos darnos cuenta que la bolsa de Javier
              sólo tiene <span class="blue--text text--darken-1 katex">${cuatro}</span>
              dulces y la de Rosita tiene <span class="blue--text text--darken-1 katex" >${seis}</span> dulces.
            </div>
          </div>
        `,
      imagen1: "rosita6.svg",
      imagen2: "javier4.svg",
      correcta: "rosita6.svg",
      imagenR1: "rosita6_R.svg",
      imagenR2: "javier4_R.svg",
      id: uuidv4(),
      rating: 800
    };
  },
  Dos() {
    const tres = katex.renderToString("3");
    const ocho = katex.renderToString("8");

    return {
      operacion: `
        <div>
          Susana y Paco salieron en noche de brujas a pedir su calaverita,
          al llegar a su casa compararon la cantidad de dulces que recolectaron.
        </div>
        <div>
          ¿Quién recolectó <b><span class="blue--text darken--1--text">más</span></b>
          dulces?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            <div>
              Notemos que la calaverita de Susana tiene menos dulces
              que la de Paco.
            </div>
            <div >
              Cuando contamos los dulces de cada calaverita podemos darnos cuenta que Susana
              recolectó solo <span class="blue--text text--darken-1 katex" >${tres}</span>
              dulces y Paco recolectó <span class="blue--text text--darken-1 katex" >${ocho}</span> dulces.
            </div>
          </div>
        `,
      imagen1: "paco8.svg",
      imagen2: "susana3.svg",
      correcta: "paco8.svg",
      imagenR1: "susana3_R.svg",
      imagenR2: "paco8_R.svg",
      id: uuidv4(),
      rating: 800
    };
  },
  Tres() {
    const dos = katex.renderToString("2");
    const ocho = katex.renderToString("8");
    const cinco = katex.renderToString("5");

    return {
      operacion: `
        <div>
          La mamá de Andrea y Mariana encontró <span class="katex" >${dos}</span>
          cajas de galletas en su recámara. Las cajas tenían la misma cantidad de galletas.
        </div>
        <div>
          ¿Quién comió <b><span class="blue--text darken--1--text">más</span></b>
          galletas?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            <div>
              Si las cajas de galletas tenían la misma cantidad, la caja con menos
              galletas será de la niña que ha comido más.
            </div>
            <div>
              Cuando contamos las galletas notamos que la caja de Andrea tiene
              <span class="blue--text text--darken-1 katex" >${ocho}</span> y la de mariana tiene
              <span class="blue--text text--darken-1 katex" >${cinco}</span>.
            </div>
          </div>
        `,
      imagen1: "mariana5.svg",
      imagen2: "andrea8.svg",
      correcta: "mariana5.svg",
      imagenR1: "andrea8_R.svg",
      imagenR2: "mariana5_R.svg",
      id: uuidv4(),
      rating: 1800
    };
  },
  Cuatro() {
    const dos = katex.renderToString("2");
    const nueve = katex.renderToString("9");

    return {
      operacion: `
        <div>
          Chucho y Tony fueron a la fiesta de cumpleaños de su mejor amigo.
          Después de un concurso ganaron algunas pelotas.
        </div>
        <div>
          ¿Quién ganó <b><span class="blue--text darken--1--text">menos</span></b>
          pelotas?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            <div>
              Al ver los dos premios podemos notar que Chucho ganó
              <span class="blue--text text--darken-1 katex" >${dos}</span> pelotas y Tony ganó
              <span class="blue--text text--darken-1 katex" >${nueve}</span> pelotas.
            </div>
          </div>
        `,
      imagen1: "chucho2.svg",
      imagen2: "tony9.svg",
      correcta: "chucho2.svg",
      imagenR1: "chucho2_R.svg",
      imagenR2: "tony9_R.svg",
      id: uuidv4(),
      rating: 800
    };
  },
  Cinco() {
    const num1 = katex.renderToString("7");
    const num2 = katex.renderToString("3");

    return {
      operacion: `
        <div>
          La maestra pidió a sus alumnos que hicieran un dibujo del universo.
          Karlita y Manuel agregaron estrellas a su dibujo.
        </div>
        <div>
          ¿Quién agregó <b><span class="blue--text darken--1--text">más</span></b>
          estrellas?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Al contar cuantas estrellas hay en cada dibujo podemos notar que Karlita
            dibujó <span class="blue--text text--darken-1 katex" >${num1}</span> y Manuel solo dibujó
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "karlita7.svg",
      imagen2: "manuel3.svg",
      correcta: "karlita7.svg",
      imagenR1: "karlita7_R.svg",
      imagenR2: "manuel3_R.svg",
      id: uuidv4(),
      rating: 800
    };
  },
  Seis() {
    const num1 = katex.renderToString("10");
    const num2 = katex.renderToString("5");

    return {
      operacion: `
        <div>
          El martes pasado Pedro y Sofía fueron al museo de antropología.
          En su visita les regalaron calcomanías de dinosaurios.
        </div>
        <div>
          ¿Quién obtuvo <b><span class="blue--text darken--1--text">más</span></b>
          calcomanías?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            La planilla de calcomanías de Pedro tiene
            <span class="blue--text text--darken-1 katex" >${num1}</span> dinosaurios,
            mientras que Sofía tiene
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "pedro10.svg",
      imagen2: "sofia5.svg",
      correcta: "pedro10.svg",
      imagenR1: "pedro10_R.svg",
      imagenR2: "sofia5_R.svg",
      id: uuidv4(),
      rating: 1800
    };
  },
  Siete() {
    const num1 = katex.renderToString("1");
    const num2 = katex.renderToString("2");

    return {
      operacion: `
        <div>
          Luis y Raúl estaban armando cohetes para jugar a ser astronautas.
        </div>
        <div>
          ¿Quién armó <b><span class="blue--text darken--1--text">menos</span></b>
          cohetes?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Al ver las imágenes podemos observar que Luis armó 
            <span class="blue--text text--darken-1 katex" >${num1}</span> cohete y Raúl armó
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "luis1.svg",
      imagen2: "raul2.svg",
      correcta: "luis1.svg",
      imagenR1: "luis1_R.svg",
      imagenR2: "raul2_R.svg",
      id: uuidv4(),
      rating: 800
    };
  },
  Ocho() {
    const num1 = katex.renderToString("7");
    const num2 = katex.renderToString("6");

    return {
      operacion: `
        <div>
          Bety y Angélica fueron al parque a jugar a las exploradoras.
          Debían encontrar la mayor cantidad de corcholatas.
        </div>
        <div>
          ¿Quién encontró <b><span class="blue--text darken--1--text">más</span></b>
          corcholatas?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Bety encontró
            <span class="blue--text text--darken-1 katex" >${num1}</span> corcholatas y Angélica encontró 
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "bety7.svg",
      imagen2: "angelica6.svg",
      correcta: "bety7.svg",
      imagenR1: "bety7_R.svg",
      imagenR2: "angelica6_R.svg",
      id: uuidv4(),
      rating: 1200
    };
  },
  Nueve() {
    const num1 = katex.renderToString("5");
    const num2 = katex.renderToString("4");

    return {
      operacion: `
        <div>
          Sandra fue al jardín de su casa. Cuando llegó comenzó a contar
          todo a su alrededor.
        </div>
        <div>
          ¿Qué vió <b><span class="blue--text darken--1--text">más</span></b>?
          ¿Flores o mariposas?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Como podemos observar en el jardín había 
            <span class="blue--text text--darken-1 katex" >${num1}</span> flores y  
            <span class="blue--text text--darken-1 katex" >${num2}</span> mariposas.
          </div>
        `,
      imagen1: "flores5.svg",
      imagen2: "mariposas4.svg",
      correcta: "flores5.svg",
      imagenR1: "flores5_R.svg",
      imagenR2: "mariposas4_R.svg",
      id: uuidv4(),
      rating: 1800
    };
  },
  Diez() {
    const num1 = katex.renderToString("9");
    const num2 = katex.renderToString("5");

    return {
      operacion: `
        <div>
          Santiago necesitaba material para hacer su tarea.
          Encontró una caja de crayolas y una caja de lápices de colores.
        </div>
        <div>
          ¿Qué caja tiene <b><span class="blue--text darken--1--text">más</span></b>
          colores?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            La caja de crayolas tiene  
            <span class="blue--text text--darken-1 katex" >${num1}</span> colores y la de lápices de colores tiene  
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "crayolas9.svg",
      imagen2: "colores5.svg",
      correcta: "crayolas9.svg",
      imagenR1: "crayolas9_R.svg",
      imagenR2: "colores5_R.svg",
      id: uuidv4(),
      rating: 1200
    };
  },
  Once() {
    const num1 = katex.renderToString("4");
    const num2 = katex.renderToString("9");

    return {
      operacion: `
        <div>
          Daniel y Roberto estaban jugando serpientes y escaleras.
          Para avanzar, cada uno debía lanzar los dados.
          Este fue el resultado de su primer lanzamiento.
        </div>
        <div>
          ¿Quién avanzó <b><span class="blue--text darken--1--text">menos</span></b>?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Si juntamos todos los puntos de los dados, notamos que Roberto obtuvo  
            <span class="blue--text text--darken-1 katex" >${num1}</span> puntos y Daniel obtuvo  
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "roberto4.svg",
      imagen2: "daniel9.svg",
      correcta: "roberto4.svg",
      imagenR1: "roberto4_R.svg",
      imagenR2: "daniel9_R.svg",
      id: uuidv4(),
      rating: 1800
    };
  },
  Doce() {
    const num1 = katex.renderToString("4");
    const num2 = katex.renderToString("2");
    const num3 = katex.renderToString("5");

    return {
      operacion: `
        <div>
          Carlos y su hermana Julia hicieron una competencia para saber
          quién podía acomodar más peluches en
          <span class="blue--text text--darken-1 katex" >${num3}</span> segundos.
        </div>
        <div>
          ¿Quién acomodó <b><span class="blue--text darken--1--text">más</span></b>
          peluches?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Cuando contamos los peluches que acomodó Julia notamos que fueron  
            <span class="blue--text text--darken-1 katex" >${num1}</span>. Carlos sólo acomodó   
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "julia4.svg",
      imagen2: "carlos2.svg",
      correcta: "julia4.svg",
      imagenR1: "julia4_R.svg",
      imagenR2: "carlos2_R.svg",
      id: uuidv4(),
      rating: 1200
    };
  },
  Trece() {
    const num1 = katex.renderToString("5");
    const num2 = katex.renderToString("3");

    return {
      operacion: `
        <div>
          El señor Fernández es dueño de dos estacionamientos.
          El estacionamiento San Marcos y el estacionamiento
          San Isidro.
          Ayer había muy pocos coches estacionados.
        </div>
        <div>
          ¿Cuál estacionamiento tenía <b><span class="blue--text darken--1--text">menos</span></b>
          coches?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Podemos notar que el estacionamiento de San Isidro tenía   
            <span class="blue--text text--darken-1 katex" >${num1}</span> coches, mientras que el de San Marcos tenía solo   
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "sanMarcos3.svg",
      imagen2: "sanIsidro5.svg",
      correcta: "sanMarcos3.svg",
      imagenR1: "sanMarcos3_R.svg",
      imagenR2: "sanIsidro5_R.svg",
      id: uuidv4(),
      rating: 1800
    };
  },
  Catorce() {
    const num1 = katex.renderToString("8");
    const num2 = katex.renderToString("6");

    return {
      operacion: `
        <div>
          Jimena y Alma hicieron pulseras con cuentas de colores.
        </div>
        <div>
          ¿Quién puso <b><span class="blue--text darken--1--text">menos</span></b>
          cuentas en su collar?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Si contamos las cuentas de la pulsera de Jimena notamos que tiene   
            <span class="blue--text text--darken-1 katex" >${num1}</span>. La pulsera de Alma tiene    
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "alma6.svg",
      imagen2: "jimena8.svg",
      correcta: "alma6.svg",
      imagenR1: "alma6_R.svg",
      imagenR2: "jimena8_R.svg",
      id: uuidv4(),
      rating: 1200
    };
  },
  Quince() {
    const num1 = katex.renderToString("9");
    const num2 = katex.renderToString("10");

    return {
      operacion: `
        <div>
          Alan y Matías están preparando su mochila para ir a clases.
          Notan que no tienen la misma cantidad de libros.
        </div>
        <div>
          ¿Quién tiene <b><span class="blue--text darken--1--text">más</span></b>
          libros?
        </div>
        `,
      solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            Podemos notar que Matías tiene    
            <span class="blue--text text--darken-1 katex" >${num1}</span> libros y Alan tiene     
            <span class="blue--text text--darken-1 katex" >${num2}</span>.
          </div>
        `,
      imagen1: "alan10.svg",
      imagen2: "matias9.svg",
      correcta: "alan10.svg",
      imagenR1: "matias9_R.svg",
      imagenR2: "alan10_R.svg",
      id: uuidv4(),
      rating: 1200
    };
  },
  all() {
    const preguntas = [];

    preguntas.push(
      this.Uno(),
      this.Dos(),
      this.Tres(),
      this.Cuatro(),
      this.Cinco(),
      this.Seis(),
      this.Siete(),
      this.Ocho(),
      this.Nueve(),
      this.Diez(),
      this.Once(),
      this.Doce(),
      this.Trece(),
      this.Catorce(),
      this.Quince()
    );

    return preguntas;
  }
};

// console.log(logic.all());

// const isEqual = require("lodash.isequal");
// const uniqWith = require("lodash.uniqwith");
// const uniqBy = require("lodash.uniqby");
//
// let ejercicio = logic.all();
// console.log(uniqWith(ejercicio, isEqual).length);
// console.log(uniqBy(ejercicio, "id").length);
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile("ComparaCant.json", string, function(err) {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
// });
