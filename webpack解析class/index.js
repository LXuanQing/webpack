
class Test_class{
    constructor(height, width) {
        
        this.height = height;
        this.width = width;
    }

    fn1() {
        console.log(this,"fn1")
    }
    fn3() {
        console.log(this,"fn3")
    }
    fn2 = () => {
        console.log(this,"fn2")
    }
    cc = "23"
    static fn_static() {
        console.log(this,"静态方法")
    }
    static fn_static2 = () => {
        console.log(this,"静态方法2")
    }
    static inner = 3 //es6不支持静态属性 // es7支持静态属性 设置安装 "stage-2"  
    static obj = {
        aa: Test_class.fn_static
    }
}
Test_class.a = 3
let Person = new Test_class()
Person.fn1()
Person.fn2()
Test_class.fn_static()
Test_class.fn_static2()
console.log(Person)
console.log(Test_class)
console.log(Test_class.obj)