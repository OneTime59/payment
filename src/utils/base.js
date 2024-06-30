let base
if (sessionStorage.getItem('base')) {
    base = {
        base: sessionStorage.getItem('base')
    }
} else {
    base = { 
        // base: 'http://192.168.1.136:9021/'
        // base: 'http://192.168.1.178:9027/' // LCC
        base: 'http://192.168.1.134:9021/' // 测试地址
    }
}

export default base