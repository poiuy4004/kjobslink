import { create } from "zustand";
const useZustand = {
  sortStore: create(set=>({
    sort: "",
    setSort: string=>set({sort: string})
  })),
  pageStore: create(set=>({
    page: "",
    setPage: string=>set({page: string})
  })),
}
export default useZustand