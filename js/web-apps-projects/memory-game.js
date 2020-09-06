 var imgSource ="";
         var divId = '';
         var imgFound = 0;
         var moves = 0;
         var imageArray =[
             "/images/photos/work/girl-1.jpg",
             "/images/photos/work/girl-2.jpg",             
             "/images/photos/work/girl-3.jpg",
             "/images/photos/work/girl-4.jpg",             
             "/images/photos/work/girl-5.jpg",
             "/images/photos/work/girl-6.jpg",             
             "/images/photos/work/girl-7.jpg",
             "/images/photos/work/girl-8.jpg",
             "/images/photos/work/girl-9.jpg",
             "/images/photos/work/girl-10.jpg",
         ];
         /* this function  = make sure the images doesn't come in the same order each game */
         function ShuffleImages(){ 
             var len = imageArray.length*2;
             var imgArr = new Array();
             imgArr = $.merge($.merge([], imageArray), imageArray);
             var currentDiv = $("#images div:first-child");
             for(var z = 0; z < len; z++){
                 var randomNum = Math.round(Math.random()*(imgArr.length-1));
                 $("#" + currentDiv.attr("id") + " img").attr("src", imgArr[randomNum]);
                 imgArr.splice(randomNum, 1);
                 currentDiv = currentDiv.next();
             }
         }
          /* this function  = check if the two images are the same, if yes keep them visible - if not hide them */
          /* 1/ save the ID of the currently clicked element to check if it's the first opened*/
         function OpenCard(){
             var id = $(this).attr("id");
             if($("#" + id + " img").is(":hidden")){
                 $("#" + id + " img").show('slow');
                 if(imgSource == "" ){
                     divId = id;
                     imgSource =  $("#" + id + " img").attr('src');
                 } else {
                     currentOpened = $("#" + id + " img").attr('src');
                     if(imgSource != currentOpened){
                         setTimeout(function(){
                             $("#" + id + " img").hide('slow');
                             $("#" + divId + " img").hide('slow');
                             divId = "";
                             imgSource = "";
                         }, 600);
                         
                     } else {
                         divId = "";
                         imgSource ="";
                         imgFound++;
                        }
                 } 
                 moves++;
                 $("#moves").html(moves);
                 if(imageArray.length == imgFound){
                     setTimeout(function(){
                         // show the hidden result div with the sentence 'Congratulation, you completed the game with ' + moves + ' clicks'
                         //alert("YES! You completed the game with " + moves + " clicks");
                         document.getElementById('resultDiv').style.display = 'block';
                         document.getElementById('resultDiv').innerHTML = 'YES! You completed the game with ' + moves + ' clicks';
                         
                     }, 1000);
                 }
             }
         }
         
        function ResetGame(){
        ShuffleImages();
        moves = 0;
        $("#moves").html(moves);
        $("#images div img").hide();
        imgFound = 0;
        imgSource = "";
        divId = "";
        document.getElementById('resultDiv').style.display = 'none';
        document.getElementById('resultDiv').innerHTML = '';
        
    }
         $(document).ready(function(){
             for(var i = 1; i <3 ; i++){ /* this will repeat the image twice (from 1 until less then 3)*/
                 $.each(imageArray, function(index, value){
                     $("#images").append("<div id=card" + i + index + "><img src=" + value + " /></div>");
                 })
             }
             ShuffleImages();
             $('#images div').click(OpenCard);
    
         });
         