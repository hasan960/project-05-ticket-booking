
const allBtn = document.getElementsByClassName("add-btn");

let count = 40 ;
let selectedSeat = 0 ;

for (const btn of allBtn) {
    btn.addEventListener('click',function () {
        count = count -1
        document.getElementById("total-seat").innerText = count;
    });
    btn.addEventListener('click',function () {
        selectedSeat = selectedSeat + 1 ;
        document.getElementById("selectedSeat").innerText = selectedSeat;
    });
    btn.addEventListener('click',function () {
        btn.classList.add("bg-green-700","text-white");
    });







    //--- All button clicble --//

    btn.addEventListener('click',function (event) {
        const btnName = event.target.innerText ;
        const ticketPrice = 550 ;
        const className = "Economy"

        const selectedClass = document.getElementById("mySelectedClass");

        const mydiv = document.createElement('div') ;
        const addClassFromCss = mydiv.classList.add("selected_contets");

        const p1 = document.createElement('p') ;
        const p2 = document.createElement('p') ;
        const p3 =document.createElement('p') ;

        p1.innerText = btnName ;
        p2.innerText = className ;
        p3.innerText = ticketPrice ;
        
        mydiv.appendChild(p1);
        mydiv.appendChild(p2);
        mydiv.appendChild(p3);
        selectedClass.appendChild(mydiv);
        totalCost(ticketPrice);


    });

}


function totalCost(value) {
    
    const totalSum = convertValue("total-cost") ;
    const sum = totalSum + parseInt(value);
    document.getElementById("total-cost").innerText = sum ;


}




function convertValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice ;
}