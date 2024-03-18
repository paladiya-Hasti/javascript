class calculator {
    constructor(a, b, result, getresult,setclearesult=0) {
        this.a = a;
        this.b = b;
        this.result = result;
      
    };
    setclearesult(){
        console.clear();
    }
    getresult(result){
        this.setclearesult();
        this.result=result;
        console.log(this.result)
    }
  
    add(a, b, result) {
        result = a + b;
        this.getresult(result)
    }
    sub(a, b, result) {
        result = a - b;
        this.getresult(result)

    }
    mul(a, b, result) {
        result = a * b;
        this.getresult(result)
    }
    div(a, b, result) {
        result = a / b;
        this.getresult(result)
    }
   
}
class basecalculator extends calculator {
    constructor(a, b, c, result) {
        super(a, b,result)
        this.c = c;
    }
    add(a, b, c, result) {
        result = a + b + c;
        this.getresult(result)
    }
    sub(a, b, c, result) {
        result = a - b - c;
        this.getresult(result)
    }
    mul(a, b, c, result) {
        result = a * b * c;
        this.getresult(result)
    }
    div(a, b, c, result) {
        result = a / b / c;
        this.getresult(result)
    }
}
class sum extends calculator {
    constructor(a,result=0){
        // super(a[0],a[1],result)
        this.a=a;
    }
    add(arr){
        for(i=0;i<this.a.length;i++){
            result+=this.result[i];
        }
    }
    mul(arr){
        for(i=0;i<this.a.length;i++){
            result*=this.result[i];
        }
    }
}

let cal = new calculator();
cal.add(3, 6);
cal.sub(9, 5)
cal.mul(4, 5);
cal.div(9, 3);
let cal1 = new basecalculator();
cal1.add(2, 3, 5);
cal1.sub(9, 5, 3);
cal1.mul(4, 5, 3);
cal1.div(9, 3, 2);

let cal2 = new sum();
sum.add(2,5,3,4,6);
