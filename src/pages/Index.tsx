import { Vue , Component } from 'vue-property-decorator'
import style from './index.module.scss';
@Component
export default class Index extends Vue{
	//相当于js中的data中的其中一个属性
	private title?:string = '我是标题'
	
	private author?:string = 'LeoZhang'
	//相当于computed中的函数
	get authorComputed(){
		return `作者是:${this.author}`
	}
	//生命周期函数
	created(){
		console.log('我是默认的生命周期')
	}
	//相当于methods
	handleClick(arg:string):void{
		this.title = arg;
	}
	render(){
		return (
			<div class="index-page">
				<h2>{this.title}<small>by {this.author}</small></h2>
				<p>{this.authorComputed}</p>
				<button class={style['p-btn']} onClick={this.handleClick.bind(this,'我是新标题')}>改变标题</button>	
				<br/>
				测试v-model改变author
				<input v-model={this.author}/>
			</div>
		)
	}
} 