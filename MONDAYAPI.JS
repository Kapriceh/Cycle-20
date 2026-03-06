import "dotenv/config";
const MONDAY_QUERY = `
    query{
  boards(ids:18397285192) {
    items_page{
      items{
        id
        name
        column_values{
          id
          text
        }
      }
    }
  }
}
`;


// Make  API Request

export const fetchFromMondayAPI = async () => {
    if (!process.env.MONDAY_TOKEN) {
        throw new Error (
            "Missing Monday_Token! Add it to your .env file."
        );
    }
    }

    const response = await fetch ("https://api.monday.com/v2",{method: "POST",
    headers: {
        "Content-Type": "application/json", 
        Authorization: process.env.MONDAY_TOKEN,
    }, 
    body: JSON.stringify ({query: MONDAY_QUERY }),
})  
// Turn the response into a JavaScript object
const data =  await response.json();
const status = response.status
return {data, status};



fetchFromMondayAPI()

.then((data)=>{
    console.log("Data from monday.com!")
    console.log((JSON.stringify (data,null,2) ));
})
.catch((error)=> {
    console.error("Failed to fetch data from monday.com");
    console.error("Reason: ", error.message);
    process.exit(1);
})
