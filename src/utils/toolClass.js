var tools = {
    /**
     * 正则表达式-判断url参数
     */
    GetQueryString: (name) => {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    /**
     * 正则表达式-身份证
     */
    reg_IDCard: (val) => {
        var reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
        return reg.test(val);
    },
    /**
     * 获取当前日期并格式化
     */
    getDate: (type) => {
        var mydate = new Date();
        if (type == 1) {
            return mydate.getFullYear() + "-" + (mydate.getMonth() + 1) + "-" + mydate.getDate();
        }
        return mydate.toLocaleString();
    },
    /**
     * 删除左边和右边空格
     */
    trim: (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
}

export { tools };