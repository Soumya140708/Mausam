function loginUser() {

    var name =
        document.getElementById("name").value;

    var age =
        document.getElementById("age").value;

    var email =
        document.getElementById("email").value;

    var city =
        document.getElementById("city").value;

    var alerts =
        document.getElementById("alerts").checked;

    var locationPermission =
        document.getElementById("locationPermission").checked;


    /* Save user information */

    localStorage.setItem("userName", name);

    localStorage.setItem("userAge", age);

    localStorage.setItem("userEmail", email);

    localStorage.setItem("userCity", city);


    /* Save alert preference */

    localStorage.setItem("alertPreference", alerts);


    /* Save location preference */

    localStorage.setItem("locationPermission", locationPermission);


    /* Go to persona page */

    window.location.href = "persona.html";

}