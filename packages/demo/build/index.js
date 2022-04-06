var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// ../../node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "../../node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// ../../node_modules/remix/index.js
var require_remix = __commonJS({
  "../../node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-RCVEWFAY.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-APYDFYJA.css";

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React.createElement(RemixLogo, null)), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/docs"
  }, "Remix Docs")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))))), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA9 You!"))));
}
function RemixLogo() {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/bar-chart-demo.tsx
var bar_chart_demo_exports = {};
__export(bar_chart_demo_exports, {
  default: () => BarChartDemo,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());
var import_bar_chart = require("@hello-visx/bar-chart");
var meta = () => {
  return { title: "BarChart" };
};
var loader = async () => {
  return {
    message: "Hello, world!"
  };
};
function BarChartDemo() {
  const data = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_bar_chart.BarChart, null);
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta2
});
init_react();
var import_react = require("react");
var import_remix4 = __toESM(require_remix());
function meta2() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix4.json)("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return (0, import_remix4.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix4.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix4.useActionData)();
  let answerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ React.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", null, "Answer:"), /* @__PURE__ */ React.createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ React.createElement("code", null, "useActionData"))))));
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
init_react();
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta3
});
init_react();
var import_remix5 = __toESM(require_remix());
function meta3() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
init_react();
function Boundaries2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/params/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader2,
  meta: () => meta4
});
init_react();
var import_remix6 = __toESM(require_remix());
var loader2 = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix6.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = (0, import_remix6.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta4 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta5
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/styles/demos/about.css
var about_default = "/build/_assets/about-GGM5BPB3.css";

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/about.tsx
var meta5 = () => {
  return {
    title: "About Remix"
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)));
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
init_react();
var import_remix8 = __toESM(require_remix());
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
init_react();
var import_remix9 = __toESM(require_remix());
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " index."))));
}

// route:/Users/nicolas.pirotte/git/github.com/npirotte/hello-visx/packages/demo/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader3,
  meta: () => meta6
});
init_react();
var import_remix10 = __toESM(require_remix());
var loader3 = () => {
  let data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };
  return (0, import_remix10.json)(data);
};
var meta6 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index2() {
  let data = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ React.createElement("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ React.createElement("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ React.createElement("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ React.createElement("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Demos In This App"), /* @__PURE__ */ React.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React.createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React.createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resource.url
  }, resource.name))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e76d9be8", "entry": { "module": "/build/entry.client-SOD3UBVW.js", "imports": ["/build/_shared/chunk-HACFJJ4Y.js", "/build/_shared/chunk-AYLS35XO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6NEL3FDV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/bar-chart-demo": { "id": "routes/bar-chart-demo", "parentId": "root", "path": "bar-chart-demo", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/bar-chart-demo-PHACV2QD.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about": { "id": "routes/demos/about", "parentId": "root", "path": "demos/about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/about-H6XUFZCE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about/index": { "id": "routes/demos/about/index", "parentId": "routes/demos/about", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/demos/about/index-XAEEYBHN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/about/whoa": { "id": "routes/demos/about/whoa", "parentId": "routes/demos/about", "path": "whoa", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/about/whoa-UE2ECEON.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/actions": { "id": "routes/demos/actions", "parentId": "root", "path": "demos/actions", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/actions-BGCCFX6B.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/correct": { "id": "routes/demos/correct", "parentId": "root", "path": "demos/correct", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/correct-SAMJVQRB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/params": { "id": "routes/demos/params", "parentId": "root", "path": "demos/params", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/params-PTMPDG5U.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/demos/params/$id": { "id": "routes/demos/params/$id", "parentId": "routes/demos/params", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/demos/params/$id-SUPOV2PM.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/demos/params/index": { "id": "routes/demos/params/index", "parentId": "routes/demos/params", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/demos/params/index-SDPF5CUE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-MOJX55FG.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E76D9BE8.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/bar-chart-demo": {
    id: "routes/bar-chart-demo",
    parentId: "root",
    path: "bar-chart-demo",
    index: void 0,
    caseSensitive: void 0,
    module: bar_chart_demo_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9uaWNvbGFzLnBpcm90dGUvZ2l0L2dpdGh1Yi5jb20vbnBpcm90dGUvaGVsbG8tdmlzeC9wYWNrYWdlcy9kZW1vL2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2Jhci1jaGFydC1kZW1vLnRzeCIsICJyb3V0ZTovVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2RlbW9zL2FjdGlvbnMudHN4IiwgInJvdXRlOi9Vc2Vycy9uaWNvbGFzLnBpcm90dGUvZ2l0L2dpdGh1Yi5jb20vbnBpcm90dGUvaGVsbG8tdmlzeC9wYWNrYWdlcy9kZW1vL2FwcC9yb3V0ZXMvZGVtb3MvY29ycmVjdC50c3giLCAicm91dGU6L1VzZXJzL25pY29sYXMucGlyb3R0ZS9naXQvZ2l0aHViLmNvbS9ucGlyb3R0ZS9oZWxsby12aXN4L3BhY2thZ2VzL2RlbW8vYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMudHN4IiwgInJvdXRlOi9Vc2Vycy9uaWNvbGFzLnBpcm90dGUvZ2l0L2dpdGh1Yi5jb20vbnBpcm90dGUvaGVsbG8tdmlzeC9wYWNrYWdlcy9kZW1vL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy8kaWQudHN4IiwgInJvdXRlOi9Vc2Vycy9uaWNvbGFzLnBpcm90dGUvZ2l0L2dpdGh1Yi5jb20vbnBpcm90dGUvaGVsbG8tdmlzeC9wYWNrYWdlcy9kZW1vL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9uaWNvbGFzLnBpcm90dGUvZ2l0L2dpdGh1Yi5jb20vbnBpcm90dGUvaGVsbG8tdmlzeC9wYWNrYWdlcy9kZW1vL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9uaWNvbGFzLnBpcm90dGUvZ2l0L2dpdGh1Yi5jb20vbnBpcm90dGUvaGVsbG8tdmlzeC9wYWNrYWdlcy9kZW1vL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYS50c3giLCAicm91dGU6L1VzZXJzL25pY29sYXMucGlyb3R0ZS9naXQvZ2l0aHViLmNvbS9ucGlyb3R0ZS9oZWxsby12aXN4L3BhY2thZ2VzL2RlbW8vYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL25pY29sYXMucGlyb3R0ZS9naXQvZ2l0aHViLmNvbS9ucGlyb3R0ZS9oZWxsby12aXN4L3BhY2thZ2VzL2RlbW8vYXBwL3JvdXRlcy9iYXItY2hhcnQtZGVtby50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL25pY29sYXMucGlyb3R0ZS9naXQvZ2l0aHViLmNvbS9ucGlyb3R0ZS9oZWxsby12aXN4L3BhY2thZ2VzL2RlbW8vYXBwL3JvdXRlcy9kZW1vcy9hY3Rpb25zLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2RlbW9zL2NvcnJlY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9uaWNvbGFzLnBpcm90dGUvZ2l0L2dpdGh1Yi5jb20vbnBpcm90dGUvaGVsbG8tdmlzeC9wYWNrYWdlcy9kZW1vL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL25pY29sYXMucGlyb3R0ZS9naXQvZ2l0aHViLmNvbS9ucGlyb3R0ZS9oZWxsby12aXN4L3BhY2thZ2VzL2RlbW8vYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2RlbW9zL2Fib3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L3dob2EudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvbmljb2xhcy5waXJvdHRlL2dpdC9naXRodWIuY29tL25waXJvdHRlL2hlbGxvLXZpc3gvcGFja2FnZXMvZGVtby9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmFyLWNoYXJ0LWRlbW9cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jhci1jaGFydC1kZW1vXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJhci1jaGFydC1kZW1vXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9hY3Rpb25zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hY3Rpb25zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRlbW9zL2FjdGlvbnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL2NvcnJlY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL2NvcnJlY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvY29ycmVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvcGFyYW1zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvcGFyYW1zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtc1wiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL3BhcmFtcy8kaWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtcy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9kZW1vcy9hYm91dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGVtb3MvYWJvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2RlbW9zL2Fib3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0XCIsXG4gICAgICBwYXRoOiBcIndob2FcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rLFxuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCBkYXJrU3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2RhcmsuY3NzJztcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2FwcCNsaW5rc1xuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6IGRhcmtTdHlsZXNVcmwsXG4gICAgICBtZWRpYTogJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknLFxuICAgIH0sXG4gIF07XG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZGVmYXVsdC1leHBvcnRcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNyb3V0ZS1maWxlbmFtZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxuICAgICAgICAgICAgdXNlcnMgdG8gc2VlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgbGV0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgbGV0IG1lc3NhZ2U7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Pb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGNhdWdodC5kYXRhIHx8IGNhdWdodC5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfToge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICA8L2gxPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERvY3VtZW50KHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXgtYXBwXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9faGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbWl4LWFwcF9faGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiB0aXRsZT1cIlJlbWl4XCIgY2xhc3NOYW1lPVwicmVtaXgtYXBwX19oZWFkZXItaG9tZS1saW5rXCI+XG4gICAgICAgICAgICA8UmVtaXhMb2dvIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9faGVhZGVyLW5hdlwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCI+UmVtaXggRG9jczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL3JlbWl4XCI+R2l0SHViPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXgtYXBwX19tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbWl4LWFwcF9fbWFpbi1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9fZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbWl4LWFwcF9fZm9vdGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8cD4mY29weTsgWW91ITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmVtaXhMb2dvKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjU5IDE2NVwiXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwicmVtaXgtcnVuLWxvZ28tdGl0bGVcIlxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICB3aWR0aD1cIjEwNlwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICA+XG4gICAgICA8dGl0bGUgaWQ9XCJyZW1peC1ydW4tbG9nby10aXRsZVwiPlJlbWl4IExvZ288L3RpdGxlPlxuICAgICAgPHBhdGggZD1cIk0wIDE2MVYxMzZINDUuNTQxNkM1My4xNDg2IDEzNiA1NC44MDAzIDE0MS42MzggNTQuODAwMyAxNDVWMTYxSDBaIE0xMzMuODUgMTI0LjE2QzEzNS4zIDE0Mi43NjIgMTM1LjMgMTUxLjQ4MiAxMzUuMyAxNjFIOTIuMjI4M0M5Mi4yMjgzIDE1OC45MjcgOTIuMjY1MyAxNTcuMDMgOTIuMzAyOCAxNTUuMTA3QzkyLjQxOTUgMTQ5LjEyOCA5Mi41NDExIDE0Mi44OTQgOTEuNTcxNyAxMzAuMzA0QzkwLjI5MDUgMTExLjg3MiA4Mi4zNDczIDEwNy43NzYgNjcuNzQxOSAxMDcuNzc2SDU0LjgwMjFIMFY3NC4yNEg2OS43OTE4Qzg4LjI0MDcgNzQuMjQgOTcuNDY1MSA2OC42MzIgOTcuNDY1MSA1My43ODRDOTcuNDY1MSA0MC43MjggODguMjQwNyAzMi44MTYgNjkuNzkxOCAzMi44MTZIMFYwSDc3LjQ3ODhDMTE5LjI0NSAwIDE0MCAxOS43MTIgMTQwIDUxLjJDMTQwIDc0Ljc1MiAxMjUuMzk1IDkwLjExMiAxMDUuNjY1IDkyLjY3MkMxMjIuMzIgOTYgMTMyLjA1NyAxMDUuNDcyIDEzMy44NSAxMjQuMTZaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjI5LjQzIDEyMC41NzZDMjI1LjU5IDEyOS41MzYgMjE4LjQyMiAxMzMuMzc2IDIwNy4xNTggMTMzLjM3NkMxOTQuNjE0IDEzMy4zNzYgMTg0LjM3NCAxMjYuNzIgMTgzLjM1IDExMi42NEgyNjMuNDc4VjEwMS4xMkMyNjMuNDc4IDcwLjE0MzcgMjQzLjI1NCA0NC4wMzE3IDIwNS4xMSA0NC4wMzE3QzE2OS41MjYgNDQuMDMxNyAxNDIuOTAyIDY5Ljg4NzcgMTQyLjkwMiAxMDUuOTg0QzE0Mi45MDIgMTQyLjMzNiAxNjkuMDE0IDE2NC4zNTIgMjA1LjYyMiAxNjQuMzUyQzIzNS44MyAxNjQuMzUyIDI1Ni44MjIgMTQ5Ljc2IDI2Mi43MSAxMjMuNjQ4TDIyOS40MyAxMjAuNTc2Wk0xODMuODYyIDkyLjY3MTdDMTg1LjM5OCA4MS45MTk3IDE5MS4yODYgNzMuNzI3NyAyMDQuNTk4IDczLjcyNzdDMjE2Ljg4NiA3My43Mjc3IDIyMy41NDIgODIuNDMxNyAyMjQuMDU0IDkyLjY3MTdIMTgzLjg2MlpcIiAvPlxuICAgICAgPHBhdGggZD1cIk0zODUuMjU2IDY2LjU1OTdDMzgwLjM5MiA1My4yNDc3IDM2OS44OTYgNDQuMDMxNyAzNDkuNjcyIDQ0LjAzMTdDMzMyLjUyIDQ0LjAzMTcgMzIwLjIzMiA1MS43MTE3IDMxNC4wODggNjQuMjU1N1Y0Ny4xMDM3SDI3Mi42MTZWMTYxLjI4SDMxNC4wODhWMTA1LjIxNkMzMTQuMDg4IDg4LjA2MzggMzE4Ljk1MiA3Ni43OTk3IDMzMi41MiA3Ni43OTk3QzM0NS4wNjQgNzYuNzk5NyAzNDguMTM2IDg0Ljk5MTcgMzQ4LjEzNiAxMDAuNjA4VjE2MS4yOEgzODkuNjA4VjEwNS4yMTZDMzg5LjYwOCA4OC4wNjM4IDM5NC4yMTYgNzYuNzk5NyA0MDguMDQgNzYuNzk5N0M0MjAuNTg0IDc2Ljc5OTcgNDIzLjQgODQuOTkxNyA0MjMuNCAxMDAuNjA4VjE2MS4yOEg0NjQuODcyVjg5LjU5OTdDNDY0Ljg3MiA2NS43OTE3IDQ1NS42NTYgNDQuMDMxNyA0MjQuMTY4IDQ0LjAzMTdDNDA0Ljk2OCA0NC4wMzE3IDM5MS40IDUzLjc1OTcgMzg1LjI1NiA2Ni41NTk3WlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTQ3OC40MzYgNDcuMTA0VjE2MS4yOEg1MTkuOTA4VjQ3LjEwNEg0NzguNDM2Wk00NzguMTggMzYuMzUySDUyMC4xNjRWMEg0NzguMThWMzYuMzUyWlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTY1NC41NCA0Ny4xMDM1SDYxMS43ODhMNTkyLjMzMiA3NC4yMzk1TDU3My4zODggNDcuMTAzNUg1MjcuNTY0TDU2OC43OCAxMDMuMTY4TDUyMy45OCAxNjEuMjhINTY2LjczMkw1ODkuNTE2IDEzMC4zMDRMNjEyLjMgMTYxLjI4SDY1OC4xMjRMNjEzLjA2OCAxMDEuMzc2TDY1NC41NCA0Ny4xMDM1WlwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwgdXNlTG9hZGVyRGF0YSwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IEJhckNoYXJ0IH0gZnJvbSAnQGhlbGxvLXZpc3gvYmFyLWNoYXJ0JztcblxuLy8gUHJvdmlkZSBtZXRhIHRhZ3MgZm9yIHRoaXMgcGFnZS5cbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnQmFyQ2hhcnQnIH07XG59O1xuXG4vLyBVc2UgdGhpcyBmdW5jdGlvbiB0byBwcm92aWRlIGRhdGEgZm9yIHRoZSByb3V0ZS5cbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2xvYWRlclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogJ0hlbGxvLCB3b3JsZCEnLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFyQ2hhcnREZW1vKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiA8QmFyQ2hhcnQgLz47XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgRm9ybSwganNvbiwgdXNlQWN0aW9uRGF0YSwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogJ0FjdGlvbnMgRGVtbycgfTtcbn1cblxuLy8gV2hlbiB5b3VyIGZvcm0gc2VuZHMgYSBQT1NULCB0aGUgYWN0aW9uIGlzIGNhbGxlZCBvbiB0aGUgc2VydmVyLlxuLy8gLSBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjYWN0aW9uXG4vLyAtIGh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9kYXRhLXVwZGF0ZXNcbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCBhbnN3ZXIgPSBmb3JtRGF0YS5nZXQoJ2Fuc3dlcicpO1xuXG4gIC8vIFR5cGljYWwgYWN0aW9uIHdvcmtmbG93cyBzdGFydCB3aXRoIHZhbGlkYXRpbmcgdGhlIGZvcm0gZGF0YSB0aGF0IGp1c3QgY2FtZVxuICAvLyBvdmVyIHRoZSBuZXR3b3JrLiBDbGllbnRzaWRlIHZhbGlkYXRpb24gaXMgZmluZSwgYnV0IHlvdSBkZWZpbml0ZWx5IG5lZWQgaXRcbiAgLy8gc2VydmVyIHNpZGUuICBJZiB0aGVyZSdzIGEgcHJvYmxlbSwgcmV0dXJuIHRoZSB0aGUgZGF0YSBhbmQgdGhlIGNvbXBvbmVudFxuICAvLyBjYW4gcmVuZGVyIGl0LlxuICBpZiAodHlwZW9mIGFuc3dlciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ganNvbignQ29tZSBvbiwgYXQgbGVhc3QgdHJ5IScsIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBpZiAoYW5zd2VyICE9PSAnZWdnJykge1xuICAgIHJldHVybiBqc29uKGBTb3JyeSwgJHthbnN3ZXJ9IGlzIG5vdCByaWdodC5gLCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgLy8gRmluYWxseSwgaWYgdGhlIGRhdGEgaXMgdmFsaWQsIHlvdSdsbCB0eXBpY2FsbHkgd3JpdGUgdG8gYSBkYXRhYmFzZSBvciBzZW5kIG9yXG4gIC8vIGVtYWlsIG9yIGxvZyB0aGUgdXNlciBpbiwgZXRjLiBJdCdzIHJlY29tbWVuZGVkIHRvIHJlZGlyZWN0IGFmdGVyIGFcbiAgLy8gc3VjY2Vzc2Z1bCBhY3Rpb24sIGV2ZW4gaWYgaXQncyB0byB0aGUgc2FtZSBwbGFjZSBzbyB0aGF0IG5vbi1KYXZhU2NyaXB0IHdvcmtmbG93c1xuICAvLyBmcm9tIHRoZSBicm93c2VyIGRvZXNuJ3QgcmVwb3N0IHRoZSBkYXRhIGlmIHRoZSB1c2VyIGNsaWNrcyBiYWNrLlxuICByZXR1cm4gcmVkaXJlY3QoJy9kZW1vcy9jb3JyZWN0Jyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25zRGVtbygpIHtcbiAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcbiAgbGV0IGFjdGlvbk1lc3NhZ2UgPSB1c2VBY3Rpb25EYXRhPHN0cmluZz4oKTtcbiAgbGV0IGFuc3dlclJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAvLyBUaGlzIGZvcm0gd29ya3Mgd2l0aG91dCBKYXZhU2NyaXB0LCBidXQgd2hlbiB3ZSBoYXZlIEphdmFTY3JpcHQgd2UgY2FuIG1ha2VcbiAgLy8gdGhlIGV4cGVyaWVuY2UgYmV0dGVyIGJ5IHNlbGVjdGluZyB0aGUgaW5wdXQgb24gd3JvbmcgYW5zd2VycyEgR28gYWhlYWQsIGRpc2FibGVcbiAgLy8gSmF2YVNjcmlwdCBpbiB5b3VyIGJyb3dzZXIgYW5kIHNlZSB3aGF0IGhhcHBlbnMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGlvbk1lc3NhZ2UgJiYgYW5zd2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGFuc3dlclJlZi5jdXJyZW50LnNlbGVjdCgpO1xuICAgIH1cbiAgfSwgW2FjdGlvbk1lc3NhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXhfX3BhZ2VcIj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDI+QWN0aW9ucyE8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIGZvcm0gc3VibWlzc2lvbiB3aWxsIHNlbmQgYSBwb3N0IHJlcXVlc3QgdGhhdCB3ZSBoYW5kbGUgaW4gb3VyXG4gICAgICAgICAgYGFjdGlvbmAgZXhwb3J0LiBBbnkgcm91dGUgY2FuIGV4cG9ydCBhbiBhY3Rpb24gdG8gaGFuZGxlIGRhdGFcbiAgICAgICAgICBtdXRhdGlvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInJlbWl4X19mb3JtXCI+XG4gICAgICAgICAgPGgzPlBvc3QgYW4gQWN0aW9uPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxpPldoYXQgaXMgbW9yZSB1c2VmdWwgd2hlbiBpdCBpcyBicm9rZW4/PC9pPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8ZGl2PkFuc3dlcjo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2Fuc3dlclJlZn0gbmFtZT1cImFuc3dlclwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uPkFuc3dlciE8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWN0aW9uTWVzc2FnZSA/IChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Yj57YWN0aW9uTWVzc2FnZX08L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGFzaWRlPlxuICAgICAgICA8aDM+QWRkaXRpb25hbCBSZXNvdXJjZXM8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgR3VpZGU6eycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvZGF0YS13cml0ZXNcIj5EYXRhIFdyaXRlczwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIEFQSTp7JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNhY3Rpb25cIj5cbiAgICAgICAgICAgICAgUm91dGUgQWN0aW9uIEV4cG9ydFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQVBJOnsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcIj5cbiAgICAgICAgICAgICAgPGNvZGU+dXNlQWN0aW9uRGF0YTwvY29kZT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOaWNlV29yaygpIHtcbiAgcmV0dXJuIDxoMT5Zb3UgZ290IGl0IHJpZ2h0ITwvaDE+O1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogJ0JvdW5kYXJpZXMgRGVtbycgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm91bmRhcmllcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlXCI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8YXNpZGU+XG4gICAgICAgIDxoMj5DbGljayB0aGVzZSBMaW5rczwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cIi5cIj5TdGFydCBvdmVyPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJvbmVcIj5cbiAgICAgICAgICAgICAgUGFyYW06IDxpPm9uZTwvaT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwidHdvXCI+XG4gICAgICAgICAgICAgIFBhcmFtOiA8aT50d288L2k+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cInRoaXMtcmVjb3JkLWRvZXMtbm90LWV4aXN0XCI+VGhpcyB3aWxsIGJlIGEgNDA0PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJzaGgtaXRzLWEtc2VjcmV0XCI+QW5kIHRoaXMgd2lsbCBiZSA0MDEgVW5hdXRob3JpemVkPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJrYWJvb21cIj5UaGlzIG9uZSB3aWxsIHRocm93IGFuIGVycm9yPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3VuZGFyaWVzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+UGFyYW1zPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBXaGVuIHlvdSBuYW1lIGEgcm91dGUgc2VnbWVudCB3aXRoICQgbGlrZXsnICd9XG4gICAgICAgIDxjb2RlPnJvdXRlcy91c2Vycy8kdXNlcklkLmpzPC9jb2RlPiwgdGhlICQgc2VnbWVudCB3aWxsIGJlIHBhcnNlZCBmcm9tXG4gICAgICAgIHRoZSBVUkwgYW5kIHNlbnQgdG8geW91ciBsb2FkZXJzIGFuZCBhY3Rpb25zIGJ5IHRoZSBzYW1lIG5hbWUuXG4gICAgICA8L3A+XG4gICAgICA8aDI+RXJyb3JzPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBXaGVuIGEgcm91dGUgdGhyb3dzIGFuZCBlcnJvciBpbiBpdCdzIGFjdGlvbiwgbG9hZGVyLCBvciBjb21wb25lbnQsXG4gICAgICAgIFJlbWl4IGF1dG9tYXRpY2FsbHkgY2F0Y2hlcyBpdCwgd29uJ3QgZXZlbiB0cnkgdG8gcmVuZGVyIHRoZSBjb21wb25lbnQsXG4gICAgICAgIGJ1dCBpdCB3aWxsIHJlbmRlciB0aGUgcm91dGUncyBFcnJvckJvdW5kYXJ5IGluc3RlYWQuIElmIHRoZSByb3V0ZVxuICAgICAgICBkb2Vzbid0IGhhdmUgb25lLCBpdCB3aWxsIGJ1YmJsZSB1cCB0byB0aGUgcm91dGVzIGFib3ZlIGl0IHVudGlsIGl0IGhpdHNcbiAgICAgICAgdGhlIHJvb3QuXG4gICAgICA8L3A+XG4gICAgICA8cD5TbyBiZSBhcyBncmFudWxhciBhcyB5b3Ugd2FudCB3aXRoIHlvdXIgZXJyb3IgaGFuZGxpbmcuPC9wPlxuICAgICAgPGgyPk5vdCBGb3VuZDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgKGFuZCBvdGhlcnsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL1N0YXR1cyNjbGllbnRfZXJyb3JfcmVzcG9uc2VzXCI+XG4gICAgICAgICAgY2xpZW50IGVycm9yc1xuICAgICAgICA8L2E+XG4gICAgICAgIClcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBMb2FkZXJzIGFuZCBBY3Rpb25zIGNhbiB0aHJvdyBhIDxjb2RlPlJlc3BvbnNlPC9jb2RlPiBpbnN0ZWFkIG9mIGFuXG4gICAgICAgIGVycm9yIGFuZCBSZW1peCB3aWxsIHJlbmRlciB0aGUgQ2F0Y2hCb3VuZGFyeSBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICAgIFRoaXMgaXMgZ3JlYXQgd2hlbiBsb2FkaW5nIGRhdGEgZnJvbSBhIGRhdGFiYXNlIGlzbid0IGZvdW5kLiBBcyBzb29uIGFzXG4gICAgICAgIHlvdSBrbm93IHlvdSBjYW4ndCByZW5kZXIgdGhlIGNvbXBvbmVudCBub3JtYWxseSwgdGhyb3cgYSA0MDQgcmVzcG9uc2VcbiAgICAgICAgYW5kIHNlbmQgeW91ciBhcHAgaW50byB0aGUgY2F0Y2ggYm91bmRhcnkuIEp1c3QgbGlrZSBlcnJvciBib3VuZGFyaWVzLFxuICAgICAgICBjYXRjaCBib3VuZGFyaWVzIGJ1YmJsZSwgdG9vLlxuICAgICAgPC9wPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG4vLyBUaGUgYCRgIGluIHJvdXRlIGZpbGVuYW1lcyBiZWNvbWVzIGEgcGF0dGVybiB0aGF0J3MgcGFyc2VkIGZyb20gdGhlIFVSTCBhbmRcbi8vIHBhc3NlZCB0byB5b3VyIGxvYWRlcnMgc28geW91IGNhbiBsb29rIHVwIGRhdGEuXG4vLyAtIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNsb2FkZXItcGFyYW1zXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICAvLyBwcmV0ZW5kIGxpa2Ugd2UncmUgdXNpbmcgcGFyYW1zLmlkIHRvIGxvb2sgc29tZXRoaW5nIHVwIGluIHRoZSBkYlxuXG4gIGlmIChwYXJhbXMuaWQgPT09ICd0aGlzLXJlY29yZC1kb2VzLW5vdC1leGlzdCcpIHtcbiAgICAvLyBJZiB0aGUgcmVjb3JkIGRvZXNuJ3QgZXhpc3Qgd2UgY2FuJ3QgcmVuZGVyIHRoZSByb3V0ZSBub3JtYWxseSwgc29cbiAgICAvLyBpbnN0ZWFkIHdlIHRocm93IGEgNDA0IHJlcG9uc2UgdG8gc3RvcCBydW5uaW5nIGNvZGUgaGVyZSBhbmQgc2hvdyB0aGVcbiAgICAvLyB1c2VyIHRoZSBjYXRjaCBib3VuZGFyeS5cbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoJ05vdCBGb3VuZCcsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cblxuICAvLyBub3cgcHJldGVuZCBsaWtlIHRoZSByZWNvcmQgZXhpc3RzIGJ1dCB0aGUgdXNlciBqdXN0IGlzbid0IGF1dGhvcml6ZWQgdG9cbiAgLy8gc2VlIGl0LlxuICBpZiAocGFyYW1zLmlkID09PSAnc2hoLWl0cy1hLXNlY3JldCcpIHtcbiAgICAvLyBBZ2Fpbiwgd2UgY2FuJ3QgcmVuZGVyIHRoZSBjb21wb25lbnQgaWYgdGhlIHVzZXIgaXNuJ3QgYXV0aG9yaXplZC4gWW91XG4gICAgLy8gY2FuIGV2ZW4gcHV0IGRhdGEgaW4gdGhlIHJlc3BvbnNlIHRoYXQgbWlnaHQgaGVscCB0aGUgdXNlciByZWN0aWZ5IHRoZVxuICAgIC8vIGlzc3VlISBMaWtlIGVtYWlsaW5nIHRoZSB3ZWJtYXN0ZXIgZm9yIGFjY2VzcyB0byB0aGUgcGFnZS4gKE9oLCByaWdodCxcbiAgICAvLyBganNvbmAgaXMganVzdCBhIFJlc3BvbnNlIGhlbHBlciB0aGF0IG1ha2VzIGl0IGVhc2llciB0byBzZW5kIEpTT05cbiAgICAvLyByZXNwb25zZXMpLlxuICAgIHRocm93IGpzb24oeyB3ZWJtYXN0ZXJFbWFpbDogJ2hlbGxvQHJlbWl4LnJ1bicgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuXG4gIC8vIFNvbWV0aW1lcyB5b3VyIGNvZGUganVzdCBibG93cyB1cCBhbmQgeW91IG5ldmVyIGFudGljaXBhdGVkIGl0LiBSZW1peCB3aWxsXG4gIC8vIGF1dG9tYXRpY2FsbHkgY2F0Y2ggaXQgYW5kIHNlbmQgdGhlIFVJIHRvIHRoZSBlcnJvciBib3VuZGFyeS5cbiAgaWYgKHBhcmFtcy5pZCA9PT0gJ2thYm9vbScpIHtcbiAgICBsb2woKTtcbiAgfVxuXG4gIC8vIGJ1dCBvdGhlcndpc2UgdGhlIHJlY29yZCB3YXMgZm91bmQsIHVzZXIgaGFzIGFjY2Vzcywgc28gd2UgY2FuIGRvIHdoYXRldmVyXG4gIC8vIGVsc2Ugd2UgbmVlZGVkIHRvIGluIHRoZSBsb2FkZXIgYW5kIHJldHVybiB0aGUgZGF0YS4gKFRoaXMgaXMgYm9yaW5nLCB3ZSdyZVxuICAvLyBqdXN0IGdvbm5hIHJldHVybiB0aGUgcGFyYW1zLmlkKS5cbiAgcmV0dXJuIHsgcGFyYW06IHBhcmFtcy5pZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYW1EZW1vKCkge1xuICBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgcmV0dXJuIChcbiAgICA8aDE+XG4gICAgICBUaGUgcGFyYW0gaXMgPGkgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntkYXRhLnBhcmFtfTwvaT5cbiAgICA8L2gxPlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjY2F0Y2hib3VuZGFyeVxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWNhdGNoXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvZ3VpZGVzL25vdC1mb3VuZFxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0by5cbiAgICAgICAgICBNYXliZSBhc2sgdGhlIHdlYm1hc3RlciAoe2NhdWdodC5kYXRhLndlYm1hc3RlckVtYWlsfSkgZm9yIGFjY2Vzcy5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPkxvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHJlcXVlc3QhXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge2NhdWdodC5zdGF0dXN9IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5Pb3BzITwvaDI+XG4gICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgICA8cD5cbiAgICAgICAgKElzbid0IGl0IGNvb2wgdGhhdCB0aGUgdXNlciBnZXRzIHRvIHN0YXkgaW4gY29udGV4dCBhbmQgdHJ5IGEgZGlmZmVyZW50XG4gICAgICAgIGxpbmsgaW4gdGhlIHBhcnRzIG9mIHRoZSBVSSB0aGF0IGRpZG4ndCBibG93IHVwPylcbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2Vycm9yYm91bmRhcnlcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9ndWlkZXMvbm90LWZvdW5kXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5FcnJvciE8L2gyPlxuICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgPHA+XG4gICAgICAgIChJc24ndCBpdCBjb29sIHRoYXQgdGhlIHVzZXIgZ2V0cyB0byBzdGF5IGluIGNvbnRleHQgYW5kIHRyeSBhIGRpZmZlcmVudFxuICAgICAgICBsaW5rIGluIHRoZSBwYXJ0cyBvZiB0aGUgVUkgdGhhdCBkaWRuJ3QgYmxvdyB1cD8pXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGRhdGEgPyBgUGFyYW06ICR7ZGF0YS5wYXJhbX1gIDogJ09vcHMuLi4nLFxuICB9O1xufTtcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9kZW1vcy9hYm91dC5jc3MnO1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0Fib3V0IFJlbWl4JyxcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW50cm9cIj5cbiAgICAgICAgPGgyPkFib3V0IFVzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT2ssIHNvIHRoaXMgcGFnZSBpc24ndCByZWFsbHkgPGVtPmFib3V0IHVzPC9lbT4sIGJ1dCB3ZSBkaWQgd2FudCB0b1xuICAgICAgICAgIHNob3cgeW91IGEgZmV3IG1vcmUgdGhpbmdzIFJlbWl4IGNhbiBkby5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBEaWQgeW91IG5vdGljZSB0aGF0IHRoaW5ncyBsb29rIGEgbGl0dGxlIGRpZmZlcmVudCBvbiB0aGlzIHBhZ2U/IFRoZVxuICAgICAgICAgIENTUyB0aGF0IHdlIGltcG9ydCBpbiB0aGUgcm91dGUgZmlsZSBhbmQgaW5jbHVkZSBpbiBpdHN7JyAnfVxuICAgICAgICAgIDxjb2RlPmxpbmtzPC9jb2RlPiBleHBvcnQgaXMgb25seSBpbmNsdWRlZCBvbiB0aGlzIHJvdXRlIGFuZCBpdHNcbiAgICAgICAgICBjaGlsZHJlbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXYWl0IGEgc2VjLi4uPGVtPml0cyBjaGlsZHJlbjwvZW0+PyBUbyB1bmRlcnN0YW5kIHdoYXQgd2UgbWVhbiBieVxuICAgICAgICAgIHRoaXMseycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWwvNC1uZXN0ZWQtcm91dGVzLXBhcmFtc1wiPlxuICAgICAgICAgICAgcmVhZCBhbGwgYWJvdXQgbmVzdGVkIHJvdXRlcyBpbiB0aGUgZG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0SW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgYXJlIGxvb2tpbmcgYXQgdGhlIGluZGV4IHJvdXRlIGZvciB0aGUgPGNvZGU+L2Fib3V0PC9jb2RlPiBVUkxcbiAgICAgICAgc2VnbWVudCwgYnV0IHRoZXJlIGFyZSBuZXN0ZWQgcm91dGVzIGFzIHdlbGwhXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICA8TGluayB0bz1cIndob2FcIj5DaGVjayBvdXQgb25lIG9mIHRoZW0gaGVyZS48L0xpbms+XG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0SW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlxuICAgICAgICBXaG9hLCB0aGlzIGlzIGEgbmVzdGVkIHJvdXRlISBXZSByZW5kZXIgdGhlIDxjb2RlPi9hYm91dDwvY29kZT4gbGF5b3V0XG4gICAgICAgIHJvdXRlIGNvbXBvbmVudCwgYW5kIGl0cyA8Y29kZT5PdXRsZXQ8L2NvZGU+IHJlbmRlcnMgb3VyIHJvdXRlXG4gICAgICAgIGNvbXBvbmVudC4gXHVEODNFXHVERDJGXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICA8TGluayB0bz1cIi4uXCI+XG4gICAgICAgICAgICBHbyBiYWNrIHRvIHRoZSA8Y29kZT4vYWJvdXQ8L2NvZGU+IGluZGV4LlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiwgTGluayB9IGZyb20gJ3JlbWl4JztcblxudHlwZSBJbmRleERhdGEgPSB7XG4gIHJlc291cmNlczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHVybDogc3RyaW5nIH0+O1xuICBkZW1vczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHRvOiBzdHJpbmcgfT47XG59O1xuXG4vLyBMb2FkZXJzIHByb3ZpZGUgZGF0YSB0byBjb21wb25lbnRzIGFuZCBhcmUgb25seSBldmVyIGNhbGxlZCBvbiB0aGUgc2VydmVyLCBzb1xuLy8geW91IGNhbiBjb25uZWN0IHRvIGEgZGF0YWJhc2Ugb3IgcnVuIGFueSBzZXJ2ZXIgc2lkZSBjb2RlIHlvdSB3YW50IHJpZ2h0IG5leHRcbi8vIHRvIHRoZSBjb21wb25lbnQgdGhhdCByZW5kZXJzIGl0LlxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2xvYWRlclxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICBsZXQgZGF0YTogSW5kZXhEYXRhID0ge1xuICAgIHJlc291cmNlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnUmVtaXggRG9jcycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmVtaXgucnVuL2RvY3MnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JlYWN0IFJvdXRlciBEb2NzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUmVtaXggRGlzY29yZCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZGlzY29yZC5nZy9WQmVQczZkJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBkZW1vczogW1xuICAgICAge1xuICAgICAgICB0bzogJ2RlbW9zL2FjdGlvbnMnLFxuICAgICAgICBuYW1lOiAnQWN0aW9ucycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0bzogJ2RlbW9zL2Fib3V0JyxcbiAgICAgICAgbmFtZTogJ05lc3RlZCBSb3V0ZXMsIENTUyBsb2FkaW5nL3VubG9hZGluZycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0bzogJ2RlbW9zL3BhcmFtcycsXG4gICAgICAgIG5hbWU6ICdVUkwgUGFyYW1zIGFuZCBFcnJvciBCb3VuZGFyaWVzJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvcmVtaXgjanNvblxuICByZXR1cm4ganNvbihkYXRhKTtcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1JlbWl4IFN0YXJ0ZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnV2VsY29tZSB0byByZW1peCEnLFxuICB9O1xufTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZ3VpZGVzL3JvdXRpbmcjaW5kZXgtcm91dGVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPEluZGV4RGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXhfX3BhZ2VcIj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDI+V2VsY29tZSB0byBSZW1peCE8L2gyPlxuICAgICAgICA8cD5XZSdyZSBzdG9rZWQgdGhhdCB5b3UncmUgaGVyZS4gXHVEODNFXHVERDczPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBGZWVsIGZyZWUgdG8gdGFrZSBhIGxvb2sgYXJvdW5kIHRoZSBjb2RlIHRvIHNlZSBob3cgUmVtaXggZG9lcyB0aGluZ3MsXG4gICAgICAgICAgaXQgbWlnaHQgYmUgYSBiaXQgZGlmZmVyZW50IHRoYW4gd2hhdCB5b3VcdTIwMTlyZSB1c2VkIHRvLiBXaGVuIHlvdSdyZVxuICAgICAgICAgIHJlYWR5IHRvIGRpdmUgZGVlcGVyLCB3ZSd2ZSBnb3QgcGxlbnR5IG9mIHJlc291cmNlcyB0byBnZXQgeW91XG4gICAgICAgICAgdXAtYW5kLXJ1bm5pbmcgcXVpY2tseS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDaGVjayBvdXQgYWxsIHRoZSBkZW1vcyBpbiB0aGlzIHN0YXJ0ZXIsIGFuZCB0aGVuIGp1c3QgZGVsZXRlIHRoZXsnICd9XG4gICAgICAgICAgPGNvZGU+YXBwL3JvdXRlcy9kZW1vczwvY29kZT4gYW5kIDxjb2RlPmFwcC9zdHlsZXMvZGVtb3M8L2NvZGU+eycgJ31cbiAgICAgICAgICBmb2xkZXJzIHdoZW4geW91J3JlIHJlYWR5IHRvIHR1cm4gdGhpcyBpbnRvIHlvdXIgbmV4dCBwcm9qZWN0LlxuICAgICAgICA8L3A+XG4gICAgICA8L21haW4+XG4gICAgICA8YXNpZGU+XG4gICAgICAgIDxoMj5EZW1vcyBJbiBUaGlzIEFwcDwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZGF0YS5kZW1vcy5tYXAoKGRlbW8pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2RlbW8udG99IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlX19yZXNvdXJjZVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz17ZGVtby50b30gcHJlZmV0Y2g9XCJpbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7ZGVtby5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDI+UmVzb3VyY2VzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtkYXRhLnJlc291cmNlcy5tYXAoKHJlc291cmNlKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyZXNvdXJjZS51cmx9IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlX19yZXNvdXJjZVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtyZXNvdXJjZS51cmx9PntyZXNvdXJjZS5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2U3NmQ5YmU4JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1TT0QzVUJWVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSEFDRkpKNFkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BWUxTMzVYTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNk5FTDNGRFYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYmFyLWNoYXJ0LWRlbW8nOnsnaWQnOidyb3V0ZXMvYmFyLWNoYXJ0LWRlbW8nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmFyLWNoYXJ0LWRlbW8nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmFyLWNoYXJ0LWRlbW8tUEhBQ1YyUUQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2Fib3V0Jzp7J2lkJzoncm91dGVzL2RlbW9zL2Fib3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2RlbW9zL2Fib3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL2Fib3V0LUg2WFVGWkNFLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9kZW1vcy9hYm91dCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9hYm91dC9pbmRleC1YQUVFWUJITi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2Fib3V0L3dob2EnOnsnaWQnOidyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYScsJ3BhcmVudElkJzoncm91dGVzL2RlbW9zL2Fib3V0JywncGF0aCc6J3dob2EnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYS1VRTJFQ0VPTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2FjdGlvbnMnOnsnaWQnOidyb3V0ZXMvZGVtb3MvYWN0aW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkZW1vcy9hY3Rpb25zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL2FjdGlvbnMtQkdDQ0ZYNkIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RlbW9zL2NvcnJlY3QnOnsnaWQnOidyb3V0ZXMvZGVtb3MvY29ycmVjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkZW1vcy9jb3JyZWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL2NvcnJlY3QtU0FNSlZRUkIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9wYXJhbXMnOnsnaWQnOidyb3V0ZXMvZGVtb3MvcGFyYW1zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2RlbW9zL3BhcmFtcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kZW1vcy9wYXJhbXMtUFRNUERHNVUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkJzp7J2lkJzoncm91dGVzL2RlbW9zL3BhcmFtcy8kaWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9kZW1vcy9wYXJhbXMnLCdwYXRoJzonOmlkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL3BhcmFtcy8kaWQtU1VQT1YyUE0uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGVtb3MvcGFyYW1zL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGVtb3MvcGFyYW1zJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleC1TRFBGNUNVRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LU1PSlg1NUZHLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRTc2RDlCRTguanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQ0E7QUFEQTtBQUFBO0FBQ0EsWUFBdUI7QUFBQTtBQUFBOzs7QUNEdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUs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
