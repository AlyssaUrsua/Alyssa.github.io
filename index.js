const btnlike1 = document.getElementIdBy("btnlike1")
const countLikes1 = document.getElementById("countLikes1")

function clickLike1(){
   let totalLikes1 = parseInt(countLikes1.value) + 1
   countLikes1.textContent = totalLikes1.toString()
}
btnlike1.addEventListener("click",clickLikes1) 

 function clickLikes2(){
    let totalLikes2 = parseInt(countLikes2.value) + 1
    countLikes2.textContent = totalLikes2.toString()
 }
btnlike2.addEventListener("click",clickLikes2) 
btnlike2.addEventListener("click",clickLikes2) 
