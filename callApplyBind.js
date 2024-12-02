var obj={
    name:"prince"
}

function print(){
    console.log(this.name);
}

print.call(obj);