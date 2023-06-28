import { useDispatch } from "react-redux";


export const useTestDispatch = () => {
  const dispatch = useDispatch();

  const setModifier = (modifier: any) => {
    dispatch(modifier());
  };
  return {setModifier};
};
