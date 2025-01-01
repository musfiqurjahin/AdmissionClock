
function updateCountdown(targetDate, elementId) {
    const now = new Date();
    const remaining = targetDate - now;

    if (remaining > 0) {
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      document.getElementById(elementId).textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      document.getElementById(elementId).textContent = "Exam started or finished!";
    }
  }

  //Add_New_CountDown:
  const medicalExamDate = new Date("2025-01-17T11:00:00");
  const DentalExamDate = new Date("2025-02-28T10:00:00");
  const bUnitExamDate = new Date("2025-01-25T11:00:00");
  const cUnitExamDate = new Date("2025-02-15T11:00:00");

  setInterval(() => updateCountdown(medicalExamDate, "countdown1"), 1000);
  setInterval(() => updateCountdown(bUnitExamDate, "countdown2"), 1000);
  setInterval(() => updateCountdown(cUnitExamDate, "countdown3"), 1000);
  setInterval(() => updateCountdown(DentalExamDate, "countdown4"), 1000);
