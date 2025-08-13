export const emailVerificationTemplate = (OTP) => {
  const currentYear = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Email Verification - Alibaba Style</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f7fa;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
        }
        .header {
          text-align: center;
          background-color: #2563eb;
          color: #ffffff;
          padding: 18px;
          border-radius: 8px 8px 0 0;
        }
        .header h2 {
          margin: 0;
          font-size: 22px;
        }
        .content {
          color: #333333;
          font-size: 15px;
          line-height: 1.6;
          padding: 20px 0;
        }
        .otp-box {
          font-size: 28px;
          letter-spacing: 5px;
          background-color: #eaf2ff;
          color: #1e3a8a;
          padding: 15px 20px;
          text-align: center;
          border-radius: 6px;
          margin: 25px auto;
          font-weight: bold;
          width: fit-content;
        }
        .highlight {
          color: #2563eb;
          font-weight: 600;
        }
        .footer {
          text-align: center;
          margin-top: 25px;
          padding-top: 12px;
          border-top: 1px solid #eeeeee;
          font-size: 12px;
          color: #777777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Alibaba Style</h2>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>Thanks for joining <span class="highlight">Alibaba Style</span>! To verify your account, please use the following One-Time Password (OTP):</p>
          
          <div class="otp-box">
            ${OTP}
          </div>

          <p>Do not share it with anyone for your security.</p>

          <p>If you didn’t request this, simply ignore this message.</p>

          <p>Cheers,<br>
          <strong>The Alibaba Style Team</strong></p>
        </div>
        <div class="footer">
          &copy; ${currentYear} Alibaba Style. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
};
