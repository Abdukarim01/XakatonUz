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

let drops = document.querySelectorAll('.drops_content')
let drops_items = document.querySelectorAll('.drops')
let num2 = 0;
drops.forEach((e)=>{
	e.onclick = function(){
		num2++
		let icons = document.querySelectorAll('.down_icons')
		let index_drops = Array.prototype.indexOf.call(drops, e)

		if(num2 == 2){num2 = 0}
		if (num2 == 1) {
		drops_items[index_drops].style = " height:auto; transition:all 0.3s;"
		icons[index_drops].style = "transform:rotate(180deg); transition:all 0.3s;"
	}else{
		drops_items[index_drops].style = "height:0px; transition:all 0.3s;"
		icons[index_drops].style = "transform:rotate(0deg); transition:all 0.3s;"
	}
		
	}
})