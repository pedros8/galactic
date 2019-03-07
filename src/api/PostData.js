//post data from api
export function PostData(userData){    
    return new Promise((resolve, reject) => {           
        fetch('https://reqres.in/api/login', {
            method: 'post',
            body: JSON.stringify(userData),
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

