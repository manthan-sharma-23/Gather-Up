import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { GqlClient } from "./lib/server_calls/gql/client.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
