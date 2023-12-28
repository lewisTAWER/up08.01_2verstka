document.addEventListener('DOMContentLoaded', function () {
    var trigger = document.getElementById('trigger');
    var dropdown = document.getElementById('dropdown');
    
    trigger.addEventListener('click', function () {
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    });
    
    document.addEventListener('click', function (event) {
    if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
    }
    });
    });