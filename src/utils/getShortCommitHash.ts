export const getShortCommitHash = (hash: string) => {
  if (hash.length === 40) return hash.slice(0, 7);

  return hash;
};
