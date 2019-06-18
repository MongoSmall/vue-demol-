Vue.component('yht',{
	data: function () {
  		return {
    		counter: 0
    	}
 	},
	template:'<button @click="counter++">你点击了我{{counter}}次</button>',
})
new Vue({
	el:'#app',
	data:{
		foo: 1,
		show: true
	},
	methods:{
		add:function(){
			this.foo++;
		},
		sub:function(){
			this.foo--;
		},
		isShow:function(){
			this.show=!this.show;
		},
	},
	computed:{
		
	}
})

