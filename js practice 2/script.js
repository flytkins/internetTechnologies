function getAge(age) {
    document.write(age+1);
    document.write('<br>');
  }
  
  getAge(2);
  
  function getReminder(num, delitel){
      document.write(num%delitel);
      document.write("<br>");
  }
  
  getReminder(10, 3);
  
  function faceControl(age){
      if(age<18){
          document.write("NO");
          document.write("<br>");
      }else{
          document.write("Welcome");
          document.write("<br>");
      }
  }
  
  faceControl(17);
  
  function getNextAge(age=-1){
    document.write(age+1);
    document.write("<br>");
  }
  
  getNextAge()
  
  function canRide(height){
    document.write(height>=140);
    document.write("<br>");
  }
  
  canRide(139)