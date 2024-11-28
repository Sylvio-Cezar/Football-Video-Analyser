const axios = require("axios");

async function checkLoanAvailability(id) {
    try{
        
        const book = await axios.get(`http://localhost:3000/book/${id}`)
        console.log(book)
        if(book){
            await axios.patch(`http://localhost:3000/book`, {
                available: false
            })
            return true;
        }else{
            return false;
        }
    }catch(err){
        return false;
    }
}