import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phoneCode, phoneNumber, sector, message, consent, targetEmail } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Configure the SMTP transporter
    // It uses environment variables that you will define in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `Inquiry for ${sector} - Dhyanora Group`;
    
    // Construct the email body
    const body = `Hi Team,

You have received a new business inquiry from the Dhyanora Group website:

Contact Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phoneCode} ${phoneNumber}
- Sector of Interest: ${sector}

Message:
"${message}"

Consent Given: ${consent ? "Yes" : "No"}

Best regards,
Dhyanora Web Portal`;

    // Send the email
    const info = await transporter.sendMail({
      from: `"${firstName} ${lastName} (via Website)" <${process.env.SMTP_USER}>`, // Sender address
      replyTo: email, // If the company replies, it goes to the user's email
      to: targetEmail, // The specific company email based on sector
      subject: subject,
      text: body,
    });

    console.log("Message sent: %s", info.messageId);
    
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
