// 导入组件，组件必须声明 name
import HelloVue from './src/hello-vue.vue'

// 为组件提供 install 安装方法，供按需引入
HelloVue.install = function (Vue) {
	Vue.component(HelloVue.name, HelloVue)
}

// 默认导出组件
export default HelloVue
