var isReady = false;
var onReadyCallbacks = [];
var isServiceReady = false;
var onServiceReadyCallbacks = [];
var __uniConfig = {
    "pages": ["pages/index/index", "pages/homes/homes", "pages/release/release", "pages/square/square", "pages/news/news", "pages/mys/mys", "pages/aaa/aaa"],
    "window": {
        "navigationBarTextStyle": "white",
        "navigationBarTitleText": "uni-app",
        "navigationBarBackgroundColor": "#007AFF",
        "backgroundColor": "#FFFFFF"
    },
    "tabBar": {
        "color": "#e6b514",
        "selectedColor": "#3cc51f",
        "borderStyle": "black",
        "backgroundColor": "#ffffff",
        "fontSize": "14px",
        "list": [{
            "pagePath": "pages/homes/homes",
            "iconPath": "static/image/shouye@2x.png",
            "selectedIconPath": "static/image/shouye@3x.png",
            "text": "首页"
        }, {
            "pagePath": "pages/square/square",
            "iconPath": "static/image/guangchang2@2x.png",
            "selectedIconPath": "static/image/guangchang@2x.png",
            "text": "广场"
        }, {
            "pagePath": "pages/release/release",
            "iconPath": "static/image/fabu@3x.png",
            "selectedIconPath": "static/image/fabu@3x.png",
            "text": "发布"
        }, {
            "pagePath": "pages/news/news",
            "iconPath": "static/image/xiaoxi@2x.png",
            "selectedIconPath": "static/image/xiaoxi2@2x.png",
            "text": "消息"
        }, {
            "pagePath": "pages/mys/mys",
            "iconPath": "static/image/wode1@2x.png",
            "selectedIconPath": "static/image/wode2@2x.png",
            "text": "我的"
        }]
    },
    "nvueCompiler": "uni-app",
    "renderer": "auto",
    "splashscreen": {
        "alwaysShowBeforeRender": true,
        "autoclose": false
    },
    "appname": "可爱的小野狗",
    "compilerVersion": "2.8.13",
    "entryPagePath": "pages/index/index",
    "networkTimeout": {
        "request": 60000,
        "connectSocket": 60000,
        "uploadFile": 60000,
        "downloadFile": 60000
    }
};
var __uniRoutes = [{
    "path": "/pages/index/index",
    "meta": {
        "isQuit": true
    },
    "window": {
        "navigationBarTitleText": "启动页",
        "titleNView": false
    }
}, {
    "path": "/pages/homes/homes",
    "meta": {
        "isQuit": true,
        "isTabBar": true
    },
    "window": {
        "navigationBarTitleText": "首页"
    }
}, {
    "path": "/pages/release/release",
    "meta": {
        "isQuit": true,
        "isTabBar": true
    },
    "window": {
        "navigationBarTitleText": "发布"
    }
}, {
    "path": "/pages/square/square",
    "meta": {
        "isQuit": true,
        "isTabBar": true
    },
    "window": {
        "navigationBarTitleText": "广场"
    }
}, {
    "path": "/pages/news/news",
    "meta": {
        "isQuit": true,
        "isTabBar": true
    },
    "window": {
        "navigationBarTitleText": "消息"
    }
}, {
    "path": "/pages/mys/mys",
    "meta": {
        "isQuit": true,
        "isTabBar": true
    },
    "window": {
        "navigationBarTitleText": "我的"
    }
}, {
    "path": "/pages/aaa/aaa",
    "meta": {},
    "window": {}
}];
__uniConfig.onReady = function (callback) {
    if (__uniConfig.ready) {
        callback()
    } else {
        onReadyCallbacks.push(callback)
    }
};
Object.defineProperty(__uniConfig, "ready", {
    get: function () {
        return isReady
    },
    set: function (val) {
        isReady = val;
        if (!isReady) {
            return
        }
        const callbacks = onReadyCallbacks.slice(0);
        onReadyCallbacks.length = 0;
        callbacks.forEach(function (callback) {
            callback()
        })
    }
});
__uniConfig.onServiceReady = function (callback) {
    if (__uniConfig.serviceReady) {
        callback()
    } else {
        onServiceReadyCallbacks.push(callback)
    }
};
Object.defineProperty(__uniConfig, "serviceReady", {
    get: function () {
        return isServiceReady
    },
    set: function (val) {
        isServiceReady = val;
        if (!isServiceReady) {
            return
        }
        const callbacks = onServiceReadyCallbacks.slice(0);
        onServiceReadyCallbacks.length = 0;
        callbacks.forEach(function (callback) {
            callback()
        })
    }
});
service.register("uni-app-config", {
    create(a, b, c) {
        if (!__uniConfig.viewport) {
            var d = b.weex.config.env.scale,
                e = b.weex.config.env.deviceWidth,
                f = Math.ceil(e / d);
            Object.assign(__uniConfig, {
                viewport: f,
                defaultFontSize: Math.round(f / 20)
            })
        }
        return {
            instance: {
                __uniConfig: __uniConfig,
                __uniRoutes: __uniRoutes,
                global: void 0,
                window: void 0,
                document: void 0,
                frames: void 0,
                self: void 0,
                location: void 0,
                navigator: void 0,
                localStorage: void 0,
                history: void 0,
                Caches: void 0,
                screen: void 0,
                alert: void 0,
                confirm: void 0,
                prompt: void 0,
                fetch: void 0,
                XMLHttpRequest: void 0,
                WebSocket: void 0,
                webkit: void 0,
                print: void 0
            }
        }
    }
});