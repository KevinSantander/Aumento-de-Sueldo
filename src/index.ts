let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let sueldo = Number(dato1.value);

  if (sueldo <= 15000) {
    console.log("Salario Final con aumento es: ", +sueldo * 1.2);
  } else {
    if (sueldo <= 20000) {
      console.log("Salario Final con aumento es: ", +sueldo * 1.1);
    } else {
      if (sueldo <= 25000) {
        console.log("Salario Final con aumento es: ", +sueldo * 1.05);
      } else {
        console.log("No hay Aumento");
      }
    }
  }
});
