// custom.d.ts or svg.d.ts
declare module "*.svg" {
    import { FunctionComponent, SVGProps } from "react";
    const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    const content: string;
    export default content;
  }
  