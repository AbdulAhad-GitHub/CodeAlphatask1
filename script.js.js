    <script>
        function displayCurrentDateTime() {
            var now = new Date();
            var dateTimeString = now.toLocaleDateString() + " " + now.toLocaleTimeString();
            document.getElementById('currentDateTime').innerText = dateTimeString;
        }

        function ageCalculator() {
            var userinput = document.getElementById("DOB").value;
            var dob = new Date(userinput);
            if (userinput == null || userinput == '') {
                document.getElementById("message").innerHTML = "**Choose a date please!";
                return false;
            } else {
                var month_diff = Date.now() - dob.getTime();
                var age_dt = new Date(month_diff);
                var year = age_dt.getUTCFullYear();
                var age = Math.abs(year - 1970);
                document.getElementById("result").innerHTML = "Age is: " + age + " years.";
            }
        }

        // Update the current date and time every second
        setInterval(displayCurrentDateTime, 1000);
    </script>