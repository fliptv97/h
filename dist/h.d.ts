type Params =
  | {
      type: string;
      classList?: string[];
      attributes?: {
        [key: string]: string;
      };
      listeners?: {
        [key: string]: (e: Event) => void;
      };
      children?: Params[];
    }
  | string;
export default h;
declare function h(params: Params): HTMLElement | Text;
