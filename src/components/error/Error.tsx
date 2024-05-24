import { ReactNode } from "react";

type Props = {
  errorElement: ReactNode;
};

const Error = ({ errorElement }: Props) => {
  return errorElement;
};

export default Error;
