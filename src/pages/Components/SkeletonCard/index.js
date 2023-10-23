import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

export const SkeletonCard = ({ count }) => {
  const skeletonCards = [];

  for (let i = 0; i < count; i++) {
    skeletonCards.push(
      <Grid className="flex flex-col gap-2" key={i}>
        <Skeleton variant="rounded" width={300} height={175} />
        <Skeleton variant="rounded" width={300} height={125} />
      </Grid>
    );
  }

  return (
    <Grid
      container
      className="flex justify-center gap-4"
      spacing={2}
      columns={{ sm: 12, md: 6, lg: 3 }}
    >
      {skeletonCards}
    </Grid>
  );
};

export default SkeletonCard;
