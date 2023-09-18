document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');
    const confirmation = document.getElementById('confirmation');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const ticketType = document.getElementById('ticket-type').value;
        const date = document.getElementById('date').value;
        const numTickets = document.getElementById('num-tickets').value;
        
        document.getElementById('confirm-name').textContent = name;
        document.getElementById('confirm-email').textContent = email;
        document.getElementById('confirm-ticket-type').textContent = ticketType;
        document.getElementById('confirm-date').textContent = date;
        document.getElementById('confirm-num-tickets').textContent = numTickets;
        
        form.reset();
        confirmation.classList.remove('hidden');
    });
});
