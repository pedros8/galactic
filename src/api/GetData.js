//get data from api
export function GetData(userData){    
      return new Promise((resolve, reject) => {           
        fetch('https://reqres.in/api/users?page2', {
            method: 'get',
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
             .then(responseJson => { 
                  
                resolve(responseJson)
            })
                .catch((err) => {
                  reject(err)
              });
        })
    }