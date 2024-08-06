// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    var customButtons = document.querySelectorAll('.custom-btn');

    customButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            customButtons.forEach(function(btn) {
                if (btn !== button) {
                    var targetId = btn.getAttribute('data-target');
                    var targetElement = document.querySelector(targetId);
                    if (targetElement && targetElement.classList.contains('show')) {
                        btn.classList.remove('active');
                        targetElement.classList.remove('show');
                    }
                }
            });

            var targetId = button.getAttribute('data-target');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                button.classList.toggle('active');
                targetElement.classList.toggle('show');
            }
        });
    });
});
