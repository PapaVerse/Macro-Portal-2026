<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>404 - Page Not Found</title>
    <meta name="robots" content="noindex">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 flex items-center justify-center min-h-screen">

    <div class="text-center">
        <h1 class="text-6xl font-black text-blue-600 mb-4">404</h1>
        <p class="text-gray-600 text-lg mb-6">
            Sorry, the page you are looking for does not exist.
        </p>

        <a href="{{ route('home') }}"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Go Back Home
        </a>
    </div>

</body>

</html>