

function playerName(n : string) : void
{
    console.log(n);
}

playerName("Dravid");

function playerPlay(game : (n : string) => void) : void    //(n : string) => void --> fucntion --> parameter --> anonomous function
{
   game("Cricket");
}

playerPlay(playerName);

function DateName(n : string) : void
{
    console.log(n);
}

playerPlay(DateName);