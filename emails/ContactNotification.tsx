import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://templio.app/logo.svg"
            alt="Templio Logo"
            width="100"
            height="100"
            style={logo}
          />
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new message through the Templio contact form.
          </Text>

          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Message:</Text>
            <Text style={messageValue}>{message}</Text>
          </Section>

          <Text style={footer}>
            This is an automated notification from your Templio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #e6e6e6",
};

const logo = {
  display: "block",
  margin: "30px auto 20px",
};

const h1 = {
  color: "#000000",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "40px 0 20px",
  padding: "0 40px",
};

const text = {
  color: "#333333",
  fontSize: "16px",
  lineHeight: "26px",
  padding: "0 40px",
  margin: "16px 0",
};

const section = {
  padding: "0 40px",
  margin: "24px 0",
};

const label = {
  color: "#666666",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  margin: "16px 0 4px 0",
};

const value = {
  color: "#000000",
  fontSize: "16px",
  margin: "0 0 16px 0",
};

const messageValue = {
  color: "#000000",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "16px",
  backgroundColor: "#f6f9fc",
  borderRadius: "4px",
  margin: "0 0 16px 0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#999999",
  fontSize: "12px",
  lineHeight: "20px",
  padding: "0 40px",
  margin: "32px 0 0 0",
};
