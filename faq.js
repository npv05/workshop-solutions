document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const accordionItem = question.parentElement;
        const answer = accordionItem.querySelector('.answer');
        const arrow = question.querySelector('.arrow');

        // Toggle the active class
        accordionItem.classList.toggle('active');

        // Toggle the answer visibility
        if (accordionItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

        // Rotate the arrow
        arrow.style.transform = accordionItem.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});
