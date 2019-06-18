new Vue({
	el:'#app1',
	data:{
		changeColor:false,
		changeLength:false,
		error:false,
		success:false
		
	},
	computed:{
		compClasses:function(){
			return{
			changeColor:this.changeColor,
			changeLength:this.changeLength
			}
		}
	}
	
	
});
new Vue({
	el:'#app3',
	data:{
        characters:["wangfang","yanhaotian","mongo"],
		users:[
		     {name:"apple",color:"red"},
		     {name:"pech",color:"pink"},
		     {name:"mongo",color:"yellow"}
		]
	}
})
