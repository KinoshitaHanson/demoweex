const navigator = weex.requireModule("navigator");

function getTargetUrl(target) {
    const bundleUrl = weex.config.bundleUrl;
    const isAndroid = bundleUrl.indexOf('file://assets/') >= 0;
    const isiOS = (bundleUrl.indexOf('file:///') >= 0) && (bundleUrl.indexOf('WeexDemo.app') > 0);

    // weex.requireModule("modal").toast({
    //     message: bundleUrl,
    //     duration: 0.5
    // });
    // return;
    if (isAndroid) {
        return `local://file://assets/dist/${target}.js`;
    } else if (isiOS) {
        return `${bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)}/views/${target}.js`;
    } else {
        let host = `localhost:8080`;
        let matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        return `http://${host}/views/${target}.html`;
    }
}

export function linkTo(url, animated = "true") {
    // weex.requireModule("modal").toast({
    //     message: getTargetUrl(url),
    //     duration: 0.5
    // });
    // getTargetUrl(url);
    // return ;
    return new Promise((r, s) => {
        navigator.push({
            url: getTargetUrl(url),
            animated
        }, event => {
            r(event);
        })

    })

}