import { CircularProgress } from "@mui/material";

export default function LoadingErrorHandler({ loading, error }) {
  if (loading)
    return (
      <div className="flex justify-center m-5">
        <CircularProgress size="30px" />
      </div>
    );

  if (error)
    return (
      <p className="text-red-600 text-base text-center mt-5">{`Error: ${error.status}`}</p>
    );

  return null;
}
