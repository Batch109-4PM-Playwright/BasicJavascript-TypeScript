

        let s : string = "";

for(let r : number = 1 ; r <= 3 ; r++)   //rows
{
      
        for(let c : number = 1 ; c <= 7 ; c++)  //columns
        {
                s += c +"  ";   // 1 stores to s   after 2 stores to s (1 and 2)   till upto 1 to 7
        }

        s += "\n"   //s moves to next line        

}

console.log(s);