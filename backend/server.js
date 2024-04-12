const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uyuoukoh@gmail.com",
      pass: "kiyj wvcq aezd takm",
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "uyuoukoh@gmail.com",
    subject: `Message from ${name}`,
    text: `From: ${email}\n\nMy name is ${name}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});