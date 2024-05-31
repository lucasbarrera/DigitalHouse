let nombre='', apellido='', sueldoActual=0, porcentajeAumento = 25, porcentajeAumento2 = 15

function calculoSueldo(nombre,apellido,sueldoActual) {
    if (sueldoActual<35000){
        let calculoAumento = sueldoActual * porcentajeAumento / 100
        let nuevoSueldo = sueldoActual + calculoAumento
        console.log(`hola ${nombre} ${apellido}`);
        console.log(`en base a tu sueldo actual `);
        console.log(`${sueldoActual}`);
        console.log(`haz recibido un aumento del 25%`);
        console.log(`tu nuevo sueldo sera de $ ${nuevoSueldo}`);
    }else{
        let calculoAumento = sueldoActual * porcentajeAumento2 / 100
        let nuevoSueldo = sueldoActual + calculoAumento
        console.log(`hola ${nombre} ${apellido}`);
        console.log(`en base a tu sueldo actual `);
        console.log(`${sueldoActual}`);
        console.log(`haz recibido un aumento del 25%`);
        console.log(`tu nuevo sueldo sera de $ ${nuevoSueldo}`);
    }
}

calculoSueldo('Lucas','Barrera',30000)
calculoSueldo('Marcelo','Suarez',35000)