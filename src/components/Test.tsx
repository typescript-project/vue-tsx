import {
	Vue,
	Prop,
	Watch,
	Emit,
	Model,
	Component
} from 'vue-property-decorator'
@Component
export default class Test extends Vue{
	//代表js的props属性可在注解中设置类型是否必填默认值等
	@Prop({required:false,type:String,default:'我是默认值'})
	private msg?:string;
	//Model装饰器相当于model属性参数相当于给event赋值，装饰器设置的属性相当于设置prop属性
	@Model('cc')
	@Prop({required:false,type:String,default:'我是双向绑定的默认值'})
	private value?:string;
	//相当于调用this.$emit('cc',val)
	@Emit('cc')
	sendValue(val:string){}
	//相当于watch下监听value属性的变化
	@Watch('value')
	handleWatchValue(newVal:string,oldVal:string){
		console.log(newVal,oldVal);
	}
	
	handleInput(event:InputEvent){
		//相当于调用this.$emit('cc',val)
		this.sendValue(event.target.value);
	}
	
	get getValue(){
		return `组件内部的value:${this.value}`
	}
	render(){
		return (
			<div class="test">
				
				{this.msg}<br/>
				
				<input value={this.value} 
					onInput={this.handleInput}/>
				<br/>
				{this.getValue}
			</div>
		)
	}
} 