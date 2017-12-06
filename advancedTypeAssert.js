function f1(sn) {
    if (sn == null) {
        return 'default';
    }
    return sn;
}
function f2(sn) {
    return sn || 'default';
}
function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + '. the' + epithet;
    }
    name = name || 'bob';
    return postfix('great');
}
//tsc --strictNullChecks advancedTypeAssert.ts 
