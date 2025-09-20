export function formatDateTime(dateString) {
  const date = new Date(dateString);

  const dayMonth = date.toLocaleDateString("en-US", {
    weekday: "long",  
    month: "long",     
    day: "numeric",    
  });

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,     
  });

  return `${dayMonth}. ${time}`;
}
