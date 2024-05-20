interface Reminder {
    title: string;
    text: string;
}

const pastelColors: string[] = [
    "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF",
    "#FFCCE5", "#CCCCFF", "#FFCCE5", "#CCFFCC", "#FFEBCC",
    "#E6E6FA", "#FFFACD", "#E0FFFF", "#F5F5DC", "#FFE4E1",
    "#D8BFD8", "#DDA0DD", "#FFD700", "#AFEEEE", "#B0E0E6",
    "#98FB98", "#ADD8E6", "#D3D3D3", "#FFB6C1", "#FAFAD2",
    "#FFDAB9", "#E6E6FA", "#FFB3BA", "#FFDFBA", "#FFFFBA",
    "#BAFFC9", "#BAE1FF", "#FFCCE5"
];

async function fetchReminders(): Promise<Reminder[]> {
    const response = await fetch('reminders.json');
    const data: Reminder[] = await response.json();
    return data;
}

async function displayReminder() {
    const reminders = await fetchReminders();
    const date = new Date();
    const day = date.getDate() - 1; // Get the current day of the month (0-indexed)
    const reminder = reminders[day % reminders.length];
    const color = pastelColors[day % pastelColors.length];

    const titleElement = document.getElementById("reminder-title");
    const textElement = document.getElementById("reminder-text");
    const containerElement = document.getElementById("reminder-container");

    if (titleElement && textElement && containerElement) {
        titleElement.textContent = reminder.title;
        textElement.textContent = reminder.text;
        document.body.style.backgroundColor = color;
    }
}


window.onload = displayReminder;
