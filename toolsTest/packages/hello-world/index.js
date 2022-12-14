// 导入组件，组件必须声明 name
import HelloWorld from './src/hello-world.vue'

// 为组件提供 install 安装方法，供按需引入
HelloWorld.install = function (Vue) {
	Vue.component(HelloWorld.name, HelloWorld)
}

// 默认导出组件
export default HelloWorld
