function myfunction () {
	   var str=prompt("hi!my name is ankita and whats your name","")
     alert("nice to meet you "+str+ "!")
 	}


	function confirmation(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
     if (!username || !password) {
       alert("please enter valid username and password")
       return;
     }
    window.location="./dashboard/index.html#";
  }   

