

$(function(){
  
   function parse_pos(id){ return parseInt($(id).css("left"),10)}; //works
   function get_pos(id){$(id).css("left")};
   function Racer(id,pos){
      this.id = id; 
      this.advance = advance; 
      function advance(num){
        $(this.id).css('left',parse_pos(id) + num + 'px'); 
      };
    };


    var ONE =new Racer("#ONE",'0px',0);  
    var TWO =new Racer("#TWO",'0px',20); 


  $(document).on('keyup', function(e) { $
    var key = e.which;
    if (key === 81) {e.preventDefault(); ONE.advance(20);}  //added preventdefault but have not tested
    if (key===87) {e.preventDefault(); TWO.advance(20);}

    if (parse_pos(ONE.id) > 700 ){alert("PLAYER ONE MADE IT!")};
    if (parse_pos(TWO.id) > 700 ){alert("PLAYER TWO MADE IT!")};

    


  }); //closing keyup


}); 












