const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config(); // Make sure to configure dotenv before using environment variables

const PORT = process.env.PORT || 3001;

const allowedOrigins = [
  "https://felix-portfolio-wg48.onrender.com",

  "https://portfolio-phi-livid-78.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Yes, it is good");
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uyuoukoh@gmail.com",
      pass: process.env.APP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "uyuoukoh@gmail.com",
    subject: `Message from ${name}`,
    text: `From: ${email}\n\nMy name is ${name}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("Error sending email");
    } else {
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
