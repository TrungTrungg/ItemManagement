export interface IItems {
    _id: string;
    name: string;
    status: string;
    ordering: number;
}

export interface IPagination {
    currPage: number;
    from: number;
    itemsPerPage: number;
    pageRange: number;
    to: number;
    totalItems: number;
    totalPage: number;
    min: number;
    max: number;
}

export interface ISttFilter {
    name: string;
    count: number;
    style: string;
}
