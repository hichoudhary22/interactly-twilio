const express = require("express");
const twilio = require("twilio");

const accountSid = "********************";
const authToken = "********************";

const client = require("twilio")(accountSid, authToken);

const app = express();
app.use(express.urlencoded({ extended: false }));

const twilioNumber = "*******************";
const yourNumber = "*******************";

const interviewLink =
  "https://v.personaliz.ai/?id=9b697c1a&uid=fe141702f66c760d85ab&mode=test";

app.post("/handle-key", (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  if (req.body.Digits === "1") {
    // Sending SMS
    client.messages
      .create({
        body: `Here's your personalized interview link: ${interviewLink}`,
        to: yourNumber,
        from: twilioNumber,
      })
      .then((message) => console.log("SMS sent, SID:", message.sid))
      .catch((error) => console.error("Error sending SMS:", error));

    twiml.say(
      "An SMS with your personalized interview link has been sent to your phone number."
    );
  } else {
    twiml.say("Invalid input. No SMS will be sent. Goodbye.");
  }

  res.type("text/xml");
  res.send(twiml.toString());
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
