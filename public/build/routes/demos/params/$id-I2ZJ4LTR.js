import"../../build/_shared/chunk-XSZDKJIQ.js";import{d as a,j as s}from"../../build/_shared/chunk-X2YYQTWM.js";import{f as t,g as r}from"../../build/_shared/chunk-ICDE4O2B.js";r();r();function i(){let e=s();return t.createElement("h1",null,"The param is ",t.createElement("i",{style:{color:"red"}},e.param))}function n(){let e=a(),o;switch(e.status){case 401:o=t.createElement("p",null,"Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (",e.data.webmasterEmail,") for access.");case 404:o=t.createElement("p",null,"Looks like you tried to visit a page that does not exist.");default:o=t.createElement("p",null,"There was a problem with your request!",t.createElement("br",null),e.status," ",e.statusText)}return t.createElement(t.Fragment,null,t.createElement("h2",null,"Oops!"),t.createElement("p",null,o),t.createElement("p",null,"(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"))}function u({error:e}){return console.error(e),t.createElement(t.Fragment,null,t.createElement("h2",null,"Error!"),t.createElement("p",null,e.message),t.createElement("p",null,"(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"))}var h=({data:e})=>({title:e?`Param: ${e.param}`:"Oops..."});export{n as CatchBoundary,u as ErrorBoundary,i as default,h as meta};