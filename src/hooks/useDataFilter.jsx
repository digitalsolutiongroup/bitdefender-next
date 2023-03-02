import useData from "./useData";

export const idFilter = (payload) => {
  const [state, dispatch] = useData();

  const filtered = state?.product?.filter((obj) => {
    return obj?.id == payload;
  });

  return filtered;
};

export const linkFilter = (payload) => {
  const [state, dispatch] = useData();

  const filtered = state?.product?.filter((obj) => {
    return obj?.link_id == payload;
  });

  return filtered;
};
