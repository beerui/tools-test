import HelloWorld from "./hello-world"

const components = [HelloWorld]

const install = function (Vue) {
	if (install.installed) return
	components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.vue) {
	install(window.vue)
}

export {
	install,
	HelloWorld
}
