function submitLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   
    // Email regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
   
    // Add your login logic here (e.g., redirect to main page)
    alert("Login successful!");
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("password-container").innerText = "Password: " + password;
    
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission
            submitLogin(); // Call your submitLogin function
        }
    });
});


function toggleAartis(aartiId) {
    var aartiList = document.getElementById(aartiId + '-list');
    var searchContainer = document.querySelector('.search-container');

    if (aartiList.style.display === 'none' || aartiList.style.display === '') {
        closeAllAartis();
        aartiList.style.display = 'block';
        searchContainer.style.display = 'block'; // Show search button
        document.body.classList.add('aarti-background'); // Add the class to body
    } else {
        aartiList.style.display = 'none';
        searchContainer.style.display = 'none'; // Hide search button
        document.body.classList.remove('aarti-background'); // Remove the class from body

        // Close individual Aarti items
        var aartiItems = aartiList.querySelectorAll('li');
        aartiItems.forEach(function(item) {
            item.style.display = 'none';
        });
    }
}

function toggleAarti(aartiId) {
    var selectedAarti = document.getElementById(aartiId + "-aarti");
    var allAartis = document.querySelectorAll('.aarti');
    allAartis.forEach(function(aarti) {
        if (aarti.id !== aartiId + "-aarti") {
            aarti.style.display = 'none';
        }
    });
    if (selectedAarti.style.display === "none" || selectedAarti.style.display === "") {
        selectedAarti.style.display = "block";
    } else {
        selectedAarti.style.display = "none";
    }
}
function closeAllAartis() {
    var allAartiLists = document.querySelectorAll('.aarti-list');
    allAartiLists.forEach(function(aartiList) {
        aartiList.style.display = 'none';
    });
}

function searchAarti() {
    var searchInput = document.getElementById("searchInput");
    var searchTerm = searchInput.value.toLowerCase();
    var folders = document.querySelectorAll('.folder');
    var folderContainer = document.querySelector('.folder-container');
    var hasResults = false;

    folders.forEach(function(folder) {
        var folderText = folder.textContent.toLowerCase();
        if (folderText.includes(searchTerm)) {
            folder.style.display = "flex";
            hasResults = true;
        } else {
            folder.style.display = "none";
        }
    });

    // Adjust the border based on search results
    folderContainer.style.borderBottom = hasResults ? "1px solid #ccc" : "none";
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchAarti();
    }
});
document.getElementById('Mantra').addEventListener('click', function() {
    var mantraList = document.getElementById('Mantra-list');
    if (mantraList.style.display === 'none' || mantraList.style.display === '') {
        closeAllAartis(); // Close all other lists
        mantraList.style.display = 'block'; // Show the Nara list
    } else {
        mantraList.style.display = 'none'; // Hide the Nara list
    }
});
function toggleAartis(aartiId) {
    var aartiList = document.getElementById(aartiId + '-list');
    var searchContainer = document.querySelector('.search-container');

    if (aartiList.style.display === 'none' || aartiList.style.display === '') {
        closeAllAartis();
        aartiList.style.display = 'block';
        searchContainer.style.display = 'block'; // Show search button
        document.body.classList.add('aarti-background'); // Add the class to body
    } else {
        aartiList.style.display = 'none';
        searchContainer.style.display = 'none'; // Hide search button
        document.body.classList.remove('aarti-background'); // Remove the class from body

        // Close individual Aarti items
        var aartiItems = aartiList.querySelectorAll('li');
        aartiItems.forEach(function(item) {
            item.style.display = 'none';
        });
    }
}

function toggleAartis(aartiId) {
    var aartiList = document.getElementById(aartiId + '-list');
    var searchContainer = document.querySelector('.search-container');

    if (aartiList.style.display === 'none' || aartiList.style.display === '') {
        closeAllAartis();
        aartiList.style.display = 'block';
        searchContainer.style.display = 'block'; // Show search button
        document.body.classList.add('aarti-background'); // Add the class to body
    } else {
        aartiList.style.display = 'none';
        searchContainer.style.display = 'none'; // Hide search button
        document.body.classList.remove('aarti-background'); // Remove the class from body

        // Close individual Aarti items
        var aartiItems = aartiList.querySelectorAll('li');
        aartiItems.forEach(function(item) {
            item.style.display = 'none';
        });
    }
}

function toggleAartis(aartiId) {
    var aartiList = document.getElementById(aartiId + '-list');
    var searchContainer = document.querySelector('.search-container');

    if (aartiList.style.display === 'none' || aartiList.style.display === '') {
        closeAllAartis();
        aartiList.style.display = 'block';
        searchContainer.style.display = 'block'; // Show search button
        document.body.classList.add('aarti-background'); // Add the class to body
    } else {
        aartiList.style.display = 'none';
        searchContainer.style.display = 'none'; // Hide search button
        document.body.classList.remove('aarti-background'); // Remove the class from body

        // Close individual Aarti items
        var aartiItems = aartiList.querySelectorAll('li');
        aartiItems.forEach(function(item) {
            item.style.display = 'none';
        });
    }
}

function toggleAartis(aartiId) {
    var aartiList = document.getElementById(aartiId + '-list');
    var searchContainer = document.querySelector('.search-container');

    if (aartiList.style.display === 'none' || aartiList.style.display === '') {
        closeAllAartis();
        aartiList.style.display = 'block';
        searchContainer.style.display = 'block'; // Show search button
        document.body.classList.add('aarti-background'); // Add the class to body
    } else {
        aartiList.style.display = 'none';
        searchContainer.style.display = 'none'; // Hide search button
        document.body.classList.remove('aarti-background'); // Remove the class from body

        // Close individual Aarti items
        var aartiItems = aartiList.querySelectorAll('li');
        aartiItems.forEach(function(item) {
            item.style.display = 'none';
        });
    }
}
// Add other functions if needed

document.addEventListener('DOMContentLoaded', function() {
    const sundarKaandFolder = document.getElementById('sundar-kaand-folder');
    const contentContainer = document.getElementById('content-container');
    const sanatanAartiList = document.getElementById('sanatan-aarti-list');
    const mantraList = document.getElementById('mantra-list');

    sundarKaandFolder.addEventListener('click', function() {
        // Check if the content container is already visible
        if (contentContainer.classList.contains('visible')) {
            // Hide the Sundar Kaand content container
            contentContainer.classList.remove('visible');
            contentContainer.classList.add('hidden');
        } else {
            // Hide the Sanatan Aarti list and Mantra list if they are visible
            if (sanatanAartiList.classList.contains('visible')) {
                sanatanAartiList.classList.remove('visible');
                sanatanAartiList.classList.add('hidden');
            }
            if (mantraList.classList.contains('visible')) {
                mantraList.classList.remove('visible');
                mantraList.classList.add('hidden');
            }

            // Show the Sundar Kaand content container
            contentContainer.classList.remove('hidden');
            contentContainer.classList.add('visible');
        }
    });
});
