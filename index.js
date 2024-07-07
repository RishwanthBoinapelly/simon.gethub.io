$(document).ready(function()
{
    var gamePattern=[];
    var userPattern=[];
    var userOptions=["green","red","blue","yellow"];
    var level=0;
    $(document).keydown(function()
{

    if(level===0)
    {
        startFunction();
    }
});


function startFunction()
{
    level=1;
    $("h1").text("Level"+level);
    userPattern=[];
    nextSequence();
}
function nextSequence()
{
    userPattern=[];
    $("h1").text("Level-"+level).css("color","black");
      var randomGeneratedNumber=Math.floor(Math.random()*4);
      gamePattern.push(userOptions[randomGeneratedNumber]);
      playSound(userOptions[randomGeneratedNumber]);
      playAnimation(userOptions[randomGeneratedNumber]);
}
$(".btn").click(function()
{
    
    userPattern.push($(this).attr("id"));
    playSound($(this).attr("id"));
    playAnimation($(this).attr("id"));
    checkSolution(userPattern.length-1);
});

function checkSolution(currentLevel)
{
    if(gamePattern[currentLevel]===userPattern[currentLevel])
    {
        if(gamePattern.length===userPattern.length)
        {
            // userPattern=[];
            setTimeout(function(){
                level++;
                nextSequence();},1000
            );
        }
    }
    else
    {
        playSound("wrong");
        
        startOver();
    }
}
function playSound(currentColor)
{
    var audio=new Audio(currentColor+".mp3");
    audio.play();
}
function playAnimation(currentColor)
{
$("#"+currentColor).addClass("pressed");
setTimeout(function()
{
    $("#"+currentColor).removeClass("pressed");
},100);
}
function startOver()
{
    gamePattern=[];
    level=0;
    $(document.body).css("background-color","red");
    setTimeout(function()
{
    $(document.body).css("background-color","white");   
},100);
    setTimeout(function()
    {
        
        $("h1").text("You have entered a wrong pattern.Press a key to restart the game").css("color","red");
    
},100);

}

});
