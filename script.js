
  document.getElementById("Fechag").addEventListener('click', function() {  
  document.getElementById("demo").style.display= "block";
  
  });
  document.getElementById("ocultar").addEventListener('click', function() {   
  document.getElementById("demo").style.display = "none";
  });
 
  const collection = document.getElementsByClassName("programas");
  for (let i = 0; i < collection.length; i++) {
  collection[i].style.color = "grey";
  }
  
  document.getElementById("color").addEventListener('click', function() {   
    document.body.style.backgroundColor = "pink";
    });
    
    
 
    document.getElementById("reestablecer").addEventListener('click', function() {   
      document.body.style.backgroundColor = "whitesmoke";
    });

    document.getElementById("profesion").addEventListener('mouseover', function() {   
      document.getElementById("profesion").style.color = "blue";
    });

    document.getElementById("profesion").addEventListener('mouseout', function() {   
      document.getElementById("profesion").style.color = "black";
    });