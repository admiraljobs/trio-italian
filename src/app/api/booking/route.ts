import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      telephone,
      numberOfGuests,
      preferredDate,
      preferredTime,
      specialOccasion,
      additionalNotes,
    } = body;

    // Validate required fields
    if (!fullName || !email || !telephone || !numberOfGuests || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.log('Booking request received (email not configured):', body);
      return NextResponse.json({ 
        success: true, 
        message: 'Booking request received. Email notifications are not configured.' 
      });
    }

    // Format the date for display
    const formattedDate = new Date(preferredDate).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Send email to restaurant
    const { error: restaurantEmailError } = await resend.emails.send({
      from: 'Trio Italian Bookings <bookings@trioitalian.co.uk>',
      to: ['info@trioitalian.co.uk'],
      subject: `New Booking Request - ${fullName} - ${formattedDate}`,
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
            .highlight { background-color: #B8860B; color: white; padding: 15px; text-align: center; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🍝 New Booking Request</h1>
            </div>
            <div class="content">
              <div class="highlight">
                <strong>${numberOfGuests} ${numberOfGuests === 1 ? 'Guest' : 'Guests'}</strong> • 
                <strong>${formattedDate}</strong> • 
                <strong>${preferredTime}</strong>
              </div>
              
              <div class="detail">
                <span class="label">Name:</span><br/>
                ${fullName}
              </div>
              
              <div class="detail">
                <span class="label">Email:</span><br/>
                <a href="mailto:${email}">${email}</a>
              </div>
              
              <div class="detail">
                <span class="label">Phone:</span><br/>
                <a href="tel:${telephone}">${telephone}</a>
              </div>
              
              <div class="detail">
                <span class="label">Number of Guests:</span><br/>
                ${numberOfGuests}
              </div>
              
              <div class="detail">
                <span class="label">Date:</span><br/>
                ${formattedDate}
              </div>
              
              <div class="detail">
                <span class="label">Time:</span><br/>
                ${preferredTime}
              </div>
              
              ${specialOccasion && specialOccasion !== 'None' ? `
              <div class="detail">
                <span class="label">Special Occasion:</span><br/>
                🎉 ${specialOccasion}
              </div>
              ` : ''}
              
              ${additionalNotes ? `
              <div class="detail">
                <span class="label">Additional Notes:</span><br/>
                ${additionalNotes}
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Please confirm this booking by contacting the guest directly.</p>
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
        { error: 'Failed to process booking request' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const { error: customerEmailError } = await resend.emails.send({
      from: 'Trio Italian <bookings@trioitalian.co.uk>',
      to: [email],
      subject: `Booking Request Received - Trio Italian`,
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
            .booking-details { background-color: white; padding: 20px; border-left: 4px solid #B8860B; margin: 20px 0; }
            .detail { margin-bottom: 10px; }
            .label { font-weight: bold; color: #3D4F27; }
            .note { background-color: #fff3cd; padding: 15px; border-radius: 4px; margin: 20px 0; }
            .footer { text-align: center; padding: 30px; background-color: #2C2C2C; color: #FAF8F0; }
            .footer a { color: #B8860B; text-decoration: none; }
            .social { margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>TRIO</h1>
              <p>Italian Restaurant • Saffron Walden</p>
            </div>
            <div class="content">
              <p class="greeting">Dear ${fullName},</p>
              
              <p>Thank you for your booking request at Trio Italian. We have received your reservation details and will confirm availability shortly.</p>
              
              <div class="booking-details">
                <h3 style="margin-top: 0; color: #3D4F27;">Your Booking Details</h3>
                <div class="detail">
                  <span class="label">Date:</span> ${formattedDate}
                </div>
                <div class="detail">
                  <span class="label">Time:</span> ${preferredTime}
                </div>
                <div class="detail">
                  <span class="label">Party Size:</span> ${numberOfGuests} ${numberOfGuests === 1 ? 'Guest' : 'Guests'}
                </div>
                ${specialOccasion && specialOccasion !== 'None' ? `
                <div class="detail">
                  <span class="label">Special Occasion:</span> ${specialOccasion}
                </div>
                ` : ''}
              </div>
              
              <div class="note">
                <strong>Please note:</strong> This is a booking request, not a confirmed reservation. A member of our team will contact you within 24 hours to confirm your booking.
              </div>
              
              <p>If you need to make any changes or have questions, please don't hesitate to contact us:</p>
              <p>
                📞 <a href="tel:01799796530" style="color: #3D4F27;">01799 796530</a><br/>
                ✉️ <a href="mailto:info@trioitalian.co.uk" style="color: #3D4F27;">info@trioitalian.co.uk</a>
              </p>
              
              <p>We look forward to welcoming you to Trio!</p>
              
              <p style="margin-top: 30px;">
                Warm regards,<br/>
                <strong>The Trio Team</strong><br/>
                <em>Arin, Anna & Kaan</em>
              </p>
            </div>
            <div class="footer">
              <p><strong>Trio Italian</strong></p>
              <p>1-3 Cross St, Saffron Walden CB10 1EX</p>
              <p><a href="tel:01799796530">01799 796530</a> | <a href="mailto:info@trioitalian.co.uk">info@trioitalian.co.uk</a></p>
              <div class="social">
                <a href="https://www.instagram.com/trio_italian/">Follow us on Instagram</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (customerEmailError) {
      console.error('Error sending customer email:', customerEmailError);
      // Don't fail the request if customer email fails, booking was still received
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
