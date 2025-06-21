#!/bin/bash
# Script to start the application with Gunicorn on Render

# Make sure the script is executable
# chmod +x start.sh

# Set default port if not provided
PORT=${PORT:-5000}

# Start Gunicorn with the create_app() function
exec gunicorn --workers=2 --threads=2 --timeout=60 --bind=0.0.0.0:$PORT "run:app"
