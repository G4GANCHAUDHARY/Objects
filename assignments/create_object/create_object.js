function CreateObject(arr) {
    // Write your code here
    const obj={};
    for (var x=0;x<arr.length;x=x+2){
        obj[arr[x]]=arr[x+1]
    }
    return obj
}

module.exports = CreateObject;
