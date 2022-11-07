var api = "https://v2.api.light.xhhzs.cn/v2"

var 公告 = new Vue({
    el: '#公告',
    data() {
        return {
            message: null
        }
    },
    mounted() {
        axios
            .get(api + '/announcement')
            .then(response => (this.message = response.data.data))
            .catch(function (error) { // 请求失败处理
                console.log(error);
            })
    }
})

var 文章列表_time = new Vue({
    el: '#文章列表-time',
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        axios
            .get(api + '/post?order=2')
            .then(response => (this.posts = response.data.data))
            .catch(function (error) { // 请求失败处理
                console.log(error);
            })
    }
})