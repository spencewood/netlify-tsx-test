import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const getBody = () => renderToStaticMarkup(<div>hello jsx</div>);
