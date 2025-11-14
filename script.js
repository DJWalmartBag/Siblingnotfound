const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const updateSystemTime = () => {
    const now = new Date();
    document.getElementById('system-time').textContent = now.toUTCString();
};

function toggleAuditLog() {
    const logDetails = document.getElementById('audit-log-details');
    const logButton = document.getElementById('toggle-log-btn');
    const icon = logButton.querySelector('.material-symbols-outlined');

    if (logDetails.classList.contains('hidden')) {
        logDetails.classList.remove('hidden');
        icon.textContent = 'expand_less';
        logButton.innerHTML = `<span class="material-symbols-outlined mr-2">expand_less</span>Hide Detailed Data Node Audit Log (Raw)`;
    } else {
        logDetails.classList.add('hidden');
        icon.textContent = 'expand_more';
        logButton.innerHTML = `<span class="material-symbols-outlined mr-2">expand_more</span>View Detailed Data Node Audit Log (Raw)`;
    }
}

window.onload = () => {
    document.getElementById('diag-id').textContent = generateUUID();

    updateSystemTime();
    setInterval(updateSystemTime, 1000);
};
