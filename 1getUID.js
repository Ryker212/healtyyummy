    // getUser //
function getUser(){
        try{
            return user;
            }
            catch(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error " + errorCode + " : " + errorMessage);
            }
        }