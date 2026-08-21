import * as runtime from "react/jsx-runtime";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const MDXContent = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return <Component />;
};

export default MDXContent;
