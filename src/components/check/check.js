function checkmail(inp) {
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(reg.test(inp)) {
        return true;
    }
    else {
        return false;
    }
}

export {checkmail};
