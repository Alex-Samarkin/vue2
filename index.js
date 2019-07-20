var app = new Vue({
    el: '#app',
    data: {
        seen: false,
        message: "You cant see me!"
    },
    methods: {
        showMsg: function () {
            app.seen = !app.seen;
        }
    },
})