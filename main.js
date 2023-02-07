function table(){
    const table=document.createElement("table")
    const tBody=document.createElement("tbody")



    for(let i=0;i<10;i++){
        const row=document.createElement("tr")
        for(let j=0;j<10;j++){
            const cell=document.createElement("td")
            row.appendChild(cell)
        }
        tBody.appendChild(row)
    }
    table.appendChild(tBody)
    document.body.appendChild(table)

}
table()

let tr =document.getElementsByTagName('tr')
let num = tr.length
let set=1
for (let i=0;i<num;i++){
    for (let k=0;k<num;k++){
        let td=tr[i].getElementsByTagName('td');
        td[k].textContent=set;
        set+=1
    }
}

