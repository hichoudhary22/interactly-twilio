const accountSid = "*******************";
const authToken = "*******************";
const client = require("twilio")(accountSid, authToken);
const audioUrl =
  "https://wine-lemming-2073.twil.io/assets/Fara%20interview%20audio.mp3";

client.calls
  .create({
    twiml: `
      <Response>
        <Gather numDigits="1" action="https://twenty-teams-sink.loca.lt/handle-key" method="POST">
          <Play>${audioUrl}</Play>
        </Gather>
      </Response>
    `,
    from: "*******************",
    to: "*******************",
  })
  .then((call) => console.log(call.sid));
