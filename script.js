        var valor1;
        var valor2;
        var resultado;

        function Somar() {
           valor1 = parseInt(document.getElementById('valor1').value);
           valor2 =  parseInt(document.getElementById('valor2').value);

           resultado = valor1 + valor2;

           document.getElementById('resultado').value = resultado;

        }
        
        function Subtrair() {
           valor1 = parseInt(document.getElementById('valor1').value);
           valor2 =  parseInt(document.getElementById('valor2').value);

           resultado = valor1 - valor2;

           document.getElementById('resultado').value = resultado;
        }

        function Multiplicar() {
           valor1 = parseInt(document.getElementById('valor1').value);
           valor2 =  parseInt(document.getElementById('valor2').value);

           resultado = valor1 * valor2;

           document.getElementById('resultado').value = resultado;
        }

        function Dividir() {
           valor1 = parseInt(document.getElementById('valor1').value);
           valor2 =  parseInt(document.getElementById('valor2').value);

           resultado = valor1 / valor2;

           document.getElementById('resultado').value = resultado;
        }

        function Clear() {
           document.getElementById('valor1').value = null;
           document.getElementById('valor2').value = null;
           document.getElementById('resultado').value = null;
        }