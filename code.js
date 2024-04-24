function minPlanesNeeded(fuel) {
  const n = fuel.length;
  
  if (n === 1) {
    // If there's only one airport, we're already there.
    return 0;
  }

  let planesNeeded = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    // Update the furthest point that can be reached with the current plane(s)
    farthest = Math.max(farthest, i + fuel[i]);
    
    // If we reach the current end, we need to hire a new plane
    if (i === currentEnd) {
      planesNeeded++;
      currentEnd = farthest;
    }

    // If the currentEnd is less than or equal to i, it means we're stuck
    if (currentEnd <= i) {
      return -1;
    }

    // If we've reached or surpassed the last airport, we can stop
    if (currentEnd >= n - 1) {
      return planesNeeded;
    }
  }

  return planesNeeded;
}
