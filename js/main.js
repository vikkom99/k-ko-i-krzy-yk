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
            if (val1 === val2 && val1 === val3 ||
                val4 === val5 && val4 === val6 ||
                val7 === val8 && val7 === val9 ||
                val1 === val4 && val1 === val7 ||
                val2 === val5 && val2 === val8 ||
                val3 === val6 && val3 === val9 ||
                val1 === val5 && val1 === val9 ||
                val3 === val5 && val3 === val7 ) {
                console.log("KONIEC");
            } else {
            }
        });

    }
    check()
});

