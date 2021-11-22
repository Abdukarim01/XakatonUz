let click_bar = document.querySelector('.click_bar')

let num = 0

click_bar.addEventListener('click',()=>{
function myFunction(x) {
  if (x.matches) {
    
	num ++ 
	if (num >= 2) {num = 0}

	if (num == 1) {
		document.querySelector('.header_bar').style = "height:323px;overflow:hidden; border-bottom:3px solid black; transition:all 0.4s;"
	}
	else{
		document.querySelector('.header_bar').style = "height:50px; transition:all 0.5s;"
	}


 }else {
    document.querySelector('.header_bar').style = "height:60px; transition:all 0.5s;"
    if (num == 1) {num = 1}
}

}

var x = window.matchMedia("(max-width:800px)")
myFunction(x)
x.addListener(myFunction)

})