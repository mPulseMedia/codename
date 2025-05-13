/**
 * Formatting utilities for text and data
 * Provides functions for formatting dates, numbers, and strings
 */

/**
 * Formats a date as a string
 * @param {Date|string|number} date - Date to format
 * @param {Object} options - Formatting options
 * @param {string} options.format - Format string ('short', 'medium', 'long', 'full', or custom)
 * @param {boolean} options.include_time - Whether to include time in the formatted date
 * @returns {string} Formatted date string
 */
const format_date = (date, options = {}) => {
  try {
    // Convert to Date object if not already
    const date_obj = date instanceof Date ? date : new Date(date);
    
    // Default to medium format if not specified
    const format = options.format || 'medium';
    
    // Format based on predefined formats or custom
    if (format === 'short') {
      // MM/DD/YYYY
      return `${date_obj.getMonth() + 1}/${date_obj.getDate()}/${date_obj.getFullYear()}`;
    } else if (format === 'medium') {
      // Month DD, YYYY
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
      let result = `${months[date_obj.getMonth()]} ${date_obj.getDate()}, ${date_obj.getFullYear()}`;
      
      // Add time if requested
      if (options.include_time) {
        result += ` ${format_time(date_obj)}`;
      }
      
      return result;
    } else if (format === 'long') {
      // Day of week, Month DD, YYYY
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
      let result = `${days[date_obj.getDay()]}, ${months[date_obj.getMonth()]} ${date_obj.getDate()}, ${date_obj.getFullYear()}`;
      
      // Add time if requested
      if (options.include_time) {
        result += ` ${format_time(date_obj)}`;
      }
      
      return result;
    } else if (format === 'full') {
      // Use toLocaleString with options
      return date_obj.toLocaleString(navigator.language || 'en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: options.include_time ? '2-digit' : undefined,
        minute: options.include_time ? '2-digit' : undefined,
        second: options.include_time ? '2-digit' : undefined
      });
    } else if (format === 'relative') {
      // Format as relative time
      return format_relative_time(date_obj);
    } else {
      // Custom format - simple implementation with limited tokens
      return format.replace(/%([YyMmDdHhisSa])/g, (match, token) => {
        switch (token) {
          case 'Y': return date_obj.getFullYear().toString();
          case 'y': return date_obj.getFullYear().toString().slice(-2);
          case 'M': return (date_obj.getMonth() + 1).toString().padStart(2, '0');
          case 'm': return (date_obj.getMonth() + 1).toString();
          case 'D': return date_obj.getDate().toString().padStart(2, '0');
          case 'd': return date_obj.getDate().toString();
          case 'H': return date_obj.getHours().toString().padStart(2, '0');
          case 'h': return ((date_obj.getHours() % 12) || 12).toString().padStart(2, '0');
          case 'i': return date_obj.getMinutes().toString().padStart(2, '0');
          case 's': return date_obj.getSeconds().toString().padStart(2, '0');
          case 'a': return date_obj.getHours() < 12 ? 'am' : 'pm';
          default: return match;
        }
      });
    }
  } catch (e) {
    console.error('Error formatting date:', e);
    return '';
  }
};

/**
 * Formats a time from a Date object
 * @param {Date} date - Date object
 * @returns {string} Formatted time (HH:MM AM/PM)
 */
const format_time = (date) => {
  try {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours_12 = hours % 12 || 12;
    
    return `${hours_12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  } catch (e) {
    console.error('Error formatting time:', e);
    return '';
  }
};

/**
 * Formats a date as relative time (e.g., "2 hours ago")
 * @param {Date} date - Date object
 * @returns {string} Relative time string
 */
const format_relative_time = (date) => {
  try {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    // Convert to seconds
    const seconds = Math.floor(diff / 1000);
    
    // Less than a minute
    if (seconds < 60) {
      return 'just now';
    }
    
    // Minutes
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }
    
    // Hours
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
    
    // Days
    const days = Math.floor(hours / 24);
    if (days < 7) {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
    
    // Weeks
    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    }
    
    // Months
    const months = Math.floor(days / 30);
    if (months < 12) {
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    }
    
    // Years
    const years = Math.floor(days / 365);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  } catch (e) {
    console.error('Error calculating relative time:', e);
    return '';
  }
};

/**
 * Formats a number with commas, decimals, and optional prefix/suffix
 * @param {number} num - Number to format
 * @param {Object} options - Formatting options
 * @param {number} options.decimals - Number of decimal places
 * @param {string} options.decimal_separator - Decimal separator character
 * @param {string} options.thousands_separator - Thousands separator character
 * @param {string} options.prefix - String to prepend (e.g., '$')
 * @param {string} options.suffix - String to append (e.g., '%')
 * @returns {string} Formatted number string
 */
const format_number = (num, options = {}) => {
  try {
    if (typeof num !== 'number') {
      num = parseFloat(num);
    }
    
    if (isNaN(num)) {
      return '';
    }
    
    // Default options
    const decimals = options.decimals !== undefined ? options.decimals : 2;
    const decimal_separator = options.decimal_separator || '.';
    const thousands_separator = options.thousands_separator || ',';
    const prefix = options.prefix || '';
    const suffix = options.suffix || '';
    
    // Format the number
    const fixed = num.toFixed(decimals);
    const [whole, fraction] = fixed.split('.');
    
    // Add thousands separator
    const formatted_whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, thousands_separator);
    
    // Combine parts
    let result = prefix + formatted_whole;
    
    // Add decimal part if needed
    if (decimals > 0) {
      result += decimal_separator + fraction;
    }
    
    // Add suffix
    result += suffix;
    
    return result;
  } catch (e) {
    console.error('Error formatting number:', e);
    return '';
  }
};

/**
 * Formats a string to title case
 * @param {string} str - String to format
 * @returns {string} Title case string
 */
const format_title_case = (str) => {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Truncates a string to a maximum length with ellipsis
 * @param {string} str - String to truncate
 * @param {number} max_length - Maximum length
 * @param {string} suffix - Suffix to add when truncated
 * @returns {string} Truncated string
 */
const format_truncate = (str, max_length, suffix = '...') => {
  if (!str) return '';
  if (str.length <= max_length) return str;
  
  return str.slice(0, max_length - suffix.length) + suffix;
};

/**
 * Formats a byte value to a human-readable size
 * @param {number} bytes - Byte value
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted size string (e.g., "1.5 MB")
 */
const format_bytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
};

// Export formatting utilities
export {
  format_date,
  format_time,
  format_relative_time,
  format_number,
  format_title_case,
  format_truncate,
  format_bytes
}; 