//boton fecha de egreso
  document.getElementById("Fechag").addEventListener('click', function() {  
  document.getElementById("demo").style.display= "block";
  
  });
  document.getElementById("ocultar").addEventListener('click', function() {   
  document.getElementById("demo").style.display = "none";
  });
 //cambio de color apartado "conocimientos
  const collection = document.getElementsByClassName("programas");
  for (let i = 0; i < collection.length; i++) {
  collection[i].style.color = "grey";
  }

  //boton cambio de color de fondo
  document.getElementById("color").addEventListener('click', function() {   
    document.body.style.backgroundColor = "pink";
    });
    
    
 //reestablecimiento color de fondo
    document.getElementById("reestablecer").addEventListener('click', function() {   
      document.body.style.backgroundColor = "whitesmoke";
    });
//cambio de color titulo 2 
    document.getElementById("profesion").addEventListener('mouseover', function() {   
      document.getElementById("profesion").style.color = "blue";
    });

    document.getElementById("profesion").addEventListener('mouseout', function() {   
      document.getElementById("profesion").style.color = "black";
    });
