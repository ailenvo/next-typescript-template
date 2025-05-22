import dynamic from "next/dynamic";

const InputSelect = dynamic(() => import("./InputSelect"), {
  ssr: false,
});

export default InputSelect;
