
        function calculate() {
            let height = document.getElementById('i2').value;
            let weight = document.getElementById('i4').value;
            let result = parseInt(weight / height**2);

            if(result < 20){
                document.getElementById('output').innerHTML = "BMI = " +result.toFixed(2)+"  (Under Weight)";
            }
            
            else if(result < 25){
                document.getElementById('output').innerHTML = "BMI = " +result.toFixed(2)+"  (Normal Weight)";
            }

            else if(result > 26){
                document.getElementById('output').innerHTML = "BMI = " +result.toFixed(2)+"  (Over Weight)";
            }

            else{
                document.getElementById('output').innerHTML ="Enter aValid Number";
            }
        
           
        }


