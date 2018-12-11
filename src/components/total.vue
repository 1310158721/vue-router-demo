<template>
	<div>
		<h3>total page</h3>
		<ul>
			<li><a href="javascript:;" @click='link("router1")'>router1</a></li>
			<li><a href="javascript:;" @click='link("router2")'>router2</a></li>
			<li><a href="javascript:;" @click='link("router3")'>router3</a></li>
		</ul>
	</div>
</template>
<script>
	export default {
		mounted () {
			// 获取路由信息
			console.log(this.$route)
		},
		// 动态路由
		methods: {
            link (params) {
            	this.$router.push(`/${params}`)
            }
		}
	}
</script>
<style scoped>
	a {
		font-size: 30px;
	}
</style>