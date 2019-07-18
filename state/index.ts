import ReactTruth from "react-truth";
import { fetchJson } from "./helpers/fetch";
import { State } from "./types";

export class Truth extends ReactTruth<State> {
  public async onLoad(): Promise<State> {
    return {
      ...this.state,
      status: "mounted"
    };
  }
  public async pullSomeRepos(): Promise<State> {
    const repos = await fetchJson(
      "https://api.github.com/users/zapaiamarce/repos"
    );

    return {
      ...this.state,
      repos
    };
  }
}

const initialState = new State();

export const myTruth = new Truth(initialState);

export default myTruth;
