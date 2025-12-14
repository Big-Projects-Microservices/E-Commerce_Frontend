import { Container } from "@mui/material";
import { ErrorBlock } from "@molecules";

export default function Error404Page() {
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
        code="404"
        title="The requested page was not found"
        message="It seems, that you are trying to get to page, it does not exist. Check your adress and go back to home page"
        actionText="Back to home page"
        actionTo="/"
      />
    </Container>
  );
}
