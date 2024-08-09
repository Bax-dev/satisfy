// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    var customButtons = document.querySelectorAll('.custom-btn');

    customButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetId = button.getAttribute('data-target');
            var targetElement = document.querySelector(targetId);

            customButtons.forEach(function(btn) {
                if (btn !== button) {
                    var otherTargetId = btn.getAttribute('data-target');
                    var otherTargetElement = document.querySelector(otherTargetId);
                    if (otherTargetElement && otherTargetElement.classList.contains('show')) {
                        otherTargetElement.classList.remove('show');
                        btn.classList.remove('active');
                    }
                }
            });

            // Toggle the current target element
            if (targetElement) {
                targetElement.classList.toggle('show');
                button.classList.toggle('active');
            }
        });
    });
});

