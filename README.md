# Twilio IVR and SMS Application

This Node.js application uses the Twilio API to make personalized IVR (Interactive Voice Response) calls and send SMS messages based on user input.

## Features

- Makes an IVR call to a specified number
- Plays a custom audio message during the call
- Listens for user input (button press)
- Sends a personalized interview link via SMS if the correct button is pressed

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Twilio account with API credentials
- A publicly accessible URL for your server (e.g., using a tool like localtunnel)

## Installation

1. Clone the repository or create a new directory for this project.

2. Install the required dependencies:
   ```
   npm install express twilio
   ```

3. Create two JavaScript files: `makeCall.js` and `server.js` with the provided code.

4. Replace the placeholder values in both files:
   - `accountSid`: Your Twilio account SID
   - `authToken`: Your Twilio auth token
   - `twilioNumber`: Your Twilio phone number
   - `yourNumber`: The phone number to receive the call and SMS

5. Update the `audioUrl` in `makeCall.js` with the URL of your custom audio file.

6. Update the `interviewLink` in `server.js` with your actual interview link.

## Usage

1. Start the server:
   ```
   node server.js
   ```

2. In a new terminal, create a tunnel to your local server:
   ```
   npx localtunnel --port 3000
   ```

3. Update the `action` URL in `makeCall.js` with the URL provided by localtunnel.

4. Make the call:
   ```
   node makeCall.js
   ```

5. Answer the call on your phone and follow the prompts.

6. If you press "1" during the call, you should receive an SMS with the interview link.

## Code Structure

### makeCall.js
This script initiates the Twilio call with a TwiML instruction to play an audio file and gather user input.

### server.js
This Express server handles the POST request from Twilio after user input. It sends an SMS if the correct button is pressed.

## Notes

- Ensure your Twilio account has sufficient credits for making calls and sending SMS.
- The audio file URL must be publicly accessible.
- Keep your Twilio credentials confidential.

## Video Demonstration


## Troubleshooting

- If the call doesn't connect, check your Twilio account settings and ensure the phone number is verified.
- If the SMS isn't received, check the Twilio console for any error messages.
