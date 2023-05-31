let contadorEjercicioUno = 0;
let contadorEjercicioDos = 0;
let contadorEjercicioTres = 0;
let contadorEjercicioCuatro = 0;
let contadorEjercicioCinco = 0;
let contadorEjercicioSeis = 0;

function ejercicioUno() {
    let numeroUno = Number(prompt(`Ingresar un numero:`));
    let numeroDos = Number(prompt(`Ingresar un numero:`));
    let numeroTres = Number(prompt(`Ingresar un numero:`));

    if (numeroUno > numeroDos && numeroUno > numeroTres) {
        if (numeroDos > numeroTres) {
            console.log(`El numero ${numeroUno} es mayor que ${numeroDos} y ${numeroDos} es mayor que ${numeroTres}`);

            console.log(`El numero ${numeroTres} es menor que ${numeroDos} y ${numeroDos} es menor que ${numeroUno}`);
        } else if (numeroTres > numeroDos) {
            console.log(`El numero ${numeroUno} es mayor que ${numeroTres} y ${numeroTres} es mayor que ${numeroDos}`);

            console.log(`El numero ${numeroDos} es menor que ${numeroTres} y ${numeroTres} es menor que ${numeroUno}`);
        }
    } else if (numeroDos > numeroUno && numeroDos > numeroTres) {
        if (numeroUno > numeroTres) {
            console.log(`El numero ${numeroDos} es mayor que ${numeroUno} y ${numeroUno} es mayor que ${numeroTres}`);

            console.log(`El numero ${numeroTres} es menor que ${numeroUno} y ${numeroUno} es menor que ${numeroDos}`);
        } else if (numeroTres > numeroUno) {
            console.log(`El numero ${numeroDos} es mayor que ${numeroTres} y ${numeroTres} es mayor que ${numeroUno}`);

            console.log(`El numero ${numeroUno} es menor que ${numeroTres} y ${numeroTres} es menor que ${numeroDos}`);
        }
    } else if (numeroTres > numeroUno && numeroTres > numeroDos) {
        if (numeroUno > numeroDos) {
            console.log(`El numero ${numeroTres} es mayor que ${numeroUno} y ${numeroUno} es mayor que ${numeroDos}`);

            console.log(`El numero ${numeroDos} es menor que ${numeroUno} y ${numeroUno} es menor que ${numeroTres}`);
        } else if (numeroDos > numeroUno) {
            console.log(`El numero ${numeroTres} es mayor que ${numeroDos} y ${numeroDos} es mayor que ${numeroUno}`);

            console.log(`El numero ${numeroUno} es menor que ${numeroDos} y ${numeroDos} es menor que ${numeroTres}`);
            console.log(`El primer numero es: ${numeroTres}`);
            console.log(`El Segundo numero es: ${numeroDos}`);
            console.log(`El Tercer numero es: ${numeroUno}`);
        }
    }
}

function ejercicioDos() {
    let velocidadOnda = Number(prompt(`Ingresar la velocidad de la Onda:`));
    let longitudOnda = Number(prompt(`Ingresar la longitud de la Onda:`));
    let frecuencia = velocidadOnda / longitudOnda;
    console.log(frecuencia);
}

function ejercicioTres(){
	let ladoUno = parseFloat(prompt("Ingresa el primer lado del triángulo:"));	
	let ladoDos = parseFloat(prompt("Ingresa el segundo lado del triángulo:"));
	let ladoTres = parseFloat(prompt("Ingresa el tercer lado del triángulo:"));

if (ladoUno === ladoDos && ladoUno === ladoTres) {
  console.log("El triángulo es equilátero.");
} else if (ladoUno === ladoDos || ladoUno === ladoTres || ladoDos === ladoTres) {
  console.log("El triángulo es isósceles.");
} else {
  console.log("El triángulo es escaleno.");
}
}

function ejercicioCuatro() {
    let numeroUno = Number(prompt(`Ingresar el primer numero`));
    let numeroDos = Number(prompt(`Ingresar el primer numero`));
    let contadorNumerouno = 0;
    let contadorNumeroDos = 0;
    for (let i = 0; i < numeroUno; i++) {
        if (numeroUno % i == 0) {
            contadorNumerouno += i;
        }
    }
    for (let ii = 0; ii < numeroDos; ii++) {
        if (numeroDos % ii == 0) {
            contadorNumeroDos += ii;
        }
    }
    if (contadorNumeroDos != numeroUno) {
        console.log(`El numero ${numeroUno} y el numero ${numeroDos} no son amigos`);
    } else if (contadorNumerouno != numeroDos) {
        console.log(`El numero ${numeroUno} y el numero ${numeroDos} no son amigos`);
    } else {
        console.log(`El numero ${numeroUno} y el numero ${numeroDos} sí son amigos`);
    }
}

function ejercicioCinco(){
    let valorProducto = Number(prompt(`Ingresar el valor de producto: `));
    let cantidadProducto = Number(prompt(`Ingresar la cantidad de producto:`));
    let valorComprado = valorProducto * cantidadProducto;
    let iva = 0;
    let descuento = 0;
    if (valorComprado > 500000){
        if(valorComprado >1000000){
            descuento = valorComprado*0.10;
            valorComprado-=descuento;
            console.log(`Valor total: ${valorComprado}`);
        }else{
            console.log(`Valor total: ${valorComprado}`);
        }
    }else{
        iva = valorComprado * 0.19;
        valorComprado+=iva;
        console.log(`El valor del iva es: ${iva}`);
        console.log(`Valor total: ${valorComprado}`);
    }
}

function ejercicioSeis(){
    let notaFinal = 0;
    let notaUno = Number(prompt(`Ingrese la primera nota`));
    if (notaUno > 5) {
        alert("Las notas deben ser entre 0 y 5");
        return ejercicioSeis();
    }
    let notaDos = Number(prompt(`Ingrese la segunda nota`));
    if (notaDos > 5) {
        alert("Las notas deben ser entre 0 y 5");
        return ejercicioSeis();
    }
    let notaTres = Number(prompt(`Ingrese la tercera nota`));
    if (notaTres > 5) {
        alert("Las notas deben ser entre 0 y 5");
        return ejercicioSeis();
    }
    let notaCuatro = Number(prompt(`Ingrese la cuarta nota`));
    if (notaCuatro > 5) {
        alert("Las notas deben ser entre 0 y 5");
        return ejercicioSeis();
    }



    if(notaCuatro === 5){
        notaUno++
        notaDos++
        notaTres++
        
        notaUno = notaUno*0.10;
        notaDos = notaDos*0.20;
        notaTres = notaTres*0.30;
        notaCuatro = notaCuatro*0.40;
        notaFinal+=notaUno+notaDos+notaTres+notaCuatro;
        if(notaFinal > 3.5 ){
            console.log(`El estudiante ganó`);
        }else{
            console.log(`El estudiante perdio`);
        }
    }else{
        notaUno = notaUno*0.10;
        notaDos = notaDos*0.20;
        notaTres = notaTres*0.30;
        notaCuatro = notaCuatro*0.40;
        notaFinal+=notaUno+notaDos+notaTres+notaCuatro;
        if(notaFinal > 3.5 ){
            console.log(`El estudiante ganó`);
        }else{
            console.log(`El estudiante perdio`);
        }
    }
}

function mostrarEstadisticas() {
    console.log("=== Estadísticas ===");
    console.log("Ejercicio 1 se ejecutó " + contadorEjercicioUno + " veces");
    console.log("Ejercicio 2 se ejecutó " + contadorEjercicioDos + " veces");
    console.log("Ejercicio 3 se ejecutó " + contadorEjercicioTres + " veces");
    console.log("Ejercicio 4 se ejecutó " + contadorEjercicioCuatro + " veces");
    console.log("Ejercicio 5 se ejecutó " + contadorEjercicioCinco + " veces");
    console.log("Ejercicio 6 se ejecutó " + contadorEjercicioSeis + " veces");

    if(contadorEjercicioUno > contadorEjercicioDos && contadorEjercicioUno > contadorEjercicioTres && contadorEjercicioUno > contadorEjercicioCuatro && contadorEjercicioUno > contadorEjercicioCinco && contadorEjercicioUno > contadorEjercicioSeis){

    }


}

function mostrarMenu() {


    const opcion = Number(prompt(`Ingrese una opción \n=== Menú === \n1. Ordenar tres números \n2. Calcular el área de una circunferencia \n3. Determinar el tipo de triángulo \n4. Comprobar si dos números son amigos \n5. Calcular el valor de una compra \n6. Calcular la nota final de un estudiante \n0. Salir`));

    switch (opcion) {
        case 0:
            mostrarEstadisticas();
            break;
        case 1:
            ejercicioUno();
            contadorEjercicioUno++;
            return mostrarMenu();
        case 2:
            ejercicioDos();
            contadorEjercicioDos++;
            return mostrarMenu();
        case 3:
            ejercicioTres();
            contadorEjercicioTres++;
            return mostrarMenu();
        case 4:
            ejercicioCuatro();
            contadorEjercicioCuatro++;
            return mostrarMenu();
        case 5:
            ejercicioCinco();
            contadorEjercicioCinco++;
            return mostrarMenu();
        case 6:
            ejercicioSeis();
            contadorEjercicioSeis++;
            return mostrarMenu();
        default:
            console.log("Opción inválida. Intente nuevamente.");
            return mostrarMenu();


    }
}
mostrarMenu();