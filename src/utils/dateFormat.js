/**
 * Formats a date string from YYYY-MM or YYYY format to Month YYYY or YYYY
 * @param {string} dateString - Date string in format YYYY-MM or YYYY
 * @returns {string} Formatted date string (e.g. "May 2025" or "2025")
 */
export function formatDate(dateString) {
    // Return as-is if it's not in expected format
    if (!dateString) return '';
    
    // If it's just a year (e.g. "2023"), return as is
    if (/^\d{4}$/.test(dateString)) {
      return dateString;
    }
    
    // If it's in YYYY-MM format
    const match = dateString.match(/^(\d{4})-(\d{2})$/);
    if (match) {
      const [, year, month] = match;
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      // JavaScript months are 0-indexed
      const monthIndex = parseInt(month, 10) - 1;
      if (monthIndex >= 0 && monthIndex < 12) {
        return `${monthNames[monthIndex]} ${year}`;
      }
    }
    
    // Return original string if format doesn't match
    return dateString;
  }