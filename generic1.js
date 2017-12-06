function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//let myIdentity: <T[]>(arg: T[]) => T[] = loggingIdentity
loggingIdentity([]);
