import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";

interface WaitlistWelcomeProps {
  email: string;
}

export default function WaitlistWelcome({ email }: WaitlistWelcomeProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the Templio waitlist!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://templio.app/logo.svg"
            alt="Templio Logo"
            width="120"
            height="120"
            style={logo}
          />
          <Heading style={h1}>Welcome to Templio! ✨</Heading>
          <Text style={text}>
            Thank you for joining our waitlist! We&apos;re excited to have you
            on board.
          </Text>
          <Text style={text}>
            Templio is a fully customizable personal site builder with no
            templates, just your taste. We&apos;re working hard to bring you
            something special.
          </Text>
          <Text style={text}>
            You&apos;ve been successfully added to the waitlist with the email:{" "}
            <strong>{email}</strong>
          </Text>
          <Text style={text}>
            We&apos;ll notify you as soon as we launch. Stay tuned for updates!
          </Text>
          <Text style={footer}>
            Best regards,
            <br />
            The only <a href="https://www.ayush.im">Ayush Rameja</a> from
            Templio
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#000000",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const logo = {
  display: "block",
  margin: "40px auto 20px",
};

const h1 = {
  color: "#000000",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0 40px",
};

const text = {
  color: "#333333",
  fontSize: "16px",
  lineHeight: "26px",
  padding: "0 40px",
  margin: "16px 0",
};

const footer = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "24px",
  padding: "0 40px",
  margin: "32px 0 0 0",
};
