// const userTableBody=document.querySelector("#userTable tbody");
// userTableBody.innerHTML="<h1>Hello</h1>";
// console.log(userTableBody);

 console.log("Hello")

    //Student api
    const apiUrl='http://localhost:8080/api/std/all';

    function fetchStdData(){
        fetch(apiUrl,{ mode: 'no-cors'})
        .then(response => response.json)
        .then(data => {
            const userTableBody=document.querySelector('#userTable tbody');

            //Clearing any existing data i user tabel

              userTableBody.innerHTML='';

              //loops through the data and create table row

              data.forEach(user => {

                const row=document.createElement('tr');

                //creating table cells for each piece of data

                row.innerHTML=`
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>`;

                userTableBody.appendChild(row);
                
              });
            })
            .catch(error=>{
                console.error('Error Fetchinf data ',error);
            })
        }

        window.onload=fetchStdData;