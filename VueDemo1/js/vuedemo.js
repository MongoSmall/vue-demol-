new Vue({
	el:'#demo',
	data:{
		health:100,
		ended:false,
	/*当health减到0时,需要切换图片,首先定义ended为false*/
	},
	methods:{
		punch:function(){
			this.health -= 10;
			if(this.health <= 0){
		    this.ended = true;
			}
		},
		restart:function(){
			this.health=100;
			this.ended=false;
		}
	}
	
});