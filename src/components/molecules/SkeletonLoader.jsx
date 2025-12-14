import { Skeleton, Stack } from "@mui/material";
import { useProducts } from "@recoil/hooks/useProducts";

export default function SkeletonLoader() {
  const { loading } = useProducts();

  if (!loading) return null;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Stack spacing={2}>
        <Skeleton variant="rectangular" height={40} />
        {Array.from({ length: 3 }).map((_, index) => (
          <>
            <Skeleton
              key={index}
              variant="rectangular"
              height={39}
              animation="pulse"
              width="80%"
            />
            <Skeleton height={36} width="50%" animation="wave" />
          </>
        ))}
      </Stack>
    </div>
  );
}
