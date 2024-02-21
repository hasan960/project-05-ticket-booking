
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



}


const mybtn = document.getElementsByClassName("add-btn") ;

for(const countBtn of mybtn){
    countBtn.addEventListener('click',function (event) {
        console.log("Hasan");
    })
}