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

let modal_show_btn = document.querySelectorAll('.modal_show')
modal_show_btn.forEach((b)=>{
	b.onclick = function(){
		document.querySelector('.modal_hackathon').style = "display:block; z-index:150;"
		document.querySelector('.modal_bg').style = "display:block; z-index:1;"
		document.querySelector('.modal_items').style = " transform: translateY(0%); opacity:1; transition:all 0.3s;"
		document.body.style = "position:fixed;"

	}
})

let modal_bg = document.querySelector('.modal_bg')
modal_bg.onclick =  function() {
	document.querySelector('.modal_items').style = "transform: translateY(-20%); opacity:0; transition:all 0.3s;"
	document.querySelector('.modal_hackathon').style = "display:none; z-index:-5;"
	document.querySelector('.modal_bg').style = "display:none; z-index:-5;"
	document.body.style = "position:inerit;"

}


let modal_close_btn = document.querySelector('.close_modal')
modal_close_btn.onclick =  function () {
	document.querySelector('.modal_items').style = "transform: translateY(-20%); opacity:0; transition:all 0.3s;"
	document.querySelector('.modal_hackathon').style = "display:none; z-index:-5;"
	document.querySelector('.modal_bg').style = "display:none; z-index:-5;"
	document.body.style = "position:inerit;"

}
let eye_num = 1
document.querySelector('.click_eye').onclick = ()=>{
	eye_num++
	if(eye_num >= 2){
		document.getElementById('eye').classList = "fa fa-eye"
		document.querySelector('.input_password').type = "text"
		eye_num = 0
	}
	else {
		document.getElementById('eye').classList = "fa fa-eye-slash"
		document.querySelector('.input_password').type = "password"
	}
}