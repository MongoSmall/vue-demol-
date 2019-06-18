new Vue({
	el:'#Top',
	data: {
		name:"yanhaotiansb",
		message:'你好 vue!!',
		seen:true
	},
	methods:{
		greet:function(time){
			return 'Good' + " " + time + " " + this.name + "!";
			
		},
	}
	
});
new Vue({
	el:'#app',
	data:{
		todos:[
		{text:'learn vue'},
		{text:'learn javascript'},
		{text:'build something awesome'}
		
		]
		
	}
	
});
new Vue({
	el:'#age',
	data:{
		age:22,
		x:0,
		y:0
	},
	methods:{
		add:function(inc){
			this.age += inc;
		},
		subtract:function(dec){
			this.age -= dec;
		},
		updateXY:function(event){
			this.x=event.offsetX;
			this.y=event.offsetY;
		},
		stopmoving:function(event){
//			js中阻止冒泡事件：event.stopPropagation();
		},
		alert:function(){
//			 直接alert一句话
			alert("哼！你被阻止了");
		}
	}
	
});
new Vue({
	el:'#app2',
	data:{
		message:'hello vue!',
		information:'人间不容易',
		
	},
	methods:{
		reverseMessage:function(){
			this.information = this.information.split('').reverse().join('')
//			slpit后会拆散会数组，join后就会变回原来的字符串了,所以我们要把数据反过来重组就可以用message.split(' ').reverse( ).join(' ')
		}
	}
	
});
new Vue({
	el:'#app3',
	data:{
		
	},
	methods:{
		LogName:function(){
			console.log("你正在输入姓名...");
		},
		LogAge:function(){
			console.log("你正在输入年龄...");
		}
	}
	
});
new Vue({
	el:'#app4',
	data:{
		tel:"",
		addr:"",
	},
	methods:{
		telephone:function(){
//		console.log(this.$refs.tel.value);用refs获取
//		this.tel=this.$refs.tel.value;
//v-model也可以
//		把拿到的这个数据赋值给当前的tel
		},
		address:function(){
//		this.addr=this.$refs.addr.value;
		},
		
	}
});
new Vue({
	el:'#app5',
	data:{
		a:0,
		b:0,
		age:20,
		
	},
	methods:{
//		addToA:function(){
//			console.log("add To A");
//			return this.a+this.age;
//		},
//		addToB:function(){
//			console.log("add To B");
//			return this.b+this.age;
//		},
//		
	},
	computed:{
		addToA:function(){
		console.log("add To A");
			return this.a+this.age;	
		},
		addToB:function(){
			console.log("add To B");
			return this.b+this.age;
		}
	}
	
});