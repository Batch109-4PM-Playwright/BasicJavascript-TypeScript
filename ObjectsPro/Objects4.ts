interface wife     
{
    wname : string,
    waddress : string,
    wage : number
}
 
interface husband     
{
    hname : string,
    haddress : string,
    hage : number
}

let wifedata : wife =
{
    wname : "Juilet",
    waddress : "London",
    wage : 28
}

let husbanddata : husband =
{
    hname : "Romoe",
    haddress : "Paris",
    hage : 32
}

let family = {...husbanddata , ...wifedata};

console.log(family);



