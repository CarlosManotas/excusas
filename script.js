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
      "del interfaz XML",
      "del sistema de colas",
      "del buffer de entrada",
      "del gestor de peticiones",
      "de las clases de abstraccion",
      "del recolector de basura",
      "de la nueva version",
      "del cache",
      "de la version customizada",
      "del conversor de protocolo"
  ];
  const frase3 = [
      "del directorio LDAP",
      "de la maquina virtual Java",
      "del proxy inverso",
      "del gestor de cluster",
      "del broker de objetos distribuido",
      "de la capa de presentacion",
      "del despachador de certificados",
      "de la base de datos",
      "del servidor seguro",
      "del acelerador de transacciones"
  ];

  const dameRandom = (array) => array[Math.floor(Math.random()*array.length)]

  var respuesta = document.getElementById('respuesta');
  var btn = document.getElementsByTagName('button')[0];
  btn.addEventListener('click',(e)=>{
    respuesta.innerHTML = ''
    var frase = `${dameRandom(frase1)} ${dameRandom(frase2)} ${dameRandom(frase3)}`
    respuesta.classList.add('animate')
    respuesta.innerHTML = frase;
  })
}())
