<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>Responsive Navigation Bar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Font Awesome Link for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

    <!-- Style CSS -->
    <link rel="stylesheet" href="./style.css">
</head>
<style>
    /* Google Fonts Link */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

body {
    font-family: "Montserrat", sans-serif;
}

nav {
    background: #001e30;
    height: 80px;
    width: 100%;
}

label.logo {
    color: white;
    font-size: 25px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;
}

nav ul {
    float: right;
    margin-right: 20px;
}

nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
}

nav ul li a {
    color: white;
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
}

a:hover {
    background: #416b7a;
    transition: .5s;
}

.checkbtn {
    font-size: 22px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 30px;
    cursor: pointer;
    display: none;
}

#check {
    display: none;
}

@media (max-width: 1050px) {
    label.logo {
        padding-left: 30px;
    }

    nav ul li a {
        font-size: 16px;
    }
}

/* Responsive media query code for small screen */
@media (max-width: 890px) {
    .checkbtn {
        display: block;
    }

    label.logo {
        font-size: 22px;
    }

    ul {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #001e30;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
    }

    nav ul li {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }

    nav ul li a {
        font-size: 20px;
    }


    #check:checked~ul {
        left: 0;
    }
}

section {
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
</style>

<body>
<nav>
    <input type="checkbox" id="check">

    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
    </label>

    <label class="logo">Macro Wiring Technologies Co. Inc.</label>

    <ul>
        <li><a class="active" href="{{ url('/') }}">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Certifications</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        
        <li class="admin-section">
            <a href="{{ route('login') }}" class="admin-link">
                 Admin Login
            </a>
        </li>
    </ul>
</nav>

    <!-- Section for image -->
    <section></section>
</body>

</html>
