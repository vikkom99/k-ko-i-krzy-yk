$(document).ready(function () {

    function check() {
        $('#main-container').keyup(function () {
            let val1 = $('#1').val();
            let val2 = $('#2').val();
            let val3 = $('#3').val();
            let val4 = $('#4').val();
            let val5 = $('#5').val();
            let val6 = $('#6').val();
            let val7 = $('#7').val();
            let val8 = $('#8').val();
            let val9 = $('#9').val();
            // if (val1 === val2 && val1 === val3 ||
            //     val4 === val5 && val4 === val6 ||
            //     val7 === val8 && val7 === val9 ||
            //     val1 === val4 && val1 === val7 ||
            //     val2 === val5 && val2 === val8 ||
            //     val3 === val6 && val3 === val9 ||
            //     val1 === val5 && val1 === val9 ||
            //     val3 === val5 && val3 === val7) {
            //     console.log("KONIEC");
            // } else {
            // }

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
                console.log("KONIEC");
            } else {
            }
        });

    }
    check()
});

