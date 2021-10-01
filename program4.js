//Reminder AI (Part 1) - Extract reminder text
//Create a reminder function, which returns a reminder text from the message passed to it.
//Go through the test cases, to get an idea of expected keywords.
function extractReminderText(message) {
    const arrayOfWords = message.split(" ");
    const reminderKeywords = ["reminder", "remind", "reminders"];
    const connectionWords = ["me", "about", "to"];
    let reminderKeywordFound = false;
    let reminder = arrayOfWords.reduce((accumulator, currentValue, index) => {
      const value = currentValue.toLowerCase();
      if (reminderKeywordFound) {
        return connectionWords.includes(value)
          ? ""
          : `${accumulator} ${arrayOfWords[index]}`;
      }
      if (reminderKeywords.includes(value)) {
        reminderKeywordFound = true;
      }
      return "";
    }, "");
    reminder = reminder.trim();
    return (reminder.charAt(0).toUpperCase() + reminder.slice(1));
  }