import { Container } from "@mui/material";
import { ErrorBlock } from "@molecules";

export default function Error500Page() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ErrorBlock
        code="500"
        title="Server Error"
        message="The server encountered an internal error or the protocol version is not supported. We are currently working on fixing this issue. Please try again later."
        actionText="Try again now"
        actionTo={window.location.pathname}
      />
    </Container>
  );
}
