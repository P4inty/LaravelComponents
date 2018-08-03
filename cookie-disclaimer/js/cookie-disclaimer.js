new Vue({
    el: "#cookie-disclaimer",
    data: {
        hasAgreed: false
    },

    methods: {
        agree(year) {
            this.hasAgreed = true;
            this.setCookie("cookieDisclaimer", year);
        },

        setCookie(name, year) {
            date = new Date(
                new Date().setFullYear(new Date().getFullYear() + year)
            );
            document.cookie = name + "=dismiss; expires=" + date;
        },

        getCookie(name) {
            match = document.cookie.match(
                new RegExp("(^| )" + name + "=([^;]+)")
            );
            if (match) this.hasAgreed = true;
        }
    },
    created: function() {
        this.getCookie("cookieDisclaimer");
    }
});
