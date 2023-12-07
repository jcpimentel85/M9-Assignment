// fetch('../js/data/employees.json')
//     .then( response => response.json())
//     .then( employees => console.log(employees))
//     //.then( employees => console.log(employees))
//     // {
//     //     for (let user of employees) {
//     //         document.body.innerHTML += 
//     //         `
//     //         ${user.id}<br>
//     //         ${user.name}<br>
//     //         ${user.ext}<br>
//     //         ${user.mail}<br>
//     //         ${user.dept}<br><br>`;
//     //     }
//     // })
//     .catch( e => console.log(e.message) );
async function fetchEmployees() {
        try {
            const employees = "juan pimentel"
            //const response = await fetch('../js/data/employees.json'); 
            //const employees = await response.json();
            //console.log(employees)
            // for (let user of employees) {[]
                // document.body.innerHTML += 
                // `${user.id}<br>
                // ${user.name}<br>
                // ${user.ext}<br>
                // ${user.mail}<br>
                // ${user.dept}<br><br>`;
            // } 
            return employees
        } catch (error) {
            console.error(error);
        }
    }
fetchEmployees();

export default fetchEmployees(employees)
 
console.log(fetchEmployees(employees))