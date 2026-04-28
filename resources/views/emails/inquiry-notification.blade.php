<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #1e293b; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 24px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .header { background: #0f172a; padding: 30px; text-align: center; }
        .header h1 { color: #3b82f6; font-size: 14px; text-transform: uppercase; letter-spacing: 3px; margin: 0; }
        .content { padding: 40px; }
        .field-label { font-size: 10px; font-weight: 900; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .field-value { font-size: 16px; font-weight: 600; color: #1e293b; margin-bottom: 24px; }
        .message-box { background: #f1f5f9; padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; font-style: italic; }
        .footer { padding: 20px; text-align: center; font-size: 10px; color: #94a3b8; text-transform: uppercase; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Technical Inquiry</h1>
        </div>
        <div class="content">
            <div class="field-label">Sender Name</div>
            <div class="field-value">{{ $inquiry['full_name'] }}</div>

            <div class="field-label">Email Address</div>
            <div class="field-value">{{ $inquiry['email'] }}</div>

            <div class="field-label">Subject</div>
            <div class="field-value">{{ $inquiry['subject'] }}</div>

            <div class="field-label">Transmission</div>
            <div class="message-box">
                "{{ $inquiry['message'] }}"
            </div>
        </div>
        <div class="footer">
            Macro Wiring Technologies Co. Inc. • Admin Notification System
        </div>
    </div>
</body>
</html>