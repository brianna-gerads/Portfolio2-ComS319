 var FoodType = 'candy';
	 var speed = 400;
	 
	 var snake=["3_10","2_10","1_10"];
	 var food="";
	 var dir=1;
	 var tail;

	 function myinit() {
		 dir=1;
		 snake=["3_10","2_10","1_10"];
		 food="";
//		 FoodType = "apple";
			$('#div_main').html("");
			for (var r=0;r<25;r++){
			  for (var c=0;c<25;c++){
			$('#div_main').append('<div class="myCell" id="c_'+r+'_'+c+'"></div>');
			  }
			}
			  $('#c_1_10').addClass('sel');
			  $('#c_2_10').addClass('sel');
			  $('#c_3_10').addClass('sel');
			  generatefood();
			  setTimeout(function(){gameupdate()}, speed);
	 }
	 
	 function setSpeed(speedSET) {
		speed = speedSET;
	}

	function setFood(foodType) {
		if(foodType == 'apple') {
			FoodType= 'apple';
		} if(foodType == 'candy') {
			FoodType= 'candy';
		} if(foodType == 'bacon') {
			FoodType= 'bacon';
		}
	}
	 
	 function generatefood(){
		var r1 = Math.floor(Math.random() * 24);
		var c1 = Math.floor(Math.random() * 24);
		//$('#c_'+r1+'_'+c1).addClass('selA');
		if(FoodType == 'apple') {
			$('#c_'+r1+'_'+c1).addClass('foodApple');
		}
		if(FoodType == 'candy') {
			$('#c_'+r1+'_'+c1).addClass('foodCandy');
		}
		if(FoodType == 'bacon') {
			$('#c_'+r1+'_'+c1).addClass('foodCherries');
		}
		food=''+r1+'_'+c1;
	 } 
	 function gameupdate(){
	  tail=snake.pop(); 
	  $('#c_'+tail).removeClass('sel');
	  var hh=snake[0];
	  var rc=hh.split("_");
	  var r=parseInt(rc[0]);
	  var c=parseInt(rc[1]);
	  switch(dir){
		case 1: r=r+1; break; // Bottom
		case 2: c=c-1; break; // Left
		case 3: r=r-1; break; // Top
		case 4: c=c+1; break;  // Right
	  }  
	  var nn=""+r+"_"+c;
	  if (nn==food){
		  snake.push(tail);
		  $('#c_'+tail).addClass('sel');
		  //$('#c_'+food).removeClass('selA');
			if(FoodType == "apple") {
				$('#c_'+food).removeClass('foodApple');
			}
			if(FoodType == "candy") {
				$('#c_'+food).removeClass('foodCandy');
			}
			if(FoodType == "bacon") {
				$('#c_'+food).removeClass('foodCherries');
			}
		  generatefood();
	  }
	  snake.unshift(nn);
	  $('#c_'+nn).hasClass('sel'); 
	  //condition to exist the Game !
	  if (c<0 || r<0 || c>24 || r>24 ||  $('#c_'+nn).hasClass('background') ){
		alert('You lost !');    
		//myinit();
		return;
	  }  
	  $('#c_'+nn).addClass('sel');       
	  setTimeout(function(){gameupdate()}, speed);
	 } 
	 $(document).keydown(function(e){
		if (e.keyCode == 37) {
            if(dir == 4)
                return false;
            dir = 2;
        } else if (e.keyCode == 38) {
            if(dir == 1)
                return false;
            dir = 3;
        } else if (e.keyCode == 39) {
            if(dir == 2)
                return false;
            dir = 4;
        } else if (e.keyCode == 40) {
            if(dir == 3)
                return false;
            dir = 1;
        }
        return false;
	});
