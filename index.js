const content = "생신 축하드려요 아부지 만수무강 하쉐여 사랑해유♥"
const text = document.querySelector(".text")
let index = 0;
 
function typing(){
  text.textContent += content[index++]
  if(index > content.length){
    text.textContent = ""
    index = 0;
  }
}
setInterval(typing, 200)