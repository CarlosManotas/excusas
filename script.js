(function(){
  const frase1 = [
      "En cuanto arreglemos el goteo de recursos",
      "En cuanto completemos las pruebas",
      "En cuanto hayamos optimizado el codigo",
      "Apenas nos arreglen el bug",
      "Cuando se solvente el problema de instalacion",
      "Cuando averiguemos por que se cae el proceso",
      "Cuando hayamos mejorado el rendimiento",
      "En cuanto completemos la restauracion",
      "Apenas instalemos el ultimo parche",
      "En cuanto terminemos la implementacion"
  ];
  const frase2 = [
      "l interfaz XML",
      "l sistema de colas",
      "l buffer de entrada",
      "l gestor de peticiones",
      " las clases de abstraccion",
      "l recolector de basura",
      " la nueva version",
      "l cache",
      " la version customizada",
      "l conversor de protocolo"
  ];
  const frase3 = [
      "l directorio LDAP",
      " la maquina virtual Java",
      "l proxy inverso",
      "l gestor de cluster",
      "l broker de objetos distribuido",
      " la capa de presentacion",
      "l despachador de certificados",
      " la base de datos",
      "l servidor seguro",
      "l acelerador de transacciones"
  ];

  var respuesta = document.getElementById('respuesta');
  var btn = document.getElementsByTagName('button')[0];
  btn.addEventListener('click',(e)=>{
    respuesta.innerHTML = ''
    var frase = `${frase1[Math.floor(Math.random() * frase1.length)]} de${frase2[Math.floor(Math.random() * frase2.length)]} de${frase3[Math.floor(Math.random() * frase3.length)]}`
    respuesta.classList.add('animate')
    respuesta.innerHTML = frase;
  })
}())
