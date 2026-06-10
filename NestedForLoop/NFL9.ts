

        let s : string = "";

for(let r : number = 1 ; r <= 8 ; r++)   //rows
{
      
        for(let c : number = 1 ; c <= r ; c++)  //columns
        {
                s += c +"  ";   
        }

        s += "\n"       

}

console.log(s);