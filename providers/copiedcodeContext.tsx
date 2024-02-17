

import React, { createContext } from "react";

type copiedCodeContext = boolean;
type copiedCodeDispatch = React.Dispatch<{ type: "copied" } | { type: "done" }> | null;

export const CopiedCodeContext = createContext<copiedCodeContext>(false);
export const CopiedCodeDispatchContext =
    createContext<copiedCodeDispatch>(null);
