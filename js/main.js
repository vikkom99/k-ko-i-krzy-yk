$(document).ready(function () {

    function check() {
        $('#main-container').keyup(function () {
            let val1 = $('#input1').val();
            let val2 = $('#input2').val();
            let val3 = $('#input3').val();
            let val4 = $('#input4').val();
            let val5 = $('#input5').val();
            let val6 = $('#input6').val();
            let val7 = $('#input7').val();
            let val8 = $('#input8').val();
            let val9 = $('#input9').val();


            let x = "x";
            let o = "o"

            if (val1 === x && val2 === x && val3 === x || val1 === o && val2 === o && val3 === o ||
                val4 === x && val5 === x && val6 === x || val4 === o && val5 === o && val6 === o ||
                val7 === x && val8 === x && val9 === x || val7 === o && val8 === o && val9 === o ||
                val1 === x && val4 === x && val7 === x || val1 === o && val4 === o && val7 === o ||
                val2 === x && val5 === x && val8 === x || val2 === o && val5 === o && val8 === o ||
                val3 === x && val6 === x && val9 === x || val3 === o && val6 === o && val9 === o ||
                val3 === x && val5 === x && val7 === x || val3 === o && val5 === o && val7 === o ||
                val1 === x && val5 === x && val9 === x || val1 === o && val5 === o && val9 === o
            ) {
                alert('Koniec gry')
            } else {
            }

           
        });

    }
    check()
});

