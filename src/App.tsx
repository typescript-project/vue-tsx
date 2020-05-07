import { Vue ,Component } from 'vue-property-decorator';
//以模块的形式引入当前的样式文件
import style from './app.module.scss';
@Component
export default class App extends Vue{
	render(){
		return (
		//这里代表将app.module.scss中的.app这个class注入到标签中
			<div class={style.app} >
				<router-view></router-view>
			</div>
		)
	}
}