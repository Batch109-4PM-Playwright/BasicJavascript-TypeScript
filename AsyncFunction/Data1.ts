
function ageCheck() : Promise<string>
{
        return new Promise((resolve , reject) =>
        {
            let age : number = 15;
            if(age <= 18)
            {
                resolve("The Candidate is TEEN Age")
            }
            else
            {
                reject(new Error("The Candidate in MAJOR"))
            }
        })
}

async function ageData() : Promise<void>   //we are creating an "async function" to handle "promise" using "await"
{
        const myStatus : string = await ageCheck();
        console.log(myStatus)
}

ageData();  //calling async function

