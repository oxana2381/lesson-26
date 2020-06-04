let calculator = {
    

     read() {
       this.apple=+prompt('apple');
       this.orange=+prompt('orange')
     },
     sum() {
        return  this.apple + this.orange;
     },
     mul() {
         return this.apple * this.orange;
     }
    
        
};
calculator.read()
alert (calculator.sum())
alert(calculator.mul())

