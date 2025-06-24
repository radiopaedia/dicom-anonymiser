declare const sjcl: {
  bitArray: {};
  cipher: {};
  hash: {
    sha512: {
      (): (hash: any) => void;
      hash: (data: string) => number[];
    };
  };
  keyexchange: {};
  mode: {};
  misc: {};
  codec: {
    utf8String: {
      fromBits: (arr: any) => string;
      toBits: (str: any) => never[];
    };
  };
  exception: {
    corrupt: (message: any) => void;
    invalid: (message: any) => void;
    bug: (message: any) => void;
    notReady: (message: any) => void;
  };
};

export default sjcl;
