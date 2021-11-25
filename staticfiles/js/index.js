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

		drops_items[index_drops].style = " height:100px; transition:all 0.3s;"
		icons[index_drops].style = "transform:rotate(180deg); transition:all 0.3s;"

		btnArr = Array.from(drops_items)
		delete btnArr[index_drops]

		iconarr = Array.from(icons)
		delete iconarr[index_drops]	

		btnArr.forEach((f)=>{
			f.style = "height:0; transition:all 0.3s;"
		})
		iconarr.forEach((f)=>{
			f.style = "transform:rotate(0deg); transition:all 0.3s;"
		})

		if(num2 == 2){num2 = 0}

	// else{
	// 	drops_items[index_drops].style = "height:0px; transition:all 0.3s;"
	// 	icons[index_drops].style = "transform:rotate(0deg); transition:all 0.3s;"
	// }
	
	}
})

let click_settings = document.querySelector('.m1_content_right')
let num3 = 0

click_settings.addEventListener('click',()=>{
		
function myFunction(y) {
  if (y.matches) {
    
	num3 ++ 
	if (num3 >= 2) {num3 = 0}

	if (num3 == 1) {
		document.querySelector('.m_block_select').style = "height:auto; padding:0px 0px 20px 0px; border-bottom:2px solid black; transition:all 0.4s;"
	}
	else{
		document.querySelector('.m_block_select').style = "height:0px;  transition:all 0.5s;"
	}

 }
 else {
    document.querySelector('.m_block_select').style = "height:auto; transition:all 0.5s;"
    if (num3 == 1) {num3 = 1}
}

}

var y = window.matchMedia("(max-width:768px)")
myFunction(y)
y.addListener(myFunction)
})
