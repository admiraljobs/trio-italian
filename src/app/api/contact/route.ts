import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.log('Contact form received (email not configured):', body);
      return NextResponse.json({ 
        success: true, 
        message: 'Message received. Email notifications are not configured.' 
      });
    }

    // Send email to restaurant
    const { error: restaurantEmailError } = await resend.emails.send({
      from: 'Trio Italian Contact <contact@trioitalian.co.uk>',
      to: ['info@trioitalian.co.uk'],
      replyTo: email,
      subject: `Contact Form: ${subject} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2C2C2C; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #3D4F27; color: #FAF8F0; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background-color: #FAF8F0; padding: 30px; }
            .detail { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0; }
            .detail:last-child { border-bottom: none; }
            .label { font-weight: bold; color: #3D4F27; }
            .message-box { background-color: white; padding: 20px; border-left: 4px solid #B8860B; margin-top: 20px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Message</h1>
            </div>
            <div class="content">
              <div class="detail">
                <span class="label">From:</span><br/>
                ${name}
              </div>
              
              <div class="detail">
                <span class="label">Email:</span><br/>
                <a href="mailto:${email}">${email}</a>
              </div>
              
              <div class="detail">
                <span class="label">Subject:</span><br/>
                ${subject}
              </div>
              
              <div class="message-box">
                <span class="label">Message:</span><br/><br/>
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>
            <div class="footer">
              <p>Reply directly to this email to respond to ${name}.</p>
              <p>Trio Italian | 1-3 Cross St, Saffron Walden CB10 1EX</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (restaurantEmailError) {
      console.error('Error sending restaurant email:', restaurantEmailError);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const { error: customerEmailError } = await resend.emails.send({
      from: 'Trio Italian <contact@trioitalian.co.uk>',
      to: [email],
      subject: `We've received your message - Trio Italian`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2C2C2C; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #3D4F27; color: #FAF8F0; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; letter-spacing: 2px; }
            .header p { margin: 10px 0 0; opacity: 0.8; font-size: 14px; }
            .content { background-color: #FAF8F0; padding: 30px; }
            .greeting { font-size: 18px; margin-bottom: 20px; }
            .message-recap { background-color: white; padding: 20px; border-left: 4px solid #B8860B; margin: 20px 0; }
            .footer { text-align: center; padding: 30px; background-color: #2C2C2C; color: #FAF8F0; }
            .footer a { color: #B8860B; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>TRIO</h1>
              <p>Italian Restaurant • Saffron Walden</p>
            </div>
            <div class="content">
              <p class="greeting">Dear ${name},</p>
              
              <p>Thank you for getting in touch with Trio Italian. We have received your message and will respond as soon as possible, usually within 24-48 hours.</p>
              
              <div class="message-recap">
                <h3 style="margin-top: 0; color: #3D4F27;">Your Message</h3>
                <p><strong>Subject:</strong> ${subject}</p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
              </div>
              
              <p>For urgent enquiries, you can reach us directly:</p>
              <p>
                📞 <a href="tel:01799796530" style="color: #3D4F27;">01799 796530</a><br/>
                ✉️ <a href="mailto:info@trioitalian.co.uk" style="color: #3D4F27;">info@trioitalian.co.uk</a>
              </p>
              
              <p style="margin-top: 30px;">
                Warm regards,<br/>
                <strong>The Trio Team</strong>
              </p>
            </div>
            <div class="footer">
              <p><strong>Trio Italian</strong></p>
              <p>1-3 Cross St, Saffron Walden CB10 1EX</p>
              <p><a href="tel:01799796530">01799 796530</a> | <a href="mailto:info@trioitalian.co.uk">info@trioitalian.co.uk</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (customerEmailError) {
      console.error('Error sending customer confirmation:', customerEmailError);
      // Don't fail the request if customer email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
