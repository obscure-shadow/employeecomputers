const department = Database.departments
const employee = Database.employees
const computers = Database.computers
const employeeComp = Database.employeeComputers

const dombuilder = () => {
    const cards = document.getElementById("cards")
    //get each name and add to cards
    employee.forEach(emp => {
        //create card container div
        const buildcard = document.createElement("div")

        //create title w/ employee name and add to container div
        const name = document.createElement("h3")
        name.textContent = `${emp.firstName} ${emp.lastName}`
        buildcard.appendChild(name)
        //add department to card
        const depart = department.find(current=> current.departmentId === emp.departmentId)
        const deptPara = document.createElement("p")
        deptPara.textContent = depart.name
        buildcard.appendChild(deptPara)

        //add computer to card
        const comp = employeeComp.find( current=> current.employeeId === emp.employeeId)
        const compid = computers.find( current => current.computerId === comp.computerId)
        const compPara = document.createElement("p")
        compPara.textContent = compid.name
        buildcard.appendChild(compPara)

        // append card to dom element <article id="cards">
        cards.appendChild(buildcard)
    });
}
dombuilder()