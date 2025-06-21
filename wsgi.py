"""
WSGI entry point for production deployment on Render.com
"""

from backend.app import create_app

# Create the Flask application
app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))
