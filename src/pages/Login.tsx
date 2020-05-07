import { Vue , Component } from 'vue-property-decorator'
import Test from '@/components/Test';
@Component
export default class Login extends Vue{
	
	private title?:string = '我是Login页面'
	
	private msg:string = '我是login传入的msg'
	
	private value:string = '我是外部传入的value'
	
	get getValue(){
		return `组件外部的value:${this.value}`
	}
	
	render(){
		return (
			<div>
				{this.title}<br/>
				{this.getValue}
				<Test msg={this.msg} v-model={this.value}></Test>
			</div>
		)
	}
} 