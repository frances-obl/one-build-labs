import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazily instantiated so missing key doesn't crash the build
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, country, plan, budget, projectType, message } =
      body as Record<string, string>;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const rows = [
      ["Name", name],
      ["Email", email],
      phone ? ["Phone", phone] : null,
      country ? ["Country", country] : null,
      plan ? ["Interested In", plan] : null,
      budget ? ["Budget Range", budget] : null,
      projectType ? ["Project Type", projectType] : null,
      message ? ["Message", message] : null,
    ].filter(Boolean) as [string, string][];

    const tableRows = rows
      .map(
        ([label, value]) => `
      <tr>
        <td style="padding:8px 14px;font-weight:600;color:#6b7280;font-size:12px;white-space:nowrap;background:#f8f8fb;border-bottom:1px solid #e0e0ea;">${label}</td>
        <td style="padding:8px 14px;color:#16162a;font-size:13px;border-bottom:1px solid #e0e0ea;">${value}</td>
      </tr>`
      )
      .join("");

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(22,22,42,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#16162a;padding:28px 32px;">
            <p style="margin:0;color:rgba(255,255,255,0.5);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:6px;">One Build Labs</p>
            <h1 style="margin:0;color:white;font-size:22px;font-weight:700;letter-spacing:-0.02em;">New Project Inquiry</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:28px 32px 8px;">
            <p style="margin:0 0 20px;color:#6b7280;font-size:13px;line-height:1.6;">
              You have a new inquiry from <strong style="color:#16162a;">${name}</strong>. Details below:
            </p>
          </td>
        </tr>

        <!-- Table -->
        <tr>
          <td style="padding:0 32px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0ea;border-radius:8px;overflow:hidden;">
              ${tableRows}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 32px 32px;">
            <a href="mailto:${email}?subject=Re: Your inquiry to One Build Labs"
               style="display:inline-block;background:#16162a;color:white;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:12px 24px;border-radius:9999px;text-decoration:none;">
              REPLY TO ${name.split(" ")[0].toUpperCase()}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #e0e0ea;">
            <p style="margin:0;color:#aaa;font-size:11px;">
              Sent from the One Build Labs website contact form &mdash; one-build-labs.vercel.app
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    await getResend().emails.send({
      // Update `from` to a verified sender once your domain is added in Resend
      from: "One Build Labs <onboarding@resend.dev>",
      to: ["frances@onebuildlabs.com"],
      replyTo: email,
      subject: `New inquiry from ${name} — One Build Labs`,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[POST /api/contact]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
