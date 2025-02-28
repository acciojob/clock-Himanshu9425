//your JS code here. If required.
let timerdisplay=document.querySelector("#timer");



setInterval(
	function(){
		let currentDate=new Date();
		timerdisplay.innerHTML=currentDate.toLocaleString();
	},1000
)