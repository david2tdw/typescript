function proxify(o) {
    var result = {};
    return result;
}
//let proxyProps = proxify(props)
function unProxify(t) {
    var result = {};
    for (var k in t) {
        result[k] = t[k].get();
    }
    return result;
}
