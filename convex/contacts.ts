import { v } from "convex/values";
import { mutation, action } from "./_generated/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactNotification from "../emails/ContactNotification";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      message: args.message,
      createdAt: Date.now(),
    });
    return contactId;
  },
});

export const sendNotificationEmail = action({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    const developerEmail = process.env.DEVELOPER_EMAIL;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      throw new Error("Email service not configured");
    }

    if (!developerEmail) {
      console.error("DEVELOPER_EMAIL not configured");
      throw new Error("Developer email not configured");
    }

    const resend = new Resend(resendApiKey);

    const emailHtml = await render(
      ContactNotification({
        name: args.name,
        email: args.email,
        message: args.message,
      })
    );

    try {
      const { data, error } = await resend.emails.send({
        from: "Templio <contact@templio.app>",
        to: developerEmail,
        replyTo: args.email,
        subject: `New Contact Form Submission from ${args.name}`,
        html: emailHtml,
      });

      if (error) {
        console.error("Failed to send notification email:", error);
        if (
          error.name === "validation_error" &&
          error.message?.includes("testing emails")
        ) {
          throw new Error(
            "Email service is in test mode. Contact developer to enable production emails."
          );
        }
        throw new Error("Failed to send notification email");
      }

      return { success: true, id: data?.id };
    } catch (error) {
      console.error("Failed to send notification email:", error);
      throw new Error("Failed to send notification email");
    }
  },
});
