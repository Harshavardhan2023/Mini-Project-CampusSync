/**
 * Global configuration for the CampusSync frontend
 */

// API base URL - will use environment variable if available, otherwise use the Render URL
export const API_URL = process.env.REACT_APP_API_URL || 'https://mini-project-campussync-2-8qon.onrender.com/api';

// Remove the /v1 if present (for compatibility with different API versions)
export const API_BASE_URL = API_URL.replace('/v1', '');

// Configuration for file uploads and media
export const MEDIA_CONFIG = {
  // Maximum file size for uploads in bytes (5MB)
  MAX_FILE_SIZE: 5 * 1024 * 1024,
  
  // Allowed file types for image uploads
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
  
  // Allowed file types for document uploads
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain'
  ]
};

// Export default configuration object
export default {
  API_URL,
  API_BASE_URL,
  MEDIA_CONFIG
};
