import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type CostCalculatorFormData = {
  businessActivity: string;
  premisesRequired: string;
  numberOfVisas: string;
  numberOfOwners: string;
  jurisdiction: string;
  firstName: string;
  secondName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const {
    businessActivity,
    premisesRequired,
    numberOfVisas,
    numberOfOwners,
    jurisdiction,
    firstName,
    secondName,
    phoneNumber,
    email,
    message,
  } = await req.json() as CostCalculatorFormData;

  if (!businessActivity || !premisesRequired || !numberOfVisas || !numberOfOwners || !jurisdiction || !firstName || !phoneNumber) {
    return NextResponse.json({ success: false, error: 'Missing required fields from cost calculator form.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: 'New Cost Calculator Submission from Inspo Website',
      html: `
        <h2>New Cost Calculator Submission</h2>
        <p><strong>Business Activity:</strong> ${businessActivity}</p>
        <p><strong>Premises Required:</strong> ${premisesRequired}</p>
        <p><strong>Number of Visas:</strong> ${numberOfVisas}</p>
        <p><strong>Number of Owners:</strong> ${numberOfOwners}</p>
        <p><strong>Jurisdiction:</strong> ${jurisdiction}</p>
        <br>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Second Name:</strong> ${secondName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log('✅ Cost Calculator email sent successfully.');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    let errorMessage = 'Failed to send cost calculator email';
    if (error instanceof Error) {
      errorMessage = (error as Error).message;
      console.error('❌ Error sending cost calculator email:', (error as Error).message);
    } else {
      console.error('❌ Unknown error sending cost calculator email:', error);
    }
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
