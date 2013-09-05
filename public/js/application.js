

$(function(){
  
   function parse_pos(id){ return parseInt($(id).css("left"),10)}; //works
   function get_pos(id){$(id).css("left")};
   function Racer(id,name,pos){
      this.id = id;
      this.name = name; 
      this.advance = advance; 
      function advance(num){
        $(this.id).css('left',parse_pos(id) + num + 'px'); 
      };
    };


    var ONE =new Racer("#ONE",$('#ONE input').val(),'0px');  
    var TWO =new Racer("#TWO",$('#TWO input').val(),'0px'); 


  $(document).on('keyup', function(e) {
    var key = e.which;
    if (key === 81) { ONE.advance(25)}
    if (key === 80) { TWO.advance(25)}

    if (parse_pos(ONE.id) > 700 ){
      alert(ONE.name + " made it just in time!; but " + TWO.name + " will need a change of clothes :-(")

    // $.ajax({
    //   url: '/record'
    //   type: 'post'
    // }) //closing ajax


    } //closing if
    

    if (parse_pos(TWO.id) > 700 ){
      alert(TWO.name + " made it just in time!; but " + ONE.name + " will need a change of clothes :-(")
    }//closing if
    


  }); //closing keyup


}); 












