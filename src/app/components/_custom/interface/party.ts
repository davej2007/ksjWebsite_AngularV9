import { SortDirection } from '../directive/sortable.directive';

export interface IPARTY {
  _id       : String,
  date      : number,
  hostName  : String,
  partyID   : String,
  type      : String,
  venue     : String,
  songBook  : Boolean,
  messageScreens : Boolean,
}
export interface IASEARCHRESULT {
  entries: IPARTY[];
  total: number;
}
export interface IASTATE {
  page: number,
  pageSize: number,
  searchTerm: string,
  sortDirection: SortDirection
}