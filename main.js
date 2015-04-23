require.config( {
    baseUrl: '',
    paths: {
        jquery: 'vendor/jquery/jquery-2.1.1',
        avalon: 'vendor/avalon/avalon.modern',
        mobile: 'vendor/avalon/avalon.mobile',
        text: 'vendor/require/text',
        domReady: 'vendor/require/domReady',
        css: 'vendor/require/css'
    },
    priority: ['text', 'css'],
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        avalon: {
            exports: 'avalon'
        }
    }
});

require(['avalon', 'domReady!'], function() {   // 添加根VM(处理共用部分)
    avalon.log('加载avalon完毕，开始构建根vm与加载其他模块');
    avalon.templateCache.empty = " "
    avalon.define( {
        $id: "root",
        header: "这是根消息，用于放置其他模块都共用的东西，比如<b>用户名</b>什么的",
        footer: "页脚消息",
        page: "empty",
        page2: "empty"
    })
    avalon.scan(document.body)
    // require(['./modules/aaa/aaa'], function() {

    // });
    require(['./modules/eee/eee'], function() {
        avalon.log('加载其他完毕');
    });
});