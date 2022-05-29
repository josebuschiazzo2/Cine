/* Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
• La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada*/

//Empiezo con el main
console.clear();
let seatsunoccupied:number=0;
let seats:boolean[][]=[ 
  [true, false , true],
  [true, false , true],
  [true, false , true]
  ];

  for (let x:number=0;x<3;x++) 
  {
    for (let y:number=0;y<3;y++)
    {
      if (!(seats[x][y])) 
      {
        seatsunoccupied++;
      }
    }
  }


console.log("La cantidad de asientos desocupados son: " + seatsunoccupied);

// voy a probar haciendo un random
let numrandom:number[][]=new Array(3);
seatsunoccupied=0;  
for (let x:number=0;x<3;x++) 
  {
    for (let y:number=0;y<3;y++)
    {
      numrandom[x][y]=((Math.random().toFixed(1)*10)%2);
      console.log(numrandom[x][y]);
      if (!(seats[x][y])) 
      {
        seatsunoccupied++;
      }
    }
  }
for (let x:number=0;x<3;x++) 
  {
    for (let y:number=0;y<3;y++)
    {
      if (!(seats[x][y])) 
      {
        seatsunoccupied++;
      }
    }
  }
  
console.log("La cantidad de asientos desocupados son: " + seatsunoccupied);
